import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";
import Button from "../button/Button";

export default class SidebarHeader extends Block {
    constructor(props: Props) {
        super("header", props);

        Block._instances.push(this);
    }

    render() {
        return template({
            ...this.props,
            profileLink: new Button(
                "a",
                this.props.profileLink
            ).renderToString(),
        });
    }
}
