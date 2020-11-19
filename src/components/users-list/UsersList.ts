import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";

import User from "../user/User";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";

export default class UsersList extends Block {
    constructor(props: Props) {
        super("div", props);

        bus.on(EVENTS.USERS_UPDATE, this.usersUpdate);

        Block._instances.push(this);
    }

    usersUpdate = (users: Props) => {
        this.setProps({
            users,
        });
    };

    render() {
        return template({
            users: this.props.users.map((user: Props): string =>
                new User(user).renderToString()
            ),
        });
    }
}
