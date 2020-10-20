import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class Button extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    onClick() {

    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
