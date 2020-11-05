import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Avatar from "../avatar/Avatar.js";
import {Props} from "../../modules/block/types";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js"
const bus = new AppBus();

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
        return Handlebars.compile(template)({
            ...this.props,
            avatar: new Avatar({
                className: "room__avatar avatar",
                avatarImg: this.props.avatarImg,
                newMessagesCount: this.props.newMessagesCount,
            }).renderToString()
        });
    }
}
