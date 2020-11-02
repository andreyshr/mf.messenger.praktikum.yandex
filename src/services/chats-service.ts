import {ChatsApi} from "../api/chats-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import Store from "../modules/store/store.js";

export class ChatsService {
    chatsApi: ChatsApi;
    bus: AppBus;
    store: Store;

    constructor() {
        this.chatsApi = new ChatsApi();
        this.bus = new AppBus();
        this.store = new Store();
    }

    getChats() {
        return this.chatsApi.getChats()
            .then((data: any) => {
                this.store.set("chats", data);
                return data;
            })
            .catch(err => {
                throw err
            });
    }

    createChat(title: string) {
        return this.chatsApi.createChat(title)
            .then(() => this.getChats())
            .then((data: any) => {
                this.store.set("chats", data);
                return data;
            })
    }
}
