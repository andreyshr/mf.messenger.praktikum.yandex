import EVENTS from "../../modules/event-bus/events.js";
import Store from "../../modules/store/store.js";
import { bus } from "../../modules/event-bus/app-bus.js";
var store = new Store();
export var events = [
    {
        type: "input",
        el: ".messenger--list .js-input-chat-search",
        handler: function (evt) {
            evt.preventDefault();
            var value = evt.target.value;
            searchChatByName(value);
        },
    },
    {
        type: "submit",
        el: ".messenger--list .js-form-chat-search",
        handler: function (evt) {
            evt.preventDefault();
            var input = evt.target[0];
            var value = input.value;
            searchChatByName(value);
        },
    },
    {
        type: "submit",
        el: ".js-form-create-chat",
        handler: function (evt) {
            evt.preventDefault();
            var input = document.querySelector("input[name='title']");
            if (input.value) {
                bus.emit(EVENTS.CREATE_CHAT, input.value);
            }
        },
    },
];
function searchChatByName(value) {
    if (value && store.get("chats")) {
        bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats").filter(function (chat) {
            return chat.title.indexOf(value) !== -1;
        }));
    }
    else {
        bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats"));
    }
}
//# sourceMappingURL=events.js.map