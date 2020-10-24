import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Button from "../button/Button.js";

import {Props} from "../../modules/block/types";

export default class Dialog extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            removeButton: new Button("button", this.props.removeButton).renderToString(),
            cancelButton: new Button("button", this.props.cancelButton).renderToString(),
        });
    }
}
