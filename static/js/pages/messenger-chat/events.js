var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import EVENTS from "../../modules/event-bus/events.js";
import { bus } from "../../modules/event-bus/app-bus.js";
import { userService } from "../../services/user-service.js";
import Store from "../../modules/store/store.js";
var store = new Store();
export var events = [
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
        handler: function (evt) {
            evt.preventDefault();
            userService.search(evt.target.value);
        },
    },
    {
        type: "click",
        el: ".js-user-button",
        handler: function (evt) {
            evt.preventDefault();
            var el = evt.target;
            while (!el.classList.contains("room")) {
                el = el.parentElement;
            }
            var userId = el.dataset
                .userId;
            bus.emit(EVENTS.CHAT_USER_ACTION, parseInt(userId, 10));
        },
    },
    {
        type: "input",
        el: ".messenger--chat .js-input-chat-search",
        handler: function (evt) {
            evt.preventDefault();
            var value = evt.target.value;
            searchChatByName(value);
        },
    },
    {
        type: "submit",
        el: ".messenger--chat .js-form-chat-search",
        handler: function (evt) {
            evt.preventDefault();
            var input = evt.target[0];
            var value = input.value;
            searchChatByName(value);
        },
    },
];
function searchChatByName(value) {
    if (value && store.get("chats")) {
        bus.emit(EVENTS.ROOMS_UPDATE, store
            .get("chats")
            .filter(function (chat) {
            return chat.title.indexOf(value) !== -1;
        })
            .map(function (c) {
            if (c.id.toString() ===
                store.get("currentChat").id.toString()) {
                return __assign(__assign({}, c), { active: true });
            }
            else {
                return c;
            }
        }));
    }
    else {
        bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats").map(function (c) {
            if (c.id.toString() ===
                store.get("currentChat").id.toString()) {
                return __assign(__assign({}, c), { active: true });
            }
            else {
                return c;
            }
        }));
    }
}
//# sourceMappingURL=events.js.map