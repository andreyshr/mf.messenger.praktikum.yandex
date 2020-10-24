import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";

export default class WorkSpaceEmpty extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
