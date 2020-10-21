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
import Avatar from "../avatar/Avatar.js";
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room(props) {
        var _this = _super.call(this, "li", props) || this;
        Block._instances.push(_this);
        return _this;
    }
    Room.prototype.render = function () {
        return Handlebars.compile(template)(__assign(__assign({}, this.props), { avatar: new Avatar({
                className: "room__avatar avatar",
                avatarImg: this.props.avatarImg,
                stubLetters: this.props.stubLetters,
                newMessagesCount: this.props.newMessagesCount,
            }).renderToString() }));
    };
    return Room;
}(Block));
export default Room;
//# sourceMappingURL=Room.js.map