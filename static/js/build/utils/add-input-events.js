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
// особенность расширений импортов описана в README.md
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
var bus = new AppBus();
export var addInputEvents = function (input) { return (__assign(__assign({}, input), { events: [
        {
            type: "input",
            el: "input[name=" + input.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_INPUT, evt.target.name, evt.target.value);
            }
        },
        {
            type: "focus",
            el: "input[name=" + input.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        },
        {
            type: "blur",
            el: "input[name=" + input.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        }
    ] })); };
//# sourceMappingURL=add-input-events.js.map