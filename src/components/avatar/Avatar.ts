import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";

export default class Avatar extends Block {
    _stubImage: string;

    constructor(props: Props) {
        super("div", props);

        this._stubImage = "https://www.lync.me/public/storage/users/images/profile_images/default.png";

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            avatarImg: this.props.avatarImg || this._stubImage
        });
    }
}
