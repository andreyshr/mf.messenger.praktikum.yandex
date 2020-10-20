import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Button from "../button/Button.js";

export default class MessageInputForm extends Block {
    constructor(props: Props) {
        super("form", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            buttonSendMessage: new Button("button", this.props.buttonSendMessage).renderToString()
        });
    }
}
