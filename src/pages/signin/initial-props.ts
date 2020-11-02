import {PropsInput} from "../../components/input/types";
import {Props} from "../../modules/block/types";

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
        className: 'button button--transparent w-100 router-link',
        attributes: {
            href: "/signup",
        },
        tagName: "a",
        title: 'Зарегистрироваться',
    }
]
