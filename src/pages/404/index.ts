import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

export default class Page404 extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}

const page404 = new Page404({
    title: "404",
    description: "Не туда попали",
    linkTitle: "Назад к чатам",
    linkHref: "/messenger.html"
})

render(".app", page404);




