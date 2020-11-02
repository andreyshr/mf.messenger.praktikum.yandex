import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

const bus = new AppBus();

export default class Notification extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);

        bus.on(EVENTS.NOTIFICATION_SHOW, this.showNotification)
    }

    showNotification = (message: string, type: string) => {
        this.setProps({
            message,
            type
        })
        this.show();
        setTimeout(() => {
            this.hide();
        }, 5000)
    }

    componentMounted() {
        this.hide()
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
