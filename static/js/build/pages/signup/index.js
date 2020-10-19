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
import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";
import { addInputEvents } from "../../utils/addInputEvents.js";
import { render } from "../../utils/renderDOM.js";
import "../../utils/handlebars-helpers.js";
var inputsProps = [
    {
        name: "name",
        id: "name",
        label: "Имя",
        required: "required",
        typeName: "text",
        placeholder: "Введите имя",
        autofocus: "autofocus",
        errorMessage: "Обязательное поле"
    },
    {
        name: "second_name",
        id: "second_name",
        label: "Фамилия",
        required: "required",
        typeName: "text",
        placeholder: "Введите фамилию",
        errorMessage: "Обязательное поле"
    },
    {
        name: "email",
        id: "email",
        label: "Email",
        required: "email",
        typeName: "text",
        placeholder: "Введите email",
        errorMessage: "Электронная почта в формате name@host.com"
    },
    {
        name: "phone",
        id: "phone",
        label: "Телефон",
        required: "phone",
        typeName: "phone",
        placeholder: "Введите телефон",
        errorMessage: "Обязательное поле"
    },
    {
        name: "login",
        id: "login",
        label: "Логин",
        required: "required",
        typeName: "text",
        placeholder: "Введите логин",
        errorMessage: "Обязательное поле"
    },
    {
        name: "password",
        id: "password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        placeholder: "Введите пароль",
        errorMessage: "Символы латинского алфавита и цифры(мин. 6)"
    }
];
var inputs = inputsProps.map(addInputEvents);
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
    inputs: inputs.map(function (props) { return new Input(props); }),
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