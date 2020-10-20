import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Room from "../../components/room/Room.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

import { rooms } from "../messenger-chat/data.js";

export default class MessengerChat extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map((room: Block) => room.renderToString()),
            sidebarHeader: this.props.sidebarHeader.renderToString(),
        });
    }
}

const messengerChat = new MessengerChat({
    rooms: rooms.map(props => new Room(props)),
    sidebarHeader: new SidebarHeader({}),
})

render(".app", messengerChat);

Block.hydrate();



