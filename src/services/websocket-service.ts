import { bus, AppBus } from "../modules/event-bus/app-bus";
import EVENTS from "../modules/event-bus/events";

export class WebSocketService {
    static baseUrl: string = "wss://ya-praktikum.tech/ws/chats/";
    private socket: WebSocket;
    private pingTimeoutId: any;
    bus: AppBus;

    constructor(userId: number, chatId: number, tokenValue: string) {
        this.socket = new WebSocket(
            `${WebSocketService.baseUrl}${userId}/${chatId}/${tokenValue}`
        );
        this.bus = bus;
        this.pingTimeoutId = -1;

        this.socket.addEventListener("open", () => {
            console.log("Соединение установлено");

            this.send("get old", "0");

            this.pingTimeoutId = setInterval(() => {
                this.ping();
            }, 15000);
        });

        this.socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);

            if (data.type === "error") return;

            this.bus.emit(EVENTS.MESSAGES_RECEIVED, data);
        });

        this.socket.addEventListener("close", () => {
            console.log("Соединение закрыто");
        });

        this.bus.on(EVENTS.SEND_MESSAGE, (data) => this.send("message", data));
    }

    send(type: string, content: string) {
        this.socket.send(
            JSON.stringify({
                type,
                content,
            })
        );
    }

    close() {
        clearInterval(this.pingTimeoutId);
        this.socket.close();
    }

    private ping() {
        this.send("", "");
    }
}
