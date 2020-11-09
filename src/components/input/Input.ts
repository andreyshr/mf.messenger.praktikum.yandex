import Block from "../../modules/block/block.js";
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import { PropsInput } from "./types";

export default class Input extends Block {
    bus: AppBus;

    constructor(props: PropsInput) {
        super("div", props);

        this.bus = new AppBus();
        this.bus.on(EVENTS.FORM_INVALID, this.showError);
        this.bus.on(EVENTS.INPUT_UPDATE_VALUE, this.updateValue);

        Block._instances.push(this);
    }

    showError = (...inputs: PropsInput[]) => {
        const input = inputs.find(
            (input: PropsInput): boolean => input.name === this.props.name
        );
        if (!input) return;
        const nodes = Array.from(
            document.querySelectorAll(`.error-message[data-name=${input.name}]`)
        );
        if (input.status) {
            if (nodes.length) {
                nodes.forEach((n) =>
                    n.classList.remove("error-message--active")
                );
            }
        } else {
            if (nodes.length) {
                nodes.forEach((n) => n.classList.add("error-message--active"));
            }
        }
    };

    updateValue = (name: string, value: string, action: string) => {
        if (action === this.props.action && this.props.name === name) {
            this.setProps({
                value: value,
            });
            this.bus.emit(EVENTS.FORM_INPUT, name, value, this.props.action);
            this.forceUpdate();
        }
    };

    render() {
        return Handlebars.compile(
            this.props.template === "profile" ? templateProfile : templateMain
        )(this.props);
    }
}
