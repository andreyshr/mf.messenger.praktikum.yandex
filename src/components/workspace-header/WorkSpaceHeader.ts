import Block from "../../modules/block/block";
import template from "./template.hbs";

import Menu from "../menu/Menu";
import Avatar from "../avatar/Avatar";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";

import { Props } from "../../modules/block/types";

export default class WorkSpaceHeader extends Block {
    constructor(props: Props) {
        super("header", props);

        bus.on(EVENTS.ROOM_UPDATE, (currentChat) => {
            this.setProps({
                ...this.props,
                ...currentChat,
            });
        });

        Block._instances.push(this);
    }

    render() {
        return template({
            ...this.props,
            menuChat: new Menu(this.props.menuChat).renderToString(),
            avatar: new Avatar({
                className: "room__avatar avatar avatar--sm",
                avatarImg: this.props.avatarImg,
            }).renderToString(),
        });
    }
}
