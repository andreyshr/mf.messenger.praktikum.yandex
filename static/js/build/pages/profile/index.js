var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";
import { render } from "../../utils/renderDOM.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
import "../../utils/handlebars-helpers.js";
var bus = new AppBus();
var inputs = [
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
];
var inputsWithEvents = inputs.map(function (i) { return (__assign(__assign({}, i), { events: [
        {
            type: "input",
            el: "input[name=" + i.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_INPUT, evt.target.name, evt.target.value);
            }
        },
        {
            type: "focus",
            el: "input[name=" + i.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        },
        {
            type: "blur",
            el: "input[name=" + i.name + "]",
            handler: function (evt) {
                bus.emit(EVENTS.FORM_VALIDATE, evt.target.name);
            }
        }
    ] })); });
var buttons = [
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
                el: ".js-logout-btn",
                handler: function () {
                    console.log("logout btn");
                }
            }
        ]
    }
];
var form = new Form({
    template: "profile",
    className: "profile__form",
    action: "profile",
    title: "Андрей Шауров",
    inputs: inputsWithEvents.map(function (props) { return new Input(props); }),
    buttons: buttons.map(function (props) { return new Button(props); }),
    events: [
        {
            type: "submit",
            el: "form",
            handler: function (evt) {
                form.onSubmit(evt);
            }
        }
    ]
});
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(props) {
        return _super.call(this, "div", props) || this;
    }
    Profile.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.forceUpdate(this)
        });
    };
    return Profile;
}(Block));
export default Profile;
var profile = new Profile({
    form: form
});
render(".app", profile);
//# sourceMappingURL=index.js.map