import Block from "../../modules/block/block.js";
import { template } from "./template.js";

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
        return Handlebars.compile(template)(this.props);
    }
}
