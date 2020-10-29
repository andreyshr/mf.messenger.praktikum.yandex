import Block from "../../modules/block/block.js";
import { template } from "./template.js";

//import { render } from "../../utils/renderDOM.js";

import {Props} from "../../modules/block/types";

export default class Page404 extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}

export const page404 = new Page404({
    title: "404",
    description: "Не туда попали",
    linkTitle: "Назад к чатам",
    linkHref: "/messenger.html"
})

// render(".app", page404);




