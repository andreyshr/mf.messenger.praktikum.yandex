import Block from "../../modules/block/block.js";
import {template} from "./template.js";

import {render} from "../../utils/renderDOM.js";

import "../../utils/handlebars-helpers.js";

export default class MessengerChat extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({});
    }
}

const messengerChat = new MessengerChat({

})

render(".app", messengerChat);




