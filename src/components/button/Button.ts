import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import { Props } from "../../modules/block/types";

export default class Button extends Block {
    constructor(tag: string, props: Props) {
        super(tag, props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
