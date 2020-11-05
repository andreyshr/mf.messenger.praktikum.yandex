import { addInputEvents } from "../../utils/add-input-events.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var bus = new AppBus();
var inputsProps = [
    {
        template: "profile",
        name: "first_name",
        id: "first_name",
        label: "Имя",
        required: "required",
        typeName: "text",
        autofocus: "autofocus",
        value: "",
        action: "profile",
    },
    {
        template: "profile",
        name: "second_name",
        id: "second_name",
        label: "Фамилия",
        required: "required",
        typeName: "text",
        value: "",
        action: "profile",
    },
    {
        template: "profile",
        name: "display_name",
        id: "display_name",
        label: "Отображаемое имя",
        required: "required",
        typeName: "text",
        value: "",
        action: "profile",
    },
    {
        template: "profile",
        name: "email",
        id: "email",
        label: "Email",
        required: "email",
        typeName: "text",
        value: "",
        action: "profile",
    },
    {
        template: "profile",
        name: "phone",
        id: "phone",
        label: "Телефон",
        required: "phone",
        typeName: "phone",
        value: "",
        action: "profile",
    },
    {
        template: "profile",
        name: "login",
        id: "login",
        label: "Логин",
        required: "required",
        typeName: "text",
        value: "",
        action: "profile",
    },
];
export var inputs = inputsProps.map(addInputEvents);
export var buttons = [
    {
        className: 'button button--blue button--lg ma-auto',
        attributes: {
            type: "submit"
        },
        title: 'Сохранить'
    },
    {
        className: 'button color-red button--lg js-logout-btn ma-auto',
        attributes: {
            type: "button"
        },
        title: 'Выйти',
        events: [
            {
                type: "click",
                el: ".js-logout-btn",
                handler: function () {
                    bus.emit(EVENTS.LOGOUT);
                }
            }
        ]
    }
];
export var buttonBack = {
    className: "profile__back-link router-link",
    attributes: {
        href: "/messenger"
    },
    icon: "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"14\" cy=\"14\" r=\"14\" fill=\"#3369F3\"/> <rect x=\"8\" y=\"13.2002\" width=\"11\" height=\"1.6\" fill=\"white\"/> <path d=\"M15 9L19 14L15 19\" stroke=\"white\" stroke-width=\"1.6\"/> </svg>",
};
//# sourceMappingURL=initial-props.js.map