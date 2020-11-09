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
import User from "../user/User.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var bus = new AppBus();
var UsersList = /** @class */ (function (_super) {
    __extends(UsersList, _super);
    function UsersList(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.usersUpdate = function (users) {
            _this.setProps({
                users: users,
            });
        };
        bus.on(EVENTS.USERS_UPDATE, _this.usersUpdate);
        Block._instances.push(_this);
        return _this;
    }
    UsersList.prototype.render = function () {
        return Handlebars.compile(template)({
            users: this.props.users.map(function (user) {
                return new User(user).renderToString();
            }),
        });
    };
    return UsersList;
}(Block));
export default UsersList;
//# sourceMappingURL=UsersList.js.map