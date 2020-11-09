import { Listeners, Listener } from "./types";

export class EventBus {
    listeners: Listeners;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: Listener): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Listener): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback
        );
    }

    emit(event: string, ...args: any[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function (listener: Listener) {
            listener(...args);
        });
    }
}
