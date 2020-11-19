import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";
import { ChatResponse } from "../../services/types";

import RoomsList from "../../components/rooms-list/RoomsList";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty";
import Notification from "../../components/notification/Notification";

import { chatsService } from "../../services/chats-service";
import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";
import Store from "../../modules/store/store";

import {
    roomsList,
    sidebarHeader,
    workspaceEmpty,
} from "../messenger-chat/initial-props";
import { events } from "./events";

const store = new Store();

export const props = {
    roomsList,
    sidebarHeader,
    workspaceEmpty,
    notification: {},
    events,
};

export default class Messenger extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    get chats(): ChatResponse[] {
        return store.get("chats");
    }

    onShow = () => {
        if (!this.chats) {
            chatsService.getChats().then((data) => {
                bus.emit(EVENTS.ROOMS_UPDATE, data);
            });
        } else {
            bus.emit(EVENTS.ROOMS_UPDATE, this.chats);
        }
    };

    render() {
        return template({
            roomsList: new RoomsList(this.props.roomsList).renderToString(),
            sidebarHeader: new SidebarHeader(
                this.props.sidebarHeader
            ).renderToString(),
            workspaceEmpty: new WorkSpaceEmpty(
                this.props.workspaceEmpty
            ).renderToString(),
            notification: new Notification(
                this.props.notification
            ).renderToString(),
        });
    }
}
