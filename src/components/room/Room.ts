import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import Avatar from "../avatar/Avatar.js";

export default class Room extends Block {
    avatar: Block;
    constructor(props: Props) {
        super("li", props);
        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            avatar: new Avatar({
                className: "room__avatar avatar",
                avatarImg: this.props.avatarImg,
                stubLetters: this.props.stubLetters,
                newMessagesCount: this.props.newMessagesCount,
            }).renderToString()
        });
    }
}
