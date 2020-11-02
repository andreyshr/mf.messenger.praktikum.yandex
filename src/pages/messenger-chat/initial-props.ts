import {Props} from "../../modules/block/types";


export const menuChat: Props = {
    className: "p-relative ml-auto",
    menuListClass: "menu--bottom menu--right",
    buttonMenuOpener: {
        className: "button button--icon button--round button--transparent button--opener",
        icon: "<svg width=\"3\" height=\"16\" viewBox=\"0 0 3 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"1.5\" cy=\"2\" r=\"1.5\" fill=\"#3369F3\"/> <circle cx=\"1.5\" cy=\"8\" r=\"1.5\" fill=\"#3369F3\"/> <circle cx=\"1.5\" cy=\"14\" r=\"1.5\" fill=\"#3369F3\"/> </svg>"
    },
    items: [
        {
            title: "Редактировать",
            icon: "<svg width=\"22\" height=\"19\" viewBox=\"0 0 22 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect width=\"22\" height=\"1.5\" transform=\"matrix(1 0 0 -1 0 19)\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.2602 0L19.0001 2.73982L16.9452 4.79468L14.2054 2.05487L16.2602 0ZM13.5202 2.73976L16.26 5.47958L6.7394 15.0002H4V12.26L13.5202 2.73976Z\" fill=\"#3369F3\"/> </svg>"
        },
        {
            title: "Удалить",
            icon: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"11\" cy=\"11\" r=\"10.25\" stroke=\"#3369F3\" stroke-width=\"1.5\"/> <line x1=\"7.1109\" y1=\"7.11103\" x2=\"14.8891\" y2=\"14.8892\" stroke=\"#3369F3\" stroke-width=\"1.5\"/> <line x1=\"7.11078\" y1=\"14.8891\" x2=\"14.889\" y2=\"7.11093\" stroke=\"#3369F3\" stroke-width=\"1.5\"/> </svg>"
        }
    ]
}

export const menuEmoji: Props = {
    className: "p-relative",
    menuListClass: "menu--emoji menu--top menu--left",
    buttonMenuOpener: {
        className: "button button--icon button--round button--transparent button--opener",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#3369F3\" viewBox=\"0 0 1000 1000\"> <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\"> <path d=\"M4530.1,5007.9C3375.4,4889,2341.7,4400,1530.4,3588.6C751.6,2809.9,287.5,1860.5,124.4,723.1c-32.6-226.3-32.6-982,0-1208.3c163-1137.4,629.1-2086.8,1405.9-2865.5c778.7-776.8,1728.1-1242.9,2865.5-1405.9c226.3-32.6,982-32.6,1208.3,0c1147,163,2100.2,634.9,2880.8,1425.1C9259.9-2549,9714.4-1616.8,9875.5-485.2c32.6,226.3,32.6,982,0,1208.3c-163,1137.4-629.1,2086.8-1405.9,2865.5c-759.5,759.5-1687.8,1223.7-2779.2,1392.5C5448.8,5017.5,4775.6,5034.8,4530.1,5007.9z M5613.7,4538c974.3-141.9,1854.7-581.1,2539.4-1265.9c686.6-686.6,1114.4-1545.9,1269.7-2549c21.1-145.8,30.7-331.8,30.7-604.2c0-725-141.9-1340.7-456.5-1973.6c-228.3-458.4-466.1-794-828.6-1160.4c-694.3-703.9-1545.9-1131.6-2564.4-1288.9c-289.6-44.1-918.7-44.1-1208.3,0c-1003.1,155.4-1862.4,583.1-2549,1269.7c-688.6,686.6-1114.4,1545.9-1269.7,2549C538.7-226.3,533,393.3,567.5,656c203.3,1517.1,1106.7,2790.7,2453.1,3458.1c533.2,264.7,1097.1,416.2,1720.4,462.2C4915.6,4589.8,5408.5,4566.8,5613.7,4538z\"/> <path d=\"M3241.2,1875.9c-456.5-149.6-619.5-728.8-303-1079.8c270.4-303,726.9-303,997.4,0c122.8,136.2,168.8,270.4,159.2,473.7c-7.7,126.6-19.2,184.1-57.5,258.9c-67.1,128.5-186,245.5-316.5,308.8C3594.1,1900.8,3369.7,1918.1,3241.2,1875.9z\"/> <path d=\"M6371.4,1877.8c-182.2-61.4-320.3-178.4-404.7-343.3c-74.8-143.9-86.3-381.7-26.9-537c55.6-149.6,184.1-287.7,339.5-364.4c111.2-53.7,143.9-61.4,282-61.4c126.6,0,174.5,9.6,264.7,49.9c143.8,67.1,270.4,186,335.7,318.4c72.9,151.5,84.4,372.1,23,531.3c-53.7,143.9-195.6,297.3-339.5,368.3C6720.4,1900.8,6496,1918.1,6371.4,1877.8z\"/> <path d=\"M1965.7-820.8c-65.2-49.9-99.7-138.1-84.4-216.7c32.6-170.7,454.6-680.9,788.3-953.2c535.1-435.4,1154.6-694.3,1852.8-774.9c1053-122.7,2050.3,153.4,2807.9,774.9c374,308.8,796,832.4,796,991.6c0,61.4-47.9,149.6-99.7,186c-55.6,38.4-186.1,40.3-239.8,1.9c-24.9-17.3-97.8-109.3-163-207.1c-67.1-95.9-207.1-264.7-312.6-374C6695.5-2033,5941.7-2343.7,5000-2343.7c-780.6,0-1423.2,211-1985.1,650.2c-212.9,166.9-494.8,466.1-638.7,675.1c-65.2,97.8-138.1,189.9-163,207.1C2153.7-769,2023.3-774.8,1965.7-820.8z\"/> </g> </svg>"
    },
    items: [{ icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }, { icon: "&#128513;" }]
}

export const menuMessage: Props = {
    className: "p-relative",
    menuListClass: "menu--top menu--left",
    buttonMenuOpener: {
        className: "button button--icon button--round button--transparent button--opener",
        icon: "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.18661 13.5L14.7628 5.92389L15.7056 6.8667L8.12942 14.4428L7.18661 13.5Z\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.70077 16.0142L17.2769 8.43805L18.2197 9.38086L10.6436 16.957L9.70077 16.0142Z\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.0435 21.3565L22.6197 13.7803L23.5625 14.7231L15.9864 22.2993L15.0435 21.3565Z\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.5572 23.8706L25.1334 16.2945L26.0762 17.2373L18.5 24.8134L17.5572 23.8706Z\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7148 7.16127 24.839C10.2855 27.9632 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48304 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z\" fill=\"#3369F3\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.70068 16.0146C7.95727 17.7581 7.95099 20.5784 9.68665 22.3141C11.4223 24.0497 14.2427 24.0435 15.9861 22.3L15.0433 21.3572C13.8229 22.5776 11.8486 22.582 10.6337 21.3671C9.41871 20.1521 9.4231 18.1778 10.6435 16.9575L9.70068 16.0146Z\" fill=\"#3369F3\"/> </svg>"
    },
    items: [
        {
            title: "Фото или Видео",
            icon: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 1.5H18C19.3807 1.5 20.5 2.61926 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52863 12 8.4892 12.1362 7.48056 12.4052L1.5 14V4C1.5 2.61926 2.61929 1.5 4 1.5ZM0 4C0 1.79083 1.79086 0 4 0H18C20.2091 0 22 1.79083 22 4V18C22 20.2092 20.2091 22 18 22H4C1.79086 22 0 20.2092 0 18V4ZM8 6C8 7.10455 7.10458 8 6 8C4.89542 8 4 7.10455 4 6C4 4.89545 4.89542 4 6 4C7.10458 4 8 4.89545 8 6Z\" fill=\"#3369F3\"></path> </svg>"
        },
        {
            title: "Файл",
            icon: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 1.5H18C19.3807 1.5 20.5 2.61926 20.5 4V12H16C13.7909 12 12 13.7908 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61926 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2092 0 18V4C0 1.79083 1.79086 0 4 0H18C20.2091 0 22 1.79083 22 4V12V18C22 20.2092 20.2091 22 18 22H12Z\" fill=\"#3369F3\"/> </svg>"
        }
    ]
}

export const sidebarHeader: Props = {
    profileLink: {
        className: "sidebar__profile-link router-link",
        appendIcon: true,
        title: "Профиль",
        attributes: {
            href: "/profile",
        },
        icon: "<svg width=\"6\" height=\"10\" viewBox=\"0 0 6 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M1 9L5 5L1 1\" stroke=\"#999999\"/>\n                    </svg>",
    }
}

export const workspaceHeader: Props = {
    className: "workspace__header",
    title: "",
    userLastActiveTime: "",
    historyTime: "",
    avatar: "",
    menuChat
}

export const workspaceEmpty: Props = {
    className: "workspace__empty w-100 h-100",
    title: "Выберите чат чтобы отправить сообщение",
}

export const messageInputForm: Props = {
    className: "workspace__user-form",
    buttonSendMessage: {
        className: "button button--icon button--round button--blue",
        type: "submit",
        icon: "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"14\" cy=\"14\" r=\"14\" fill=\"#3369F3\"/> <rect x=\"8\" y=\"13.2002\" width=\"11\" height=\"1.6\" fill=\"white\"/> <path d=\"M15 9L19 14L15 19\" stroke=\"white\" stroke-width=\"1.6\"/> </svg>"
    }
}

export const dialogRemoveChat: Props = {
    title: "Вы хотите удалить чат?",
    removeButton: {
        className: "button button--md button--red",
        title: "Удалить"
    },
    cancelButton: {
        className: "button button--md button--gray js-close-dialog-button",
        title: "Отменить"
    }
}
