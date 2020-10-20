import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";

const bus = new AppBus();

export const addInputEvents = (input: PropsInput) => ({
    ...input,
    events: [
        {
            type: "input",
            el: `input[name=${input.name}]`,
            handler: function (evt: any) {
                bus.emit(EVENTS.FORM_INPUT, evt.target.name, evt.target.value);
            }
        },
        {
            type: "focus",
            el: `input[name=${input.name}]`,
            handler: function (evt: any) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        },
        {
            type: "blur",
            el: `input[name=${input.name}]`,
            handler: function (evt: any) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        }
    ]
})
