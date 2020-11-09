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
import Menu from "../menu/Menu.js";
import Avatar from "../avatar/Avatar.js";
import { bus } from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var WorkSpaceHeader = /** @class */ (function (_super) {
    __extends(WorkSpaceHeader, _super);
    function WorkSpaceHeader(props) {
        var _this = _super.call(this, "header", props) || this;
        bus.on(EVENTS.ROOM_UPDATE, function (currentChat) {
            _this.setProps(__assign(__assign({}, _this.props), currentChat));
        });
        Block._instances.push(_this);
        return _this;
    }
    WorkSpaceHeader.prototype.render = function () {
        return Handlebars.compile(template)(__assign(__assign({}, this.props), { historyTime: this.props.historyTime || "Сегодня", menuChat: new Menu(this.props.menuChat).renderToString(), avatar: new Avatar({
                className: "room__avatar avatar avatar--sm",
                avatarImg: this.props.avatarImg,
            }).renderToString() }));
    };
    return WorkSpaceHeader;
}(Block));
export default WorkSpaceHeader;
//# sourceMappingURL=WorkSpaceHeader.js.map