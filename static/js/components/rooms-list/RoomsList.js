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
import Room from "../room/Room.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var bus = new AppBus();
var RoomsList = /** @class */ (function (_super) {
    __extends(RoomsList, _super);
    function RoomsList(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.roomsUpdate = function (chats) {
            _this.setProps({
                rooms: chats.map(_this.createRoom),
            });
        };
        bus.on(EVENTS.ROOMS_UPDATE, _this.roomsUpdate);
        Block._instances.push(_this);
        return _this;
    }
    RoomsList.prototype.createRoom = function (room) {
        return __assign(__assign({}, room), { link: "/messenger/" + room.id });
    };
    RoomsList.prototype.render = function () {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map(function (room) {
                return new Room(room).renderToString();
            }),
        });
    };
    return RoomsList;
}(Block));
export default RoomsList;
//# sourceMappingURL=RoomsList.js.map