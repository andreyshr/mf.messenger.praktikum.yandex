import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class Dialog extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    render() {
        console.log(this.props)
        return Handlebars.compile(template)(this.props);
    }
}
