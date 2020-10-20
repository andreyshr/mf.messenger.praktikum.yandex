import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class SidebarHeader extends Block {
    constructor(props: Props) {
        super("header", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
