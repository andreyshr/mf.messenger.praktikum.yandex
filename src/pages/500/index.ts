import Block from "../../modules/block/block.js";
import {template} from "./template.js";

import {render} from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

export default class Page500 extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({});
    }
}

const page500 = new Page500({

})

render(".app", page500);




