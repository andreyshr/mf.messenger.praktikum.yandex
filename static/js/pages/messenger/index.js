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
import { addRoomEvents } from "../../utils/add-room-events.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var bus = new AppBus();
import { rooms, workspaceEmpty } from "../messenger-chat/data.js";
var roomsEv = rooms.map(addRoomEvents);
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
export var messengerChat = new MessengerChat({
    rooms: roomsEv.map(function (props) { return new Room(props); }),
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
                    handler: function (evt) {
                        evt.preventDefault();
                        bus.emit(EVENTS.ROUTER_GO, "/profile");
                    }
                }
            ]
        }
    }),
    workspaceEmpty: new WorkSpaceEmpty(workspaceEmpty)
});
//# sourceMappingURL=index.js.map