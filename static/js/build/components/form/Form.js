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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Block from "../../modules/block/block.js";
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import { Validator } from "../../modules/validator/validator.js";
import { UserService } from "../../services/user-service.js";
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.state = {
            inputs: _this.props.inputs.reduce(_this.createStateInputs, {}),
            required: _this.props.inputs.reduce(_this.createStateRequired, {}),
            action: _this.props.action
        };
        _this.bus = new AppBus();
        _this.bus.on(EVENTS.FORM_INPUT, function (name, value) {
            var _a;
            _this.state.inputs[name] = value;
            var errors = [_this.validator.validate(_this.createVerifiableInput(name))];
            (_a = _this.bus).emit.apply(_a, __spreadArrays([EVENTS.FORM_INVALID], errors));
        });
        _this.bus.on(EVENTS.FORM_VALIDATE, function (name) {
            var _a;
            var errors = [_this.validator.validate(_this.createVerifiableInput(name))];
            (_a = _this.bus).emit.apply(_a, __spreadArrays([EVENTS.FORM_INVALID], errors));
        });
        _this.validator = new Validator();
        _this.userService = new UserService();
        return _this;
    }
    Form.prototype.createStateInputs = function (acc, input) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[input.props.name] = input.props.value || null, _a));
    };
    Form.prototype.createStateRequired = function (acc, input) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[input.props.name] = input.props.required, _a));
    };
    Form.prototype.createVerifiableInput = function (name) {
        return {
            name: name,
            value: this.state.inputs[name],
            rule: this.state.required[name]
        };
    };
    Form.prototype.onSubmit = function (evt) {
        var _a;
        var _this = this;
        evt.preventDefault();
        var errors = Object.keys(this.state.inputs)
            .map(function (name) { return _this.validator.validate(_this.createVerifiableInput(name)); });
        (_a = this.bus).emit.apply(_a, __spreadArrays([EVENTS.FORM_INVALID], errors));
        if (errors.every(function (e) { return e.status; })) {
            if (this.props.action === "signin") {
                var _b = this.state.inputs, login = _b.login, password = _b.password;
                this.userService.auth(login, password)
                    .catch(function (e) { return console.log(e); });
            }
            if (this.props.action === "signup") {
                var _c = this.state.inputs, name_1 = _c.name, second_name = _c.second_name, email = _c.email, password = _c.password, login = _c.login, phone = _c.phone;
                this.userService.signup(name_1, second_name, email, password, login, phone)
                    .catch(function (e) { return console.log(e); });
            }
            if (this.props.action === "profile") {
                var _d = this.state.inputs, first_name = _d.first_name, second_name = _d.second_name, display_name = _d.display_name, login = _d.login, newPassword = _d.newPassword, oldPassword = _d.oldPassword, email = _d.email, phone = _d.phone;
                this.userService.profile(first_name, second_name, display_name, login, newPassword, oldPassword, email, phone)
                    .catch(function (e) { return console.log(e); });
            }
        }
    };
    Form.prototype.render = function () {
        var _this = this;
        return Handlebars.compile(this.props.template === "profile" ? templateProfile : templateMain)({
            className: this.props.className,
            title: this.props.title,
            inputs: this.props.inputs.map(function (input) { return input.forceUpdate(_this); }),
            buttons: this.props.buttons.map(function (button) { return button.forceUpdate(_this); })
        });
    };
    return Form;
}(Block));
export default Form;
//# sourceMappingURL=Form.js.map