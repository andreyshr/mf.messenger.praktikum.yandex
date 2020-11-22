import Block from "../../modules/block/block";
import template from "./template.hbs";
import { Props } from "../../modules/block/types";
import Store from "../../modules/store/store";
const store = new Store();

import Message from "../message/message";

import { bus } from "../../modules/event-bus/app-bus";
import EVENTS from "../../modules/event-bus/events";
import { Nullable } from "../../utils/utility-type";

export default class MessagesList extends Block {
    constructor(props: Props) {
        super("div", props);

        bus.on(EVENTS.MESSAGES_UPDATE, this.messagesUpdate);

        Block._instances.push(this);
    }

    get user() {
        return store.get("user");
    }

    messagesUpdate = (messages: Props) => {
        this.setProps({
            messages: messages.map(this.createMessage),
        });
        this.forceUpdate();

        const historyWindow = document.querySelector(
            ".workspace__history-scrollable"
        );
        if (historyWindow)
            historyWindow.scrollTop = (historyWindow as HTMLElement)?.scrollHeight;
    };

    createMessage = (
        message: Record<string, string>
    ): Record<string, string | boolean> => {
        let uId: Nullable<string> = null;

        const time =
            new Date(message.time).toLocaleDateString() ===
            new Date().toLocaleDateString()
                ? new Date(message.time).toTimeString().slice(0, 5)
                : new Date(message.time).toLocaleString().slice(0, 17);

        if (message.hasOwnProperty("user_id")) uId = message.user_id;
        if (message.hasOwnProperty("userId")) uId = message.userId;

        return {
            inbox: this.user.id !== uId,
            outbox: this.user.id === uId,
            time,
            content: message.content,
        };
    };

    render() {
        return template({
            messages: this.props.messages.map((message: Props) =>
                new Message({
                    ...message,
                    className: `message ${
                        message.inbox ? "message--inbox" : "message--outbox"
                    }`,
                }).renderToString()
            ),
        });
    }
}
