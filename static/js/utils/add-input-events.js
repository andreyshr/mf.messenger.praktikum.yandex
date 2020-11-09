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
var bus = new AppBus();
export var addInputEvents = function (input) { return (__assign(__assign({}, input), { events: [
        {
            type: "input",
            el: "input[id=" + input.id + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_INPUT, evt.target.name, evt.target.value, input.action);
            },
        },
        {
            type: "focus",
            el: "input[id=" + input.id + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name, input.action);
            },
        },
        {
            type: "blur",
            el: "input[id=" + input.id + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name, input.action);
            },
        },
    ] })); };
//# sourceMappingURL=add-input-events.js.map