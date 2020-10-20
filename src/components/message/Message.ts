import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class Message extends Block {
    constructor(props: Props) {
        super("div", props);
        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
