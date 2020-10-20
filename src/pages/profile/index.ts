import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";
import { addInputEvents } from "../../utils/add-input-events.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

import { inputsProps, buttons, buttonBack } from "./data.js";

const inputs = inputsProps.map(addInputEvents);

const form: Form = new Form({
        template: "profile",
        className: "profile__form",
        action: "profile",
        title: "Андрей Шауров",
        inputs: inputs.map(props => new Input(props)),
        buttons: buttons.map(props => new Button("button", props)),
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

export default class Profile extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            buttonBack: this.props.buttonBack.renderToString(),
        });
    }
}

const profile = new Profile({
    form,
    buttonBack: new Button("div", buttonBack)
})

render(".app", profile);

Block.hydrate();




