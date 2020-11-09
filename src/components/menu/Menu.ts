import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import Button from "../button/Button.js";
import { Props } from "../../modules/block/types";

export default class Menu extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            buttonMenuOpener: new Button(
                "button",
                this.props.buttonMenuOpener
            ).renderToString(),
        });
    }
}
