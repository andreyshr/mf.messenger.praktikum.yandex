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
import RoomsList from "../../components/rooms-list/RoomsList.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";
import Notification from "../../components/notification/Notification.js";
import { ChatsService } from "../../services/chats-service.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import Store from "../../modules/store/store.js";
import { roomsList, sidebarHeader, workspaceEmpty, } from "../messenger-chat/initial-props.js";
import { events } from "./events.js";
var chatsService = new ChatsService();
var store = new Store();
var bus = new AppBus();
export var props = {
    roomsList: roomsList,
    sidebarHeader: sidebarHeader,
    workspaceEmpty: workspaceEmpty,
    notification: {},
    events: events,
};
var Messenger = /** @class */ (function (_super) {
    __extends(Messenger, _super);
    function Messenger(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.onShow = function () {
            if (!_this.chats) {
                chatsService.getChats().then(function (data) {
                    bus.emit(EVENTS.ROOMS_UPDATE, data);
                });
            }
            else {
                bus.emit(EVENTS.ROOMS_UPDATE, _this.chats);
            }
        };
        Block._instances.push(_this);
        return _this;
    }
    Object.defineProperty(Messenger.prototype, "chats", {
        get: function () {
            return store.get("chats");
        },
        enumerable: false,
        configurable: true
    });
    Messenger.prototype.render = function () {
        return Handlebars.compile(template)({
            roomsList: new RoomsList(this.props.roomsList).renderToString(),
            sidebarHeader: new SidebarHeader(this.props.sidebarHeader).renderToString(),
            workspaceEmpty: new WorkSpaceEmpty(this.props.workspaceEmpty).renderToString(),
            notification: new Notification(this.props.notification).renderToString(),
        });
    };
    return Messenger;
}(Block));
export default Messenger;
//# sourceMappingURL=index.js.map