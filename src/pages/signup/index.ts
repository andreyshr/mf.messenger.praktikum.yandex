import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import { IProps } from "../../modules/block/types";

import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";
import { addInputEvents } from "../../utils/addInputEvents.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

const inputsProps: Array<IProps> = [
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
]

const inputs = inputsProps.map(addInputEvents);

const buttons: Array<IProps> = [
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
]

const form = new Form({
        className: "form--signup",
        action: "signup",
        title: "Регистрация",
        inputs: inputs.map(props => new Input(props)),
        buttons: buttons.map(props => new Button(props)),
        events: [
            {
                type: "submit",
                el: "form",
                handler: function (evt: any) {
                    form.onSubmit(evt);
                }
            }
        ]
    }
    );

export default class SignUpPage extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.forceUpdate(this)
        });
    }
}

const signUpPage = new SignUpPage({
    form
})

render(".app", signUpPage);




