import { Props } from "../../modules/block/types";

export const roomsList: Props = {
    className: "sidebar__history-scrollable scrollable vh-100",
    rooms: [],
};

export const menuChat: Props = {
    className: "p-relative ml-auto",
    menuListClass: "menu--bottom menu--right",
    buttonMenuOpener: {
        className:
            "button button--icon button--round button--transparent button--opener",
        icon:
            '<svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="1.5" cy="2" r="1.5" fill="#3369F3"/> <circle cx="1.5" cy="8" r="1.5" fill="#3369F3"/> <circle cx="1.5" cy="14" r="1.5" fill="#3369F3"/> </svg>',
    },
    items: [
        {
            menuButtonClassName: "js-add-user-open-dialog",
            title: "Добавить пользователя",
            icon:
                '<svg width="22" height="22" viewBox="0 0 22 22" style=\'transform: rotate(45deg)\' fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/> <line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/> <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/> </svg>',
        },
        {
            menuButtonClassName: "js-remove-user-open-dialog",
            title: "Удалить пользователя",
            icon:
                '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/> <line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/> <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/> </svg>',
        },
    ],
};

export const sidebarHeader: Props = {
    profileLink: {
        className: "sidebar__profile-link router-link",
        appendIcon: true,
        title: "Профиль",
        attributes: {
            href: "/profile",
        },
        icon:
            '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M1 9L5 5L1 1" stroke="#999999"/>\n                    </svg>',
    },
};

export const workspaceHeader: Props = {
    className: "workspace__header",
    title: "",
    userLastActiveTime: "",
    historyTime: "",
    avatar: "",
    menuChat,
};

export const workspaceEmpty: Props = {
    className: "workspace__empty w-100 h-100",
    title: "Выберите чат чтобы отправить сообщение или создайте новый",
    buttonCreateChat: {
        className: "button button--blue button--lg js-button-create-chat",
        attributes: {
            type: "submit",
        },
        title: "Создать чат",
    },
};

export const messageInputForm: Props = {
    className: "workspace__user-form js-message-form",
    buttonSendMessage: {
        className: "button button--icon button--round button--blue",
        type: "submit",
        icon:
            '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="14" cy="14" r="14" fill="#3369F3"/> <rect x="8" y="13.2002" width="11" height="1.6" fill="white"/> <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/> </svg>',
    },
};

export const dialogRemoveChat: Props = {
    users: [],
    cancelButton: {
        className: "button button--md button--gray js-close-dialog-button",
        title: "Закрыть",
    },
};
