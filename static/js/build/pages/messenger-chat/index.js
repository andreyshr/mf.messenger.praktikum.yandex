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
import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import Room from "../../components/room/Room.js";
import Message from "../../components/message/Message.js";
import Menu from "../../components/menu/Menu.js";
import Dialog from "../../components/dialog/Dialog.js";
import WorkSpaceHeader from "../../components/workspace-header/WorkSpaceHeader.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import MessageInputForm from "../../components/message-input-form/MessageInputForm.js";
import { rooms, messages, menuEmoji, menuMessage, workspaceHeader, messageInputForm, dialog } from "./data.js";
var MessengerChat = /** @class */ (function (_super) {
    __extends(MessengerChat, _super);
    function MessengerChat(props) {
        return _super.call(this, "div", props) || this;
    }
    MessengerChat.prototype.render = function () {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map(function (room) { return room.renderToString(); }),
            messages: this.props.messages.map(function (message) { return message.renderToString(); }),
            menuEmoji: this.props.menuEmoji.renderToString(),
            menuMessage: this.props.menuMessage.renderToString(),
            dialogRemoveChat: this.props.dialogRemoveChat.renderToString(),
            workspaceHeader: this.props.workspaceHeader.renderToString(),
            messageInputForm: this.props.messageInputForm.renderToString(),
            sidebarHeader: this.props.sidebarHeader.renderToString(),
        });
    };
    return MessengerChat;
}(Block));
export default MessengerChat;
export var messengerChat = new MessengerChat({
    rooms: rooms.map(function (props) { return new Room(props); }),
    messages: messages.map(function (props) { return new Message(props); }),
    menuEmoji: new Menu(menuEmoji),
    menuMessage: new Menu(menuMessage),
    dialogRemoveChat: new Dialog(dialog),
    workspaceHeader: new WorkSpaceHeader(workspaceHeader),
    messageInputForm: new MessageInputForm(messageInputForm),
    sidebarHeader: new SidebarHeader({}),
});
// render(".app", messengerChat);
//
// Block.hydrate();
//# sourceMappingURL=index.js.map