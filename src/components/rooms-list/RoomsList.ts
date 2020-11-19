import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";

import Room from "../room/Room";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";

export default class RoomsList extends Block {
    constructor(props: Props) {
        super("div", props);

        bus.on(EVENTS.ROOMS_UPDATE, this.roomsUpdate);

        Block._instances.push(this);
    }

    roomsUpdate = (chats: Props) => {
        this.setProps({
            rooms: chats.map(this.createRoom),
        });
    };

    createRoom(room: Record<string, string>): Record<string, string> {
        return {
            ...room,
            link: `/messenger/${room.id}`,
        };
    }

    render() {
        return template({
            rooms: this.props.rooms.map((room: Props) =>
                new Room(room).renderToString()
            ),
        });
    }
}
