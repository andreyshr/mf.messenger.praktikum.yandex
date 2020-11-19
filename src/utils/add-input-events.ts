import { bus } from "../modules/event-bus/app-bus";
import EVENTS from "../modules/event-bus/events";
import { PropsInput } from "../components/input/types";

export const addInputEvents = (input: PropsInput): PropsInput => ({
    ...input,
    events: [
        {
            type: "input",
            el: `input[id=${input.id}]`,
            handler: function (evt: Event) {
                bus.emit(
                    EVENTS.FORM_INPUT,
                    (evt.target as HTMLInputElement).name,
                    (evt.target as HTMLInputElement).value,
                    input.action
                );
            },
        },
        {
            type: "focus",
            el: `input[id=${input.id}]`,
            handler: function (evt: Event) {
                bus.emit(
                    EVENTS.FORM_VALIDATE,
                    (evt.target as HTMLInputElement).name,
                    input.action
                );
            },
        },
        {
            type: "blur",
            el: `input[id=${input.id}]`,
            handler: function (evt: Event) {
                bus.emit(
                    EVENTS.FORM_VALIDATE,
                    (evt.target as HTMLInputElement).name,
                    input.action
                );
            },
        },
    ],
});
