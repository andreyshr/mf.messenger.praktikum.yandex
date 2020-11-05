import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";

export default class Avatar extends Block {
    _stubImage: string;
    _avatarImg: string;

    constructor(props: Props) {
        super("div", props);

        this._stubImage = "https://www.lync.me/public/storage/users/images/profile_images/default.png";
        this._avatarImg = this.props.avatarImg ? 'https://ya-praktikum.tech/' + this.props.avatarImg : ""

        Block._instances.push(this);
    }

    render() {
        return Handlebars.compile(template)({
            ...this.props,
            avatarImg: this._avatarImg || this._stubImage
        });
    }
}
