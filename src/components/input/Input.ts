import Block from "../../modules/block/block.js";
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import {PropsInput} from "./types";

export default class Input extends Block {
    bus: AppBus;

    constructor(props: PropsInput) {
        super("div", props);

        this.bus = new AppBus();
        this.bus.on(EVENTS.FORM_INVALID, this.showError);

        Block._instances.push(this);
    }

    showError = (...inputs: PropsInput[]) => {
        const input = inputs.find((input: PropsInput): boolean => input.name === this.props.name);
        if (!input) return;
        const node = document.querySelector(`.error-message[data-name=${input.name}]`);
        if (input.status) {
            if (node) node.classList.remove('error-message--active');
        } else {
            if (node) node.classList.add('error-message--active');
        }
    }

    render() {
        return Handlebars.compile(this.props.template === "profile" ? templateProfile : templateMain)(this.props);
    }
}
