import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";
import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";

export default class Notification extends Block {
    constructor(props: Props) {
        super("div", props);

        bus.on(EVENTS.NOTIFICATION_SHOW, this.showNotification);

        Block._instances.push(this);
    }

    showNotification = (message: string, type: string) => {
        this.setProps({
            message,
            type,
        });
        this.show();
        setTimeout(() => {
            this.hide();
        }, 3500);
    };

    componentMounted() {
        this.hide();
    }

    render() {
        return template(this.props);
    }
}
