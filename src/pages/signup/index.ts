import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";
import Notification from "../../components/notification/Notification.js";
import { addInputEvents } from "../../utils/add-input-events.js";

import { inputsProps, buttons } from "./initial-props.js";

import {Props} from "../../modules/block/types";

const inputs = inputsProps.map(addInputEvents);

const form: Form = new Form({
    className: "form form--signup",
    action: "signup",
    title: "Регистрация",
    inputs: inputs.map(props => new Input(props)),
    buttons: buttons.map(props => new Button(props.tagName === "button" ? "button" : "a", props)),
    events: [
        {
            type: "submit",
            el: ".form--signup",
            handler: function (evt: Event) {
                form.onSubmit(evt);
            }
        }
    ]
});

export const props = {
    form,
    notification: {}
}

export default class SignUpPage extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            notification: new Notification(this.props.notification).renderToString()
        });
    }
}
