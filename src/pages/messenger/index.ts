import Block from "../../modules/block/block.js";
import { template } from "./template.js";

import { render } from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

export default class Messenger extends Block {
    constructor(props: Props) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({});
    }
}

const messenger = new Messenger({

})

render(".app", messenger);



