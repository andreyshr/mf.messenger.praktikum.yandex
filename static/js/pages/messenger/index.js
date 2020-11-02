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
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";
import { ChatsService } from "../../services/chats-service.js";
import { UserService } from "../../services/user-service.js";
import Store from "../../modules/store/store.js";
import { sidebarHeader, workspaceEmpty } from "../messenger-chat/initial-props.js";
var chatsService = new ChatsService();
var userService = new UserService();
var store = new Store();
export var props = {
    rooms: store.get("chats") || [],
    sidebarHeader: sidebarHeader,
    workspaceEmpty: workspaceEmpty
};
var Messenger = /** @class */ (function (_super) {
    __extends(Messenger, _super);
    function Messenger(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.onShow = function () {
            if (!_this.chats) {
                chatsService.getChats().then(function (data) {
                    _this.setProps({
                        rooms: data.map(_this.createRoom)
                    });
                });
            }
            else {
                _this.setProps({
                    rooms: _this.chats.map(_this.createRoom)
                });
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
    Messenger.prototype.componentMounted = function () {
        var _this = this;
        document.addEventListener("submit", function (evt) {
            var _a;
            if (!((_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.closest(".sidebar__search form"))) {
                return;
            }
            evt.preventDefault();
            userService.search(evt.target[0].value)
                .then(function (data) {
                _this.setProps({
                    rooms: data.map(function (user) { return ({ title: user.login, avatarImg: user.avatarImg }); }).map(_this.createRoom)
                });
            });
        });
    };
    Messenger.prototype.createRoom = function (room) {
        return __assign(__assign({}, room), { link: "/messenger/" + room.id });
    };
    Messenger.prototype.render = function () {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map(function (room) { return new Room(room).renderToString(); }),
            sidebarHeader: new SidebarHeader(this.props.sidebarHeader).renderToString(),
            workspaceEmpty: new WorkSpaceEmpty(this.props.workspaceEmpty).renderToString()
        });
    };
    return Messenger;
}(Block));
export default Messenger;
//# sourceMappingURL=index.js.map