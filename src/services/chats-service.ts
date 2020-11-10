import { ChatsApi } from "../api/chats-api.js";
import { bus, AppBus } from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
import { Nullable } from "../utils/utility-type";
import {
    ChatResponse,
    ChatUsersRequest,
    ProfileResponse,
    UserResponse,
} from "./types";

export class ChatsService {
    chatsApi: ChatsApi;
    bus: AppBus;
    store: Store;
    static __instance: Nullable<ChatsService> = null;

    constructor() {
        if (ChatsService.__instance) {
            return ChatsService.__instance;
        }

        this.chatsApi = new ChatsApi();
        this.store = new Store();
        this.bus = bus;

        this.bus.on(EVENTS.CREATE_CHAT, this.createChat);
        this.bus.on(EVENTS.CHAT_USER_ACTION, this.userAction);

        ChatsService.__instance = this;
    }

    get currentChat(): ChatResponse {
        return this.store.get("currentChat");
    }

    get currentChatId(): number {
        return this.currentChat.id;
    }

    get user(): UserResponse {
        return this.store.get("user");
    }

    get dialog(): string {
        return this.store.get("dialog");
    }

    getChats() {
        return this.chatsApi
            .getChats()
            .then((data: ChatResponse[]): ChatResponse[] => {
                this.store.set("chats", data);
                return data;
            });
    }

    createChat = (title: string) => {
        return this.chatsApi
            .createChat(title)
            .then(() => this.getChats())
            .then((data: ChatResponse[]): ChatResponse[] => {
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    `Чат "${title}" создан`,
                    "success"
                );
                this.bus.emit(EVENTS.ROOMS_UPDATE, data);
                return data;
            })
            .catch((err) => console.log(err));
    };

    getUsers = () => {
        return this.chatsApi
            .getUsers(this.currentChatId)
            .then((data: ProfileResponse[]): ProfileResponse[] => {
                this.bus.emit(
                    EVENTS.USERS_UPDATE,
                    data.map((user: ProfileResponse) => ({
                        title: user.login,
                        id: user.id,
                        avatarImg: user.avatar,
                    }))
                );
                return data;
            })
            .catch((err) => console.log(err));
    };

    userAction = (userId: number) => {
        if (this.dialog === "remove_user") {
            this.removeUsers(userId);
        }
        if (this.dialog === "add_user") {
            this.addUsers(userId);
        }
    };

    addUsers = (userId: number) => {
        const data: ChatUsersRequest = {
            users: [userId],
            chatId: this.currentChatId,
        };

        return this.chatsApi
            .addUsers(data)
            .then(() => {
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    `Пользователь добавлен в чат`,
                    "success"
                );

                return data;
            })
            .catch(() => {
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    "Произошла ошибка",
                    "warning"
                );
            });
    };

    removeUsers = (userId: number) => {
        const data: ChatUsersRequest = {
            users: [userId],
            chatId: this.currentChatId,
        };

        return this.chatsApi
            .removeUsers(data)
            .then(() => {
                if (userId === this.user.id) {
                    this.bus.emit(
                        EVENTS.NOTIFICATION_SHOW,
                        `Чат удалён`,
                        "success"
                    );

                    return this.getChats().then(() => {
                        this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
                        this.bus.emit(EVENTS.CLOSE_DIALOG);
                    });
                } else {
                    this.bus.emit(
                        EVENTS.NOTIFICATION_SHOW,
                        `Пользователь удалён из чата`,
                        "success"
                    );

                    return this.getUsers();
                }
            })
            .catch(() => {
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    "Произошла ошибка",
                    "warning"
                );
            });
    };
}

export const chatsService = new ChatsService();
