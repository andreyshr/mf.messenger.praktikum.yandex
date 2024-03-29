import Block from "../../modules/block/block";
import template from "./template.hbs";

import Button from "../button/Button";
import UsersList from "../users-list/UsersList";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";
import { chatsService } from "../../services/chats-service";
import { userService } from "../../services/user-service";
import Store from "../../modules/store/store";

import { Props } from "../../modules/block/types";
import { Nullable } from "../../utils/utility-type";

const store = new Store();

export default class Dialog extends Block {
    constructor(props: Props) {
        super("div", props);

        bus.on(EVENTS.OPEN_ADD_USER_DIALOG, () => {
            store.set("dialog", "add_user");
            this.show();
        });

        bus.on(EVENTS.OPEN_REMOVE_USER_DIALOG, () => {
            store.set("dialog", "remove_user");
            this.show();
        });

        bus.on(EVENTS.CLOSE_DIALOG, this.hide.bind(this));

        Block._instances.push(this);
    }

    componentMounted() {
        this.hide();
    }

    onShow = () => {
        const searchInput: Nullable<HTMLInputElement> = document.querySelector(
            ".js-user-search"
        );

        if (store.get("dialog") === "remove_user") {
            if (searchInput) searchInput.style.display = "none";
            chatsService.getUsers();
        }
        if (store.get("dialog") === "add_user") {
            if (searchInput) searchInput.style.display = "block";
            userService.search("");
        }
    };

    onHide = () => {
        bus.emit(EVENTS.USERS_UPDATE, []);
        const input: Nullable<HTMLInputElement> = document.querySelector(
            ".js-user-search"
        );
        if (input) {
            (input as HTMLInputElement).value = "";
        }
    };

    render() {
        return template({
            ...this.props,
            usersList: new UsersList({
                users: this.props.users,
            }).renderToString(),
            cancelButton: new Button(
                "button",
                this.props.cancelButton
            ).renderToString(),
        });
    }
}
