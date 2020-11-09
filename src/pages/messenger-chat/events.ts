import EVENTS from "../../modules/event-bus/events.js";
import { bus } from "../../modules/event-bus/app-bus.js";
import { userService } from "../../services/user-service.js";
import { Props } from "../../modules/block/types";
import Store from "../../modules/store/store.js";

const store = new Store();

export const events = [
    {
        type: "click",
        el: ".js-add-user-open-dialog",
        handler: function () {
            bus.emit(EVENTS.OPEN_ADD_USER_DIALOG);
        },
    },
    {
        type: "click",
        el: ".js-remove-user-open-dialog",
        handler: function () {
            bus.emit(EVENTS.OPEN_REMOVE_USER_DIALOG);
        },
    },
    {
        type: "click",
        el: ".js-close-dialog-button",
        handler: function () {
            bus.emit(EVENTS.CLOSE_DIALOG);
        },
    },
    {
        type: "click",
        el: ".overlay",
        handler: function () {
            bus.emit(EVENTS.CLOSE_DIALOG);
        },
    },
    {
        type: "input",
        el: ".js-user-search",
        handler: function (evt: Event) {
            evt.preventDefault();
            userService.search((evt.target as HTMLInputElement).value);
        },
    },
    {
        type: "click",
        el: ".js-user-button",
        handler: function (evt: Event) {
            evt.preventDefault();
            let el = evt.target as HTMLElement;
            while (!el.classList.contains("room")) {
                el = <HTMLElement>el.parentElement;
            }
            const userId: string | undefined = (el as HTMLElement).dataset
                .userId;
            bus.emit(
                EVENTS.CHAT_USER_ACTION,
                parseInt(userId as string, 10) as number
            );
        },
    },
    {
        type: "input",
        el: ".messenger--chat .js-input-chat-search",
        handler(evt: Event) {
            evt.preventDefault();

            const value = (evt.target as HTMLInputElement).value;

            searchChatByName(value);
        },
    },
    {
        type: "submit",
        el: ".messenger--chat .js-form-chat-search",
        handler(evt: Event) {
            evt.preventDefault();

            const input = (evt.target as HTMLFormElement)[0];
            const value: string = (input as HTMLInputElement).value;

            searchChatByName(value);
        },
    },
];

function searchChatByName(value: string) {
    if (value && store.get("chats")) {
        bus.emit(
            EVENTS.ROOMS_UPDATE,
            store
                .get("chats")
                .filter((chat: Props): boolean => {
                    return chat.title.indexOf(value) !== -1;
                })
                .map(
                    (c: Props): Props => {
                        if (
                            c.id.toString() ===
                            store.get("currentChat").id.toString()
                        ) {
                            return {
                                ...c,
                                active: true,
                            };
                        } else {
                            return c;
                        }
                    }
                )
        );
    } else {
        bus.emit(
            EVENTS.ROOMS_UPDATE,
            store.get("chats").map(
                (c: Props): Props => {
                    if (
                        c.id.toString() ===
                        store.get("currentChat").id.toString()
                    ) {
                        return {
                            ...c,
                            active: true,
                        };
                    } else {
                        return c;
                    }
                }
            )
        );
    }
}
