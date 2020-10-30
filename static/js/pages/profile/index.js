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
import { addInputEvents } from "../../utils/add-input-events.js";
import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import { inputsProps, buttons, buttonBack } from "./data.js";
import EVENTS from "../../modules/event-bus/events.js";
var inputs = inputsProps.map(addInputEvents);
var form = new Form({
    template: "profile",
    className: "profile__form",
    action: "profile",
    title: "Андрей Шауров",
    inputs: inputs.map(function (props) { return new Input(props); }),
    buttons: buttons.map(function (props) { return new Button("button", props); }),
    avatar: new Avatar({ className: "avatar avatar--lg", stubLetters: "АШ" }),
    avatarLoadButton: new Button("label", { title: "Загрузить аватар", className: "button button--transparent ml-auto mr-auto", attributes: { for: "avatar" } }),
    events: [
        {
            type: "submit",
            el: "form",
            handler: function (evt) {
                form.onSubmit(evt);
            }
        }
    ]
});
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.onShow = function () {
            console.log("profile show");
            _this.bus.emit(EVENTS.SET_PROFILE, _this.store.get("user"));
        };
        _this.store = new Store();
        _this.bus = new AppBus();
        return _this;
    }
    Profile.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            buttonBack: this.props.buttonBack.renderToString(),
        });
    };
    return Profile;
}(Block));
export default Profile;
export var profile = new Profile({
    form: form,
    buttonBack: new Button("div", buttonBack)
});
//# sourceMappingURL=index.js.map