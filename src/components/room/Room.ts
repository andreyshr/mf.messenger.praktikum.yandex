import Block from "../../modules/block/block";
import template from "./template.hbs";

import Avatar from "../avatar/Avatar";
import { Props } from "../../modules/block/types";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";

export default class Room extends Block {
    avatar: Block;
    constructor(props: Props) {
        super("li", props);

        Block._instances.push(this);
    }

    onClick(evt: Event) {
        evt.preventDefault();
        bus.emit(EVENTS.ROUTER_GO, "/messenger/:id");
    }

    render() {
        return template({
            ...this.props,
            avatar: new Avatar({
                className: "room__avatar avatar",
                avatarImg: this.props.avatarImg,
                newMessagesCount: this.props.newMessagesCount,
            }).renderToString(),
        });
    }
}
