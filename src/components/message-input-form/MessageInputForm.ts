import Block from "../../modules/block/block";
import template from "./template.hbs";

import Button from "../button/Button";
import { Props } from "../../modules/block/types";

export default class MessageInputForm extends Block {
    constructor(props: Props) {
        super("form", props);

        Block._instances.push(this);
    }

    render() {
        return template({
            ...this.props,
            buttonSendMessage: new Button(
                "button",
                this.props.buttonSendMessage
            ).renderToString(),
        });
    }
}
