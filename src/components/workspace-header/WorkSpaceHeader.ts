import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Menu from "../menu/Menu.js";
import Avatar from "../avatar/Avatar.js";

import {Props} from "../../modules/block/types";

export default class WorkSpaceHeader extends Block {
    constructor(props: Props) {
        super("header", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            menuChat: new Menu(this.props.menuChat).renderToString(),
            avatar: new Avatar({
                className: "room__avatar avatar avatar--sm",
                avatarImg: this.props.avatarImg
            }).renderToString()
        });
    }
}
