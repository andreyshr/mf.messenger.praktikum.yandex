import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";
import Button from "../button/Button.js";

export default class SidebarHeader extends Block {
    constructor(props: Props) {
        super("header", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            profileLink: new Button("a", this.props.profileLink).renderToString(),
        });
    }
}
