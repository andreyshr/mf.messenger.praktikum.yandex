var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import Room from "../../components/room/Room.js";
import Message from "../../components/message/Message.js";
import Menu from "../../components/menu/Menu.js";
import Dialog from "../../components/dialog/Dialog.js";
import WorkSpaceHeader from "../../components/workspace-header/WorkSpaceHeader.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import MessageInputForm from "../../components/message-input-form/MessageInputForm.js";
import { ChatsService } from "../../services/chats-service.js";
import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import { last } from "../../utils/mydash/last.js";
var chatsService = new ChatsService();
var store = new Store();
var bus = new AppBus();
import { menuEmoji, menuMessage, sidebarHeader, workspaceHeader, messageInputForm, dialogRemoveChat } from "./initial-props.js";
export var props = {
    rooms: [],
    messages: [],
    menuEmoji: menuEmoji,
    menuMessage: menuMessage,
    dialogRemoveChat: dialogRemoveChat,
    messageInputForm: messageInputForm,
    sidebarHeader: sidebarHeader,
    workspaceHeader: workspaceHeader,
};
var MessengerChat = /** @class */ (function (_super) {
    __extends(MessengerChat, _super);
    function MessengerChat(props) {
        var _this = _super.call(this, "div", props) || this;
        Block._instances.push(_this);
        return _this;
    }
    Object.defineProperty(MessengerChat.prototype, "chats", {
        get: function () {
            return store.get("chats");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessengerChat.prototype, "currentChat", {
        get: function () {
            return store.get("currentChat");
        },
        enumerable: false,
        configurable: true
    });
    MessengerChat.prototype.onShow = function () {
        var _this = this;
        var chatId = last(document.location.pathname.split("/"));
        if (!this.chats) {
            chatsService.getChats().then(function () {
                _this.setProps({
                    rooms: _this.chats.map(_this.createRoom),
                });
                _this.setCurrentChat(chatId);
            });
        }
        else {
            this.setProps({
                rooms: this.chats.map(this.createRoom),
            });
            this.setCurrentChat(chatId);
        }
    };
    MessengerChat.prototype.setCurrentChat = function (chatId) {
        var currentChat = this.chats.find(function (c) { return c.id.toString() === chatId.toString(); });
        if (currentChat) {
            store.set("currentChat", currentChat);
            this.setProps({
                workspaceHeader: __assign(__assign({}, workspaceHeader), this.currentChat)
            });
        }
        else {
            bus.emit(EVENTS.ROUTER_REPLACE, "/404");
        }
    };
    MessengerChat.prototype.createRoom = function (room) {
        return __assign(__assign({}, room), { link: "/messenger/" + room.id });
    };
    MessengerChat.prototype.render = function () {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map(function (room) { return new Room(room).renderToString(); }),
            messages: this.props.messages.map(function (message) { return new Message(message).renderToString(); }),
            menuEmoji: new Menu(this.props.menuEmoji).renderToString(),
            menuMessage: new Menu(this.props.menuMessage).renderToString(),
            dialogRemoveChat: new Dialog(this.props.dialogRemoveChat).renderToString(),
            messageInputForm: new MessageInputForm(this.props.messageInputForm).renderToString(),
            sidebarHeader: new SidebarHeader(this.props.sidebarHeader).renderToString(),
            workspaceHeader: new WorkSpaceHeader(this.props.workspaceHeader).renderToString(),
        });
    };
    return MessengerChat;
}(Block));
export default MessengerChat;
//# sourceMappingURL=index.js.map