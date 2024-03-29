import EVENTS from "../../modules/event-bus/events";
import { Props } from "../../modules/block/types";
import Store from "../../modules/store/store";
import { bus } from "../../modules/event-bus/app-bus";

const store = new Store();

export const events = [
    {
        type: "input",
        el: ".messenger--list .js-input-chat-search",
        handler(evt: Event) {
            evt.preventDefault();

            const value: string = (evt.target as HTMLInputElement).value;

            searchChatByName(value);
        },
    },
    {
        type: "submit",
        el: ".messenger--list .js-form-chat-search",
        handler(evt: Event) {
            evt.preventDefault();

            const input = (evt.target as HTMLFormElement)[0];
            const value: string = (input as HTMLInputElement).value;

            searchChatByName(value);
        },
    },
    {
        type: "submit",
        el: ".js-form-create-chat",
        handler: function (evt: Event) {
            evt.preventDefault();
            const input = document.querySelector(
                "input[name='title']"
            ) as HTMLInputElement;
            if (input.value) {
                bus.emit(EVENTS.CREATE_CHAT, input.value);
            }
        },
    },
];

function searchChatByName(value: string) {
    if (value && store.get("chats")) {
        bus.emit(
            EVENTS.ROOMS_UPDATE,
            store.get("chats").filter((chat: Props): boolean => {
                return chat.title.indexOf(value) !== -1;
            })
        );
    } else {
        bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats"));
    }
}
