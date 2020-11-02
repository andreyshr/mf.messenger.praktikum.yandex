import Block from "../../modules/block/block.js";
import {template} from "./template.js";
import {Props} from "../../modules/block/types";

import Room from "../../components/room/Room.js";
import Message from "../../components/message/Message.js";
import Menu from "../../components/menu/Menu.js";
import Dialog from "../../components/dialog/Dialog.js";
import WorkSpaceHeader from "../../components/workspace-header/WorkSpaceHeader.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import MessageInputForm from "../../components/message-input-form/MessageInputForm.js";

import {ChatsService} from "../../services/chats-service.js";
import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import {last} from "../../utils/mydash/last.js";

const chatsService = new ChatsService();
const store = new Store();
const bus = new AppBus();

import {menuEmoji, menuMessage, sidebarHeader, workspaceHeader, messageInputForm, dialogRemoveChat} from "./initial-props.js";

export const props = {
    rooms: [],
    messages: [],
    menuEmoji,
    menuMessage,
    dialogRemoveChat,
    messageInputForm,
    sidebarHeader,
    workspaceHeader,
}

export default class MessengerChat extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    get chats() {
        return store.get("chats");
    }

    get currentChat() {
        return store.get("currentChat");
    }

    onShow() {
        const chatId = last<string>(document.location.pathname.split("/"));

        if (!this.chats) {
            chatsService.getChats().then(() => {
                this.setProps({
                    rooms: this.chats.map(this.createRoom),
                });

                this.setCurrentChat(chatId);
            });
        } else {
            this.setProps({
                rooms: this.chats.map(this.createRoom),
            });

            this.setCurrentChat(chatId);
        }
    }

    setCurrentChat(chatId: string | number) {
        const currentChat = this.chats.find((c: any) => c.id.toString() === chatId.toString());

        if (currentChat) {
            store.set("currentChat", currentChat);

            this.setProps({
                workspaceHeader: {
                    ...workspaceHeader,
                    ...this.currentChat,
                }
            })
        } else {
            bus.emit(EVENTS.ROUTER_REPLACE, "/404");
        }
    }

    createRoom(room: Record<string, string>): Record<string, string> {
        return {
            ...room,
            link: `/messenger/${room.id}`,
        };
    }

    render() {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map((room: Props): string => new Room(room).renderToString()),
            messages: this.props.messages.map((message: Props): string => new Message(message).renderToString()),
            menuEmoji: new Menu(this.props.menuEmoji).renderToString(),
            menuMessage: new Menu(this.props.menuMessage).renderToString(),
            dialogRemoveChat: new Dialog(this.props.dialogRemoveChat).renderToString(),
            messageInputForm: new MessageInputForm(this.props.messageInputForm).renderToString(),
            sidebarHeader: new SidebarHeader(this.props.sidebarHeader).renderToString(),
            workspaceHeader: new WorkSpaceHeader(this.props.workspaceHeader).renderToString(),
        });
    }
}


