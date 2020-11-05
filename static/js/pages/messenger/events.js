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
import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";
var store = new Store();
var bus = new AppBus();
export var events = [
    {
        type: "input",
        el: ".js-chats-search",
        handler: function (evt) {
            evt.preventDefault();
            if (evt.target.value && store.get("chats")) {
                bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats").filter(function (chat) {
                    return chat.title.indexOf(evt.target.value) !== -1;
                }).map(function (c) {
                    if (c.id.toString() === store.get("currentChat").id.toString()) {
                        return __assign(__assign({}, c), { active: true });
                    }
                    else {
                        return c;
                    }
                }));
            }
            else {
                bus.emit(EVENTS.ROOMS_UPDATE, store.get("chats").map(function (c) {
                    if (c.id.toString() === store.get("currentChat").id.toString()) {
                        return __assign(__assign({}, c), { active: true });
                    }
                    else {
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
            var input = document.querySelector("input[name='title']");
            if (input) {
                bus.emit(EVENTS.CREATE_CHAT, input.value);
            }
        }
    }
];
//# sourceMappingURL=events.js.map