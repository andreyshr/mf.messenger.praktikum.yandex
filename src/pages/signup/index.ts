import Block from "../../modules/block/block";
import template from "./template.hbs";

import Form from "../../components/form/Form";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Notification from "../../components/notification/Notification";
import { addInputEvents } from "../../utils/add-input-events";

import { inputsProps, buttons } from "./initial-props";

import { Props } from "../../modules/block/types";

const inputs = inputsProps.map(addInputEvents);

const form: Form = new Form({
    className: "form form--signup",
    action: "signup",
    title: "Регистрация",
    inputs: inputs.map((props) => new Input(props)),
    buttons: buttons.map(
        (props) =>
            new Button(props.tagName === "button" ? "button" : "a", props)
    ),
    events: [
        {
            type: "submit",
            el: ".form--signup",
            handler: function (evt: Event) {
                form.onSubmit(evt);
            },
        },
    ],
});

export const props = {
    form,
    notification: {},
};

export default class SignUpPage extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return template({
            form: this.props.form.renderToString(),
            notification: new Notification(
                this.props.notification
            ).renderToString(),
        });
    }
}
