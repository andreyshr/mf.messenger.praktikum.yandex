import Block from "../../modules/block/block";
import template from "./template.hbs";

import { Props } from "../../modules/block/types";

export const props = {
    title: "500",
    description: "Мы уже фиксим",
    linkTitle: "Назад к чатам",
    linkHref: "/messenger",
};

export default class Page500 extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return template(this.props);
    }
}
