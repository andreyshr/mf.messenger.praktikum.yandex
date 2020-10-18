import Block from "../../modules/block/block.js";
import {template} from "./template.js";

import {IProps} from "../../modules/block/types";

import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";

import {render} from "../../utils/renderDOM.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import "../../utils/handlebars-helpers.js";

const bus = new AppBus();

const inputs: Array<IProps> = [
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
]

const inputsWithEvents = inputs.map(i => ({
    ...i,
    events: [
        {
            type: "input",
            el: `input[name=${i.name}]`,
            handler: function (evt: any) {
                bus.emit(EVENTS.FORM_INPUT, evt.target.name, evt.target.value);
            }
        },
        {
            type: "focus",
            el: `input[name=${i.name}]`,
            handler: function (evt: any) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        },
        {
            type: "blur",
            el: `input[name=${i.name}]`,
            handler: function (evt: any) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        }
    ]
}));

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
        inputs: inputsWithEvents.map(props => new Input(props)),
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




