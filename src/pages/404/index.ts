import Block from "../../modules/block/block";
import template from "./template.hbs";

import { Props } from "../../modules/block/types";

export const props = {
    title: "404",
    description: "Не туда попали",
    linkTitle: "Назад к чатам",
    linkHref: "/messenger",
};

export default class Page404 extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return template(this.props);
    }
}
