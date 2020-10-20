import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class Button extends Block {
    constructor(tag: string, props: Props) {
        super(tag, props);

        Block._instances.push(this);
    }

    onClick() {

    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
