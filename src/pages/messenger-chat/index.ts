import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import { Props } from "../../modules/block/types";

import RoomsList from "../../components/rooms-list/RoomsList.js";
import Message from "../../components/message/Message.js";
import Menu from "../../components/menu/Menu.js";
import Dialog from "../../components/dialog/Dialog.js";
import WorkSpaceHeader from "../../components/workspace-header/WorkSpaceHeader.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import MessageInputForm from "../../components/message-input-form/MessageInputForm.js";
import Notification from "../../components/notification/Notification.js";

import { chatsService } from "../../services/chats-service.js";
import { bus } from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import Store from "../../modules/store/store.js";

import { last } from "../../utils/mydash/last.js";

const store = new Store();

import {
    roomsList,
    menuEmoji,
    menuMessage,
    sidebarHeader,
    workspaceHeader,
    messageInputForm,
    dialogRemoveChat,
} from "./initial-props.js";
import { events } from "./events.js";

export const props = {
    notification: {},
    messages: [],
    roomsList,
    menuEmoji,
    menuMessage,
    dialogRemoveChat,
    messageInputForm,
    sidebarHeader,
    workspaceHeader,
    events,
};

export default class MessengerChat extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    get chats() {
        return store.get("chats");
    }

    get chatId() {
        return last<string>(document.location.pathname.split("/"));
    }

    onShow() {
        if (!this.chats) {
            chatsService
                .getChats()
                .then((data) => {
                    bus.emit(
                        EVENTS.ROOMS_UPDATE,
                        this.setActiveChat(data, this.chatId)
                    );

                    this.setCurrentChat(this.chatId);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            bus.emit(
                EVENTS.ROOMS_UPDATE,
                this.setActiveChat(this.chats, this.chatId)
            );

            this.setCurrentChat(this.chatId);
        }
    }

    setActiveChat(chats: Props, chatId: string) {
        return chats.map(
            (chat: Props): Props => {
                if (chat.id.toString() === chatId.toString()) {
                    return {
                        ...chat,
                        active: true,
                    };
                } else {
                    return chat;
                }
            }
        );
    }

    setCurrentChat(chatId: string | number) {
        const currentChat = this.chats.find(
            (c: Props): boolean => c.id.toString() === chatId.toString()
        );

        if (currentChat) {
            store.set("currentChat", currentChat);

            bus.emit(EVENTS.ROOM_UPDATE, currentChat);
        } else {
            bus.emit(EVENTS.ROUTER_REPLACE, "/404");
        }
    }

    render() {
        return Handlebars.compile(template)({
            roomsList: new RoomsList(this.props.roomsList).renderToString(),
            messages: this.props.messages.map((message: Props): string =>
                new Message(message).renderToString()
            ),
            menuEmoji: new Menu(this.props.menuEmoji).renderToString(),
            menuMessage: new Menu(this.props.menuMessage).renderToString(),
            dialogRemoveChat: new Dialog(
                this.props.dialogRemoveChat
            ).renderToString(),
            messageInputForm: new MessageInputForm(
                this.props.messageInputForm
            ).renderToString(),
            sidebarHeader: new SidebarHeader(
                this.props.sidebarHeader
            ).renderToString(),
            workspaceHeader: new WorkSpaceHeader(
                this.props.workspaceHeader
            ).renderToString(),
            notification: new Notification(
                this.props.notification
            ).renderToString(),
        });
    }
}
