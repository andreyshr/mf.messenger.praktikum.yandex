import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";

import User from "../user/User.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

const bus = new AppBus();

export default class UsersList extends Block {
    constructor(props: Props) {
        super("div", props);

        bus.on(EVENTS.USERS_UPDATE, this.usersUpdate);

        Block._instances.push(this);
    }

    usersUpdate = (users: Props) => {
        this.setProps({
           users
        })
    }

    render() {
        return Handlebars.compile(template)({
            users: this.props.users.map((user: Props): string => new User(user).renderToString())
        });
    }
}
