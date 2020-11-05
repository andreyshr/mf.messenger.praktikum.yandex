import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Avatar from "../avatar/Avatar.js";
import {Props} from "../../modules/block/types";

export default class User extends Block {
    avatar: Block;
    constructor(props: Props) {
        super("li", props);

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            id: this.props.id,
            avatar: new Avatar({
                className: "room__avatar avatar",
                avatarImg: this.props.avatarImg,
            }).renderToString()
        });
    }
}
