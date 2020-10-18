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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Block from "../../../modules/block/block.js";
import { template } from "./template.js";
import AppBus from "../../../modules/event-bus/app-bus.js";
import EVENTS from "../../../modules/event-bus/events.js";
import { Validator } from "../../../modules/validator/validator.js";
import { UserService } from "../../../services/user-service.js";
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props, events) {
        var _this = _super.call(this, "div", props, events) || this;
        _this.state = {
            inputs: {
                login: null,
                password: null,
            },
            required: {
                login: "required",
                password: "password",
            }
        };
        _this.bus = new AppBus();
        _this.bus.on(EVENTS.FORM_INPUT, function (name, value) {
            var _a;
            _this.state.inputs[name] = value;
            var errors = [_this.validator.validate({ name: name, value: _this.state.inputs[name], rule: _this.state.required[name] })];
            (_a = _this.bus).emit.apply(_a, __spreadArrays([EVENTS.FORM_INVALID], errors));
        });
        _this.bus.on(EVENTS.FORM_VALIDATE, function (name) {
            var _a;
            var errors = [_this.validator.validate({ name: name, value: _this.state.inputs[name], rule: _this.state.required[name] })];
            (_a = _this.bus).emit.apply(_a, __spreadArrays([EVENTS.FORM_INVALID], errors));
        });
        _this.validator = new Validator();
        _this.userService = new UserService();
        return _this;
    }
    Form.prototype.onSubmit = function (evt) {
        var _a;
        var _this = this;
        evt.preventDefault();
        var errors = Object.keys(this.state.inputs)
            .map(function (input) { return _this.validator.validate({ name: input, value: _this.state.inputs[input], rule: _this.state.required[input] }); });
        (_a = this.bus).emit.apply(_a, __spreadArrays([EVENTS.FORM_INVALID], errors));
        if (errors.every(function (e) { return e.status; })) {
            this.userService.auth(this.state.inputs.login, this.state.inputs.password)
                .catch(function (e) { return console.log(e); });
        }
    };
    Form.prototype.render = function () {
        return Handlebars.compile(template)({
            className: this.props.className,
            title: this.props.title,
            login: this.props.login.forceUpdate(this),
            password: this.props.password.forceUpdate(this),
            submitButton: this.props.submitButton.forceUpdate(this),
            linkSignUp: this.props.linkSignUp.forceUpdate(this)
        });
    };
    return Form;
}(Block));
export default Form;
//# sourceMappingURL=Form.js.map