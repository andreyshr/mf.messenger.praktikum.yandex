import Block from "../../modules/block/block.js";
import {template} from "./template.js";
import {Props} from "../../modules/block/types";

import RoomsList from "../../components/rooms-list/RoomsList.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";
import Notification from "../../components/notification/Notification.js";

import {ChatsService} from "../../services/chats-service.js"
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import Store from "../../modules/store/store.js";

import {roomsList, sidebarHeader, workspaceEmpty} from "../messenger-chat/initial-props.js";
import {events} from "./events.js";

const chatsService = new ChatsService();
const store = new Store();
const bus = new AppBus();

export const props = {
    roomsList,
    sidebarHeader,
    workspaceEmpty,
    notification: {},
    events,
}

export default class Messenger extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    get chats() {
        return store.get("chats");
    }

    onShow = () => {
        if (!this.chats) {
            chatsService.getChats().then((data) => {
                bus.emit(EVENTS.ROOMS_UPDATE, data);
            })
        } else {
            bus.emit(EVENTS.ROOMS_UPDATE, this.chats);
        }
    }

    render() {
        return Handlebars.compile(template)({
            roomsList: new RoomsList(this.props.roomsList).renderToString(),
            sidebarHeader: new SidebarHeader(this.props.sidebarHeader).renderToString(),
            workspaceEmpty: new WorkSpaceEmpty(this.props.workspaceEmpty).renderToString(),
            notification: new Notification(this.props.notification).renderToString()
        });
    }
}
