import Block from "../../modules/block/block.js";
import {template} from "./template.js";

import {render} from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

export default class Page404 extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({});
    }
}

const page404 = new Page404({

})

render(".app", page404);




