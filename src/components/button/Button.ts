import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class Button extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
