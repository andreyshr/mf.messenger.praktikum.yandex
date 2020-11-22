import { bus, AppBus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";
import Store from "../../modules/store/store";
import { isArray } from "../../utils/mydash/is-array";
import { isObject } from "../../utils/mydash/is-object";

export class WebSocketService {
    private _socket: WebSocket;
    private pingTimeoutId: any;
    bus: AppBus;
    store: Store;

    constructor(userId: number, chatId: number, tokenValue: string) {
        this._socket = new WebSocket(
            `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenValue}`
        );
        this.store = new Store();
        this.bus = bus;
        this.pingTimeoutId = -1;

        this._socket.addEventListener("open", () => {
            console.log("Соединение установлено");

            this.send("get old", "0");

            this.pingTimeoutId = setInterval(() => {
                this.ping();
            }, 15000);
        });

        this._socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);

            if (data.type === "error") return;

            if (isArray(data))
                this.store.set("messages", [
                    ...this.store.get("messages"),
                    ...data.reverse(),
                ]);

            if (isObject(data) && !isArray(data) && data.type === "message")
                this.store.get("messages").push(data);

            this.bus.emit(EVENTS.MESSAGES_UPDATE, this.store.get("messages"));
        });

        this._socket.addEventListener("close", () => {
            console.log("Соединение закрыто");
        });

        this.bus.on(EVENTS.SEND_MESSAGE, (data) => this.send("message", data));
    }

    send(type: string, content: string) {
        this._socket.send(
            JSON.stringify({
                type,
                content,
            })
        );
    }

    close() {
        clearInterval(this.pingTimeoutId);
        this._socket.close();
    }

    private ping() {
        this.send("", "");
    }
}
