import {PropsInput} from "../../components/input/types";
import {Props} from "../../modules/block/types";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

const bus = new AppBus();

export const inputsProps: PropsInput[] = [
    {
        name: "login",
        id: "signin-login",
        label: "Логин",
        required: "required",
        typeName: "text",
        placeholder: "Введите логин",
        autofocus: "autofocus",
        errorMessage: "Обязательное поле",
        action: "signin",
    },
    {
        name: "password",
        id: "signin-password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        placeholder: "Введите пароль",
        errorMessage: "Обязательное поле",
        action: "signin",
    }
];

export const buttons: Props[] = [
    {
        className: 'button button--blue w-100',
        tagName: "button",
        attributes: {
            type: "submit",
        },
        title: 'Авторизоваться'
    },
    {
        className: 'button button--transparent w-100 js-link-signup',
        attributes: {
            href: "/signup.html",
        },
        tagName: "a",
        title: 'Зарегистрироваться',
        events: [
            {
                type: "click",
                el: ".js-link-signup",
                handler: function(evt) {
                    evt.preventDefault();
                    bus.emit(EVENTS.GO, "/signup");
                }
            }
        ]
    }
]
