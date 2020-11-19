import Block from "../../modules/block/block";
import template from "./template.hbs";
import Button from "../button/Button";
import { Props } from "../../modules/block/types";

export default class Menu extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    render() {
        return template({
            ...this.props,
            buttonMenuOpener: new Button(
                "button",
                this.props.buttonMenuOpener
            ).renderToString(),
        });
    }
}
