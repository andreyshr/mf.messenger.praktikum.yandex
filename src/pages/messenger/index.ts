import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Room from "../../components/room/Room.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";
import {addRoomEvents} from "../../utils/add-room-events.js";

import {Props} from "../../modules/block/types";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

const bus = new AppBus();

import { rooms, workspaceEmpty } from "../messenger-chat/data.js";

const roomsEv: Props = rooms.map(addRoomEvents);

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

export const messengerChat = new MessengerChat({
    rooms: roomsEv.map((props: Props) => new Room(props)),
    sidebarHeader: new SidebarHeader({
        profileLink: {
            className: "sidebar__profile-link js-profile-link",
            appendIcon: true,
            title: "Профиль",
            attributes: {
                href: "/profile",
            },
            icon: "<svg width=\"6\" height=\"10\" viewBox=\"0 0 6 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M1 9L5 5L1 1\" stroke=\"#999999\"/>\n                    </svg>",
            events: [
                {
                    type: "click",
                    el: ".js-profile-link",
                    handler: function(evt: any) {
                        evt.preventDefault();
                        bus.emit(EVENTS.ROUTER_GO, "/profile");
                    }
                }
            ]
        }
    }),
    workspaceEmpty: new WorkSpaceEmpty(workspaceEmpty)
});
