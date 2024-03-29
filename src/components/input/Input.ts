import Block from "../../modules/block/block";
import templateMain from "./template.hbs";
import templateProfile from "./template-profile.hbs";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";

import { PropsInput } from "./types";

export default class Input extends Block {
    constructor(props: PropsInput) {
        super("div", props);

        bus.on(EVENTS.FORM_INVALID, this.showError);
        bus.on(EVENTS.INPUT_UPDATE_VALUE, this.updateValue);

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
            bus.emit(EVENTS.FORM_INPUT, name, value, this.props.action);
            this.forceUpdate();
        }
    };

    get template() {
        return this.props.template === "profile"
            ? templateProfile
            : templateMain;
    }

    render() {
        return this.template(this.props);
    }
}
