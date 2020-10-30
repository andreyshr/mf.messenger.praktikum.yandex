import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Room from "../../components/room/Room.js";
import Message from "../../components/message/Message.js";
import Menu from "../../components/menu/Menu.js";
import Dialog from "../../components/dialog/Dialog.js";
import WorkSpaceHeader from "../../components/workspace-header/WorkSpaceHeader.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import MessageInputForm from "../../components/message-input-form/MessageInputForm.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

const bus = new AppBus();

import {Props} from "../../modules/block/types";

import { rooms, messages, menuEmoji, menuMessage, workspaceHeader, messageInputForm, dialog } from "./data.js";

export default class MessengerChat extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map((room: Block) => room.renderToString()),
            messages: this.props.messages.map((message: Block) => message.renderToString()),
            menuEmoji: this.props.menuEmoji.renderToString(),
            menuMessage: this.props.menuMessage.renderToString(),
            dialogRemoveChat: this.props.dialogRemoveChat.renderToString(),
            workspaceHeader: this.props.workspaceHeader.renderToString(),
            messageInputForm: this.props.messageInputForm.renderToString(),
            sidebarHeader: this.props.sidebarHeader.renderToString(),
        });
    }
}

export const messengerChat = new MessengerChat({
    rooms: rooms.map(props => new Room(props)),
    messages: messages.map(props => new Message(props)),
    menuEmoji: new Menu(menuEmoji),
    menuMessage: new Menu(menuMessage),
    dialogRemoveChat: new Dialog(dialog),
    workspaceHeader: new WorkSpaceHeader(workspaceHeader),
    messageInputForm: new MessageInputForm(messageInputForm),
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
});
