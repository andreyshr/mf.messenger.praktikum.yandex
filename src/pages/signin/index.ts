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
        name: "login",
        id: "login",
        label: "Логин",
        required: "required",
        typeName: "text",
        placeholder: "Введите логин",
        autofocus: "autofocus",
        errorMessage: "Обязательное поле"
    },
    {
        name: "password",
        id: "password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        placeholder: "Введите пароль",
        errorMessage: "Обязательное поле"
    }
];

const inputs = inputsProps.map(addInputEvents);

const buttons: Array<IProps> = [
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
]

const form = new Form({
        className: "form--signin",
        action: "signin",
        title: "Вход",
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

export default class SignInPage extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.forceUpdate(this)
        });
    }
}

const signInPage = new SignInPage({
    form
})

render(".app", signInPage);




