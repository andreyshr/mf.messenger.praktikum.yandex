import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";
import Avatar from "../../components/avatar/Avatar.js";
import { addInputEvents } from "../../utils/add-input-events.js";

import { render } from "../../utils/renderDOM.js";

import { inputsProps, buttons, buttonBack } from "./data.js";

import {Props} from "../../modules/block/types";

const inputs = inputsProps.map(addInputEvents);

const form: Form = new Form({
        template: "profile",
        className: "profile__form",
        action: "profile",
        title: "Андрей Шауров",
        inputs: inputs.map(props => new Input(props)),
        buttons: buttons.map(props => new Button("button", props)),
        avatar: new Avatar({ className: "avatar avatar--lg", stubLetters: "АШ" }),
        avatarLoadButton: new Button("label", { title: "Загрузить аватар", className: "button button--transparent ml-auto mr-auto", attributes: { for: "avatar" } }),
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




