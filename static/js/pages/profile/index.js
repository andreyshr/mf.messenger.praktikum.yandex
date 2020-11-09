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
import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";
import Avatar from "../../components/avatar/Avatar.js";
import Notification from "../../components/notification/Notification.js";
import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import { inputs, buttons, buttonBack } from "./initial-props.js";
var bus = new AppBus();
var store = new Store();
var form = new Form({
    template: "profile",
    className: "profile__form",
    action: "profile",
    inputs: inputs.map(function (props) { return new Input(props); }),
    buttons: buttons.map(function (props) { return new Button("button", props); }),
    avatar: new Avatar({ className: "avatar avatar--lg", avatarImg: "" }),
    avatarLoadButton: new Button("label", {
        title: "Загрузить аватар",
        className: "button button--transparent ml-auto mr-auto",
        attributes: { for: "avatar" },
    }),
    events: [
        {
            type: "submit",
            el: "form.profile__form",
            handler: function (evt) {
                form.onSubmit(evt);
            },
        },
        {
            type: "change",
            el: "#avatar",
            handler: function (evt) {
                evt.preventDefault();
                bus.emit(EVENTS.PROFILE_UPDATE_AVATAR, evt.target.files);
            },
        },
    ],
});
export var props = {
    form: form,
    notification: {},
    buttonBack: new Button("a", buttonBack),
};
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.onShow = function () {
            Object.keys(_this.user).forEach(function (key) {
                bus.emit(EVENTS.INPUT_UPDATE_VALUE, key, _this.user[key], "profile");
            });
            bus.emit(EVENTS.AVATAR_UPDATE);
        };
        bus.on(EVENTS.AVATAR_UPDATE, function () {
            if (_this.user.avatar) {
                document.querySelector(".profile__form .avatar img").src =
                    "https://ya-praktikum.tech/" + _this.user.avatar;
            }
        });
        Block._instances.push(_this);
        return _this;
    }
    Object.defineProperty(Profile.prototype, "user", {
        get: function () {
            return store.get("user") || {};
        },
        enumerable: false,
        configurable: true
    });
    Profile.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            buttonBack: this.props.buttonBack.renderToString(),
            notification: new Notification(this.props.notification).renderToString(),
        });
    };
    return Profile;
}(Block));
export default Profile;
//# sourceMappingURL=index.js.map