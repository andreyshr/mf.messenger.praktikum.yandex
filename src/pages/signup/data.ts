export const inputsProps: PropsInput[] = [
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

export const buttons: Props[] = [
    {
        className: 'button button--blue w-100',
        tagName: "button",
        attributes: {
            type: "submit",
        },
        title: 'Зарегистрироваться'
    },
    {
        className: 'button button--transparent w-100',
        tagName: "a",
        attributes: {
            href: "/signin.html",
        },
        title: 'Войти'
    }
];