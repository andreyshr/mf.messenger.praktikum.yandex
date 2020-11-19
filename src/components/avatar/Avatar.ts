import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";

export default class Avatar extends Block {
    static _stubImage: string =
        "https://www.lync.me/public/storage/users/images/profile_images/default.png";
    _avatarImg: string;

    constructor(props: Props) {
        super("div", props);

        this._avatarImg = this.props.avatarImg
            ? "https://ya-praktikum.tech/" + this.props.avatarImg
            : "";

        Block._instances.push(this);
    }

    render() {
        return template({
            ...this.props,
            avatarImg: this._avatarImg || Avatar._stubImage,
        });
    }
}
