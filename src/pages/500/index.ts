import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

export default class Page500 extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}

const page500 = new Page500({
    title: "500",
    description: "Мы уже фиксим",
    linkTitle: "Назад к чатам",
    linkHref: "/messenger.html"
})

render(".app", page500);




