import { ChatsApi } from "../api/chats-api";
import { bus, AppBus } from "../modules/event-bus/app-bus";
import EVENTS from "../modules/event-bus/events";
import Store from "../modules/store/store";
import { Nullable } from "../utils/utility-type";
import {
    ChatResponse,
    ChatUsersRequest,
    ProfileResponse,
    UserResponse,
} from "./types";
import { WebSocketService } from "./websocket-service";
import { isArray } from "../utils/mydash/is-array";
import { isObject } from "../utils/mydash/is-object";

export class ChatsService {
    chatsApi: ChatsApi;
    bus: AppBus;
    store: Store;
    socket: Nullable<WebSocketService>;
    static __instance: Nullable<ChatsService> = null;

    constructor() {
        if (ChatsService.__instance) {
            return ChatsService.__instance;
        }

        this.chatsApi = new ChatsApi();
        this.store = new Store();
        this.bus = bus;
        this.socket = null;

        this.bus.on(EVENTS.CREATE_CHAT, this.createChat);
        this.bus.on(EVENTS.CHAT_USER_ACTION, this.userAction);
        this.bus.on(EVENTS.CREATE_CHAT_SESSION, this.createChatSession);
        this.bus.on(EVENTS.CLOSE_CHAT_SESSION, this.closeChatSession);
        this.bus.on(EVENTS.MESSAGES_RECEIVED, this.messagesHandler);

        ChatsService.__instance = this;
    }

    get currentChat(): ChatResponse {
        return this.store.get("currentChat");
    }

    get currentChatId(): number {
        return this.currentChat.id;
    }

    get messages() {
        return this.store.get("messages");
    }

    get user(): UserResponse {
        return this.store.get("user");
    }

    get dialog(): string {
        return this.store.get("dialog");
    }

    createChatSession = () => {
        this.getChatToken(this.currentChatId).then((data) => {
            this.store.set("messages", []);
            this.socket = new WebSocketService(
                this.user.id,
                this.currentChatId,
                data.token
            );
        });
    };

    closeChatSession = () => {
        this.store.set("messages", []);
        this.socket?.close();
    };

    messagesHandler = (data: Record<string, any>) => {
        if (isArray(data))
            this.store.set("messages", [...this.messages, ...data.reverse()]);

        if (isObject(data) && !isArray(data) && data.type === "message")
            this.store.set("messages", [...this.messages, data]);

        this.bus.emit(EVENTS.MESSAGES_UPDATE, this.store.get("messages"));
    };

    getChats() {
        return this.chatsApi
            .getChats()
            .then((data: ChatResponse[]): ChatResponse[] => {
                this.store.set("chats", data);
                return data;
            });
    }

    getChatToken(id: number) {
        return this.chatsApi.getChatToken(id);
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
