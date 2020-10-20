import Block from "../../modules/block/block.js";
import { template } from "./template.js";

export default class Room extends Block {
    avatar: Block;
    constructor(props: Props) {
        super("li", props);
        Block._instances.push(this);
    }

    render() {
        setTimeout(() => {
            this.setProps({
                name: "new"
            });
        }, 2000)
        return Handlebars.compile(template)(this.props);
    }
}
