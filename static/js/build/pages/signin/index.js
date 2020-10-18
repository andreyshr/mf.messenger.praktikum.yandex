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
import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";
import { render } from "../../utils/renderDOM.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import "../../utils/handlebars-helpers.js";
var bus = new AppBus();
var inputs = [
    {
        name: "login",
        id: "login",
        label: "Логин",
        required: "required",
        typeName: "text",
        placeholder: "Введите логин",
        autofocus: "autofocus"
    },
    {
        name: "password",
        id: "password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        placeholder: "Введите пароль"
    }
];
var inputsWithEvents = inputs.map(function (i) { return (__assign(__assign({}, i), { events: [
        {
            type: "input",
            el: "input[name=" + i.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_INPUT, evt.target.name, evt.target.value);
            }
        },
        {
            type: "focus",
            el: "input[name=" + i.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        },
        {
            type: "blur",
            el: "input[name=" + i.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        }
    ] })); });
var buttons = [
    {
        className: 'button button--blue w-100',
        tagName: "button",
        typeName: 'submit',
        title: 'Авторизоваться'
    },
    {
        className: 'button button--transparent w-100',
        tagName: "a",
        href: "/signup.html",
        title: 'Зарегистрироваться'
    }
];
var form = new Form({
    className: "form--signin",
    action: "signin",
    title: "Вход",
    inputs: inputsWithEvents.map(function (props) { return new Input(props); }),
    buttons: buttons.map(function (props) { return new Button(props); }),
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
var SignInPage = /** @class */ (function (_super) {
    __extends(SignInPage, _super);
    function SignInPage(props) {
        return _super.call(this, "div", props) || this;
    }
    SignInPage.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.forceUpdate(this)
        });
    };
    return SignInPage;
}(Block));
export default SignInPage;
var signInPage = new SignInPage({
    form: form
});
render(".app", signInPage);
//# sourceMappingURL=index.js.map