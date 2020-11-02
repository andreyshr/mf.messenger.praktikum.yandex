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
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
var bus = new AppBus();
var store = new Store();
export var addRoomEvents = function (room) { return (__assign(__assign({}, room), { events: [
        {
            type: "click",
            el: "[data-room-id='" + room.id + "']",
            handler: function (evt) {
                evt.preventDefault();
                store.set("currentChat", room);
                bus.emit(EVENTS.ROUTER_GO, "/messenger/:id");
            }
        }
    ] })); };
//# sourceMappingURL=add-room-events.js.map