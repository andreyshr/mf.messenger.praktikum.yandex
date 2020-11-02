export var inputsProps = [
    {
        name: "first_name",
        id: "signup-name",
        label: "Имя",
        required: "required",
        typeName: "text",
        placeholder: "Введите имя",
        autofocus: "autofocus",
        errorMessage: "Обязательное поле",
        action: "signup",
    },
    {
        name: "second_name",
        id: "signup-second_name",
        label: "Фамилия",
        required: "required",
        typeName: "text",
        placeholder: "Введите фамилию",
        errorMessage: "Обязательное поле",
        action: "signup",
    },
    {
        name: "email",
        id: "signup-email",
        label: "Email",
        required: "email",
        typeName: "text",
        placeholder: "Введите email",
        errorMessage: "Электронная почта в формате name@host.com",
        action: "signup",
    },
    {
        name: "phone",
        id: "signup-phone",
        label: "Телефон",
        required: "phone",
        typeName: "phone",
        placeholder: "Введите телефон",
        errorMessage: "Обязательное поле",
        action: "signup",
    },
    {
        name: "login",
        id: "signup-login",
        label: "Логин",
        required: "required",
        typeName: "text",
        placeholder: "Введите логин",
        errorMessage: "Обязательное поле",
        action: "signup",
    },
    {
        name: "password",
        id: "signup-password",
        label: "Пароль",
        required: "password",
        typeName: "password",
        placeholder: "Введите пароль",
        errorMessage: "Символы латинского алфавита и цифры(мин. 6)",
        action: "signup",
    }
];
export var buttons = [
    {
        className: 'button button--blue w-100',
        tagName: "button",
        attributes: {
            type: "submit",
        },
        title: 'Зарегистрироваться'
    },
    {
        className: 'button button--transparent w-100 router-link',
        tagName: "a",
        attributes: {
            href: "/signin",
        },
        title: 'Войти',
    }
];
//# sourceMappingURL=initial-props.js.map