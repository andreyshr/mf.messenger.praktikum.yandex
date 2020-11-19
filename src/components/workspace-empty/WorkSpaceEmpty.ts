import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";
import Button from "../button/Button";

export default class WorkSpaceEmpty extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    render() {
        return template({
            ...this.props,
            buttonCreateChat: new Button(
                "button",
                this.props.buttonCreateChat
            ).renderToString(),
        });
    }
}
