import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";
import { addInputEvents } from "../../utils/add-input-events.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

import { inputsProps, buttons } from "./data.js";

const inputs = inputsProps.map(addInputEvents);

const form: Form = new Form({
        className: "form form--signin",
        action: "signin",
        title: "Вход",
        inputs: inputs.map(props => new Input(props)),
        buttons: buttons.map(props => new Button(props.tagName === "button"? "button" : "a", props)),
        events: [
            {
                type: "submit",
                el: "form",
                handler: function (evt: Event) {
                    form.onSubmit(evt);
                }
            }
        ]
    }
);

export default class SignInPage extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString()
        });
    }
}

const signInPage = new SignInPage({
    form
})

render(".app", signInPage);

Block.hydrate();




