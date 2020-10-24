import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Room from "../../components/room/Room.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";

import {Props} from "../../modules/block/types";

import { render } from "../../utils/renderDOM.js";

import { rooms, workspaceEmpty } from "../messenger-chat/data.js";

export default class MessengerChat extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map((room: Block) => room.renderToString()),
            sidebarHeader: this.props.sidebarHeader.renderToString(),
            workspaceEmpty: this.props.workspaceEmpty.renderToString()
        });
    }
}

const messengerChat = new MessengerChat({
    rooms: rooms.map(props => new Room(props)),
    sidebarHeader: new SidebarHeader({}),
    workspaceEmpty: new WorkSpaceEmpty(workspaceEmpty)
})

render(".app", messengerChat);

Block.hydrate();



