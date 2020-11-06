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
import Button from "../button/Button.js";
import UsersList from "../users-list/UsersList.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import { ChatsService } from "../../services/chats-service.js";
import { UserService } from "../../services/user-service.js";
import Store from "../../modules/store/store.js";
var bus = new AppBus();
var chatsService = new ChatsService();
var userService = new UserService();
var store = new Store();
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.onShow = function () {
            var searchInput = document.querySelector(".js-user-search");
            if (store.get("dialog") === 'remove_user') {
                if (searchInput)
                    searchInput.style.display = "none";
                chatsService.getUsers();
            }
            if (store.get("dialog") === 'add_user') {
                if (searchInput)
                    searchInput.style.display = "block";
                userService.search("");
            }
        };
        _this.onHide = function () {
            bus.emit(EVENTS.USERS_UPDATE, []);
            var input = document.querySelector(".js-user-search");
            if (input) {
                input.value = "";
            }
        };
        bus.on(EVENTS.OPEN_ADD_USER_DIALOG, function () {
            store.set("dialog", "add_user");
            _this.show();
        });
        bus.on(EVENTS.OPEN_REMOVE_USER_DIALOG, function () {
            store.set("dialog", "remove_user");
            _this.show();
        });
        bus.on(EVENTS.CLOSE_DIALOG, _this.hide.bind(_this));
        Block._instances.push(_this);
        return _this;
    }
    Dialog.prototype.componentMounted = function () {
        this.hide();
    };
    Dialog.prototype.render = function () {
        return Handlebars.compile(template)(__assign(__assign({}, this.props), { usersList: new UsersList({ users: this.props.users }).renderToString(), cancelButton: new Button("button", this.props.cancelButton).renderToString() }));
    };
    return Dialog;
}(Block));
export default Dialog;
//# sourceMappingURL=Dialog.js.map