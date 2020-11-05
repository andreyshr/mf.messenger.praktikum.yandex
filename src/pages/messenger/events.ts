import EVENTS from "../../modules/event-bus/events.js";
import {Props} from "../../modules/block/types";
import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";

const store = new Store();
const bus = new AppBus();

export const events = [
    {
        type: "input",
        el: ".js-chats-search",
        handler(evt: any) {
            evt.preventDefault();
            if (evt.target.value && store.get("chats")) {
                bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats").filter((chat: Props): boolean => {
                    return chat.title.indexOf(evt.target.value) !== -1;
                }).map((c: any) => {
                    if (c.id.toString() === store.get("currentChat").id.toString()) {
                        return {
                            ...c,
                            active: true
                        }
                    } else {
                        return c;
                    }
                }));
            } else {
                bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats").map((c: any) => {
                    if (c.id.toString() === store.get("currentChat").id.toString()) {
                        return {
                            ...c,
                            active: true
                        }
                    } else {
                        return c;
                    }
                }));
            }
        }
    },
    {
        type: "click",
        el: ".js-button-create-chat",
        handler: function () {
            const input = document.querySelector("input[name='title']") as HTMLInputElement;
            if (input) {
                bus.emit(EVENTS.CREATE_CHAT, input.value)
            }
        }
    }
];
