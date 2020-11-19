import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";

export default class Button extends Block {
    constructor(tag: string, props: Props) {
        super(tag, props);

        Block._instances.push(this);
    }

    render() {
        return template(this.props);
    }
}
