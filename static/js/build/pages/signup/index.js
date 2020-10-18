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
        name: "name",
        id: "name",
        label: "Имя",
        required: "required",
        typeName: "text",
        placeholder: "Введите имя",
        autofocus: "autofocus"
    },
    {
        name: "second_name",
        id: "second_name",
        label: "Фамилия",
        required: "required",
        typeName: "text",
        placeholder: "Введите фамилию"
    },
    {
        name: "email",
        id: "email",
        label: "Email",
        required: "email",
        typeName: "text",
        placeholder: "Введите email"
    },
    {
        name: "phone",
        id: "phone",
        label: "Телефон",
        required: "phone",
        typeName: "phone",
        placeholder: "Введите телефон"
    },
    {
        name: "login",
        id: "login",
        label: "Логин",
        required: "required",
        typeName: "text",
        placeholder: "Введите логин"
    },
    {
        name: "password",
        id: "password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        placeholder: "Введите пароль"
    },
    {
        name: "repeat_password",
        id: "repeat_password",
        label: "Пароль (еще раз)",
        required: "password",
        typeName: "password",
        placeholder: "Подтвердите пароль"
    },
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
        title: 'Зарегистрироваться'
    },
    {
        className: 'button button--transparent w-100',
        tagName: "a",
        href: "/signin.html",
        title: 'Войти'
    }
];
var form = new Form({
    className: "form--signup",
    action: "signup",
    title: "Регистрация",
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
var SignUpPage = /** @class */ (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(props) {
        return _super.call(this, "div", props) || this;
    }
    SignUpPage.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.forceUpdate(this)
        });
    };
    return SignUpPage;
}(Block));
export default SignUpPage;
var signUpPage = new SignUpPage({
    form: form
});
render(".app", signUpPage);
//# sourceMappingURL=index.js.map