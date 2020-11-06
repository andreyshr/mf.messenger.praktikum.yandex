import {ChatsApi} from "../api/chats-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
import {Nullable} from "../utils/utility-type";
import {ChatResponse, ChatUsersRequest, ProfileResponse} from "./types";

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
        this.bus = new AppBus();
        this.store = new Store();

        this.bus.on(EVENTS.CREATE_CHAT, this.createChat);
        this.bus.on(EVENTS.CHAT_USER_ACTION, this.userAction);

        ChatsService.__instance = this;
    }

    get currentChat() {
        return this.store.get("currentChat");
    }

    get currentChatId() {
        return this.currentChat.id;
    }

    get user() {
        return this.store.get("user");
    }

    get dialog() {
        return this.store.get("dialog");
    }

    getChats() {
        return this.chatsApi.getChats()
            .then((data: ChatResponse[]): ChatResponse[] => {
                this.store.set("chats", data);
                return data;
            })
            .catch(err => {
                throw err
            });
    }

    createChat = (title: string) => {
        return this.chatsApi.createChat(title)
            .then(() => this.getChats())
            .then((data: ChatResponse[]): ChatResponse[] => {
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, `Чат "${title}" создан`, "success");
                this.bus.emit(EVENTS.ROOMS_UPDATE, data);
                return data;
            })
            .then(err => err);
    }

    getUsers = () => {
        return this.chatsApi.getUsers(this.currentChatId)
            .then((data: ProfileResponse[]): ProfileResponse[] => {
                this.bus.emit(EVENTS.USERS_UPDATE, data.map((user: ProfileResponse) => ({ title: user.login, id: user.id, avatarImg: user.avatar })));
                return data;
            })
            .catch(err => err);
    }

    userAction = (userId: number) => {
        if (this.dialog === "remove_user") {
            this.removeUsers(userId);
        }
        if (this.dialog === "add_user") {
            this.addUsers(userId);
        }
    }

    addUsers = (userId: number) => {
        const data: ChatUsersRequest = {
            users: [userId],
            chatId: this.currentChatId
        }

        return this.chatsApi.addUsers(data)
            .then((data: unknown) => {
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, `Пользователь добавлен в чат`, "success");

                return data;
            })
            .catch(() => {
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, 'Произошла ошибка', "warning");
            });
    }

    removeUsers = (userId: number) => {
        const data: ChatUsersRequest = {
            users: [userId],
            chatId: this.currentChatId
        }

        return this.chatsApi.removeUsers(data)
            .then(() => {
                if (userId === this.user.id) {
                    this.bus.emit(EVENTS.NOTIFICATION_SHOW, `Чат удалён`, "success");

                    return this.getChats()
                        .then(() => {
                            this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
                            this.bus.emit(EVENTS.CLOSE_DIALOG);
                        });
                } else {
                    this.bus.emit(EVENTS.NOTIFICATION_SHOW, `Пользователь удалён из чата`, "success");

                    return this.getUsers();
                }
            })
            .catch(() => {
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, 'Произошла ошибка', "warning");
            });
    }
}
