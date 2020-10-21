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
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";
import { render } from "../../utils/renderDOM.js";
import "../../utils/handlebars-helpers.js";
import { rooms, workspaceEmpty } from "../messenger-chat/data.js";
var MessengerChat = /** @class */ (function (_super) {
    __extends(MessengerChat, _super);
    function MessengerChat(props) {
        return _super.call(this, "div", props) || this;
    }
    MessengerChat.prototype.render = function () {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map(function (room) { return room.renderToString(); }),
            sidebarHeader: this.props.sidebarHeader.renderToString(),
            workspaceEmpty: this.props.workspaceEmpty.renderToString()
        });
    };
    return MessengerChat;
}(Block));
export default MessengerChat;
var messengerChat = new MessengerChat({
    rooms: rooms.map(function (props) { return new Room(props); }),
    sidebarHeader: new SidebarHeader({}),
    workspaceEmpty: new WorkSpaceEmpty(workspaceEmpty)
});
render(".app", messengerChat);
Block.hydrate();
//# sourceMappingURL=index.js.map