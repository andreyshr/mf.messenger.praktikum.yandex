import Block from "../../modules/block/block.js";
import {template} from "./template.js";

import {IProps} from "../../modules/block/types";

import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";

import {render} from "../../utils/renderDOM.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import "../../utils/handlebars-helpers.js";

const bus = new AppBus();

const inputs: Array<IProps> = [
    {
        template: "profile",
        name: "first_name",
        id: "first_name",
        label: "Имя",
        required: "required",
        typeName: "text",
        autofocus: "autofocus",
        value: "Андрей"
    },
    {
        template: "profile",
        name: "second_name",
        id: "second_name",
        label: "Фамилия",
        required: "required",
        typeName: "text",
        value: "Шауров"
    },
    {
        template: "profile",
        name: "display_name",
        id: "display_name",
        label: "Отображаемое имя",
        required: "required",
        typeName: "text",
        value: "__andrew__"
    },
    {
        template: "profile",
        name: "email",
        id: "email",
        label: "Email",
        required: "email",
        typeName: "text",
        value: "andrey.shaurov@gmail.com"
    },
    {
        template: "profile",
        name: "phone",
        id: "phone",
        label: "Телефон",
        required: "phone",
        typeName: "phone",
        value: "+79000000000"
    },
    {
        template: "profile",
        name: "login",
        id: "login",
        label: "Логин",
        required: "required",
        typeName: "text",
        value: "andrew"
    },
    {
        template: "profile",
        name: "password",
        id: "password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        value: ""
    },
    {
        template: "profile",
        name: "repeat_password",
        id: "repeat_password",
        label: "Новый пароль",
        required: "password",
        typeName: "password",
        value: ""
    },
    {
        template: "profile",
        name: "_repeat_password",
        id: "_repeat_password",
        label: "Новый пароль (еще раз)",
        required: "password",
        typeName: "password",
        value: ""
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
        className: 'button button--blue button--lg ma-auto',
        tagName: "button",
        typeName: 'submit',
        title: 'Сохранить'
    },
    {
        className: 'button color-red button--lg js-logout-btn ma-auto',
        tagName: "button",
        typeName: 'button',
        title: 'Выйти',
        events: [
            {
                type: "click",
                el: `.js-logout-btn`,
                handler: function () {
                    console.log("logout btn");
                }
            }
        ]
    }
]

const form = new Form({
        template: "profile",
        className: "profile__form",
        action: "profile",
        title: "Андрей Шауров",
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

export default class Profile extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.forceUpdate(this)
        });
    }
}

const profile = new Profile({
    form
})

render(".app", profile);




