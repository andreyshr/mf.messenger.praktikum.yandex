export var inputsProps = [
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
    },
];
export var buttons = [
    {
        className: "button button--blue w-100",
        tagName: "button",
        attributes: {
            type: "submit",
        },
        title: "Авторизоваться",
    },
    {
        className: "button button--transparent w-100 router-link",
        attributes: {
            href: "/signup",
        },
        tagName: "a",
        title: "Зарегистрироваться",
    },
];
//# sourceMappingURL=initial-props.js.map