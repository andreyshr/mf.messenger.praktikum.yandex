import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";

export default class Message extends Block {
    constructor(props: Props) {
        super("div", props);
        Block._instances.push(this);
    }

    render() {
        return template(this.props);
    }
}
