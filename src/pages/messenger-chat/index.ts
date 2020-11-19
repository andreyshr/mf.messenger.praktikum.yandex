import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";
import { ChatResponse } from "../../services/types";

import RoomsList from "../../components/rooms-list/RoomsList";
import Message from "../../components/message/message";
import Menu from "../../components/menu/Menu";
import Dialog from "../../components/dialog/Dialog";
import WorkSpaceHeader from "../../components/workspace-header/WorkSpaceHeader";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader";
import MessageInputForm from "../../components/message-input-form/MessageInputForm";
import Notification from "../../components/notification/Notification";

import { chatsService } from "../../services/chats-service";
import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";
import Store from "../../modules/store/store";

import { last } from "../../utils/mydash/last";

const store = new Store();

import {
    roomsList,
    menuEmoji,
    menuMessage,
    sidebarHeader,
    workspaceHeader,
    messageInputForm,
    dialogRemoveChat,
} from "./initial-props";
import { events } from "./events";

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

    get chats(): ChatResponse[] {
        return store.get("chats");
    }

    get chatId(): string {
        return last<string>(document.location.pathname.split("/"));
    }

    onShow() {
        if (!this.chats) {
            chatsService
                .getChats()
                .then((data: ChatResponse[]) => {
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

    setActiveChat(chats: ChatResponse[], chatId: string) {
        return chats.map(
            (chat: ChatResponse): Props => {
                if (chat.id.toString() === chatId) {
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

    setCurrentChat(chatId: string) {
        const currentChat = this.chats.find(
            (c: ChatResponse): boolean => c.id.toString() === chatId
        );

        if (currentChat) {
            store.set("currentChat", currentChat);

            bus.emit(EVENTS.ROOM_UPDATE, currentChat);
        } else {
            bus.emit(EVENTS.ROUTER_REPLACE, "/404");
        }
    }

    render() {
        return template({
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
