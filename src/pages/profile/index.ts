import Block from "../../modules/block/block.js";
import {template} from "./template.js";
import {Props} from "../../modules/block/types";

import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";
import Avatar from "../../components/avatar/Avatar.js";
import Notification from "../../components/notification/Notification.js";

import Store from "../../modules/store/store.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import {inputsProps, buttons, buttonBack} from "./initial-props.js";
import {addInputEvents} from "../../utils/add-input-events.js";

const inputs = inputsProps.map(addInputEvents);

const form: Form = new Form({
        template: "profile",
        className: "profile__form",
        action: "profile",
        inputs: inputs.map(props => new Input(props)),
        buttons: buttons.map(props => new Button("button", props)),
        avatar: new Avatar({className: "avatar avatar--lg", avatarImg: ""}),
        avatarLoadButton: new Button("label", {
            title: "Загрузить аватар",
            className: "button button--transparent ml-auto mr-auto",
            attributes: {for: "avatar"},
        }),
        events: [
            {
                type: "submit",
                el: "form",
                handler: function (evt: Event) {
                    form.onSubmit(evt);
                }
            },
        ]
    }
);

const bus = new AppBus();
const store = new Store();

export const props = {
    form,
    notification: {},
    buttonBack: new Button("a", buttonBack),
    events: [
        {
            type: "change",
            el: "#avatar",
            handler: function (evt: Event) {
                evt.preventDefault();
                bus.emit(EVENTS.PROFILE_UPDATE_AVATAR, (evt.target as HTMLInputElement));
            }
        }
    ]
}

export default class Profile extends Block {
    store: Store;

    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    get user() {
        return store.get("user") || {};
    }

    onShow = () => {
        Object.keys(this.user).forEach((key: string) => {
            bus.emit(EVENTS.INPUT_UPDATE_VALUE, key, this.user[key], "profile");
        });

        (document.querySelector(".avatar img") as HTMLImageElement).src = this.user.avatar;
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            buttonBack: this.props.buttonBack.renderToString(),
            notification: new Notification(this.props.notification).renderToString()
        });
    }
}
