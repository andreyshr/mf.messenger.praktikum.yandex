import { chatsAPIInstance } from "../modules/HTTP/HTTP.js";
import { Options } from "../modules/HTTP/types";
import {
    CreateChatRequest,
    ChatUsersRequest,
    EmptyRequest,
} from "../services/types";

export class ChatsApi {
    getChats() {
        const options: Options<EmptyRequest> = {
            data: {},
            headers: { "Content-Type": "application/json" },
        };

        return chatsAPIInstance
            .get("/", options)
            .then((data: string) => JSON.parse(data))
            .catch((err) => {
                throw err;
            });
    }

    createChat(title: string) {
        const options: Options<CreateChatRequest> = {
            data: { title },
            headers: { "Content-Type": "application/json" },
        };

        return chatsAPIInstance
            .post("/", options)
            .then((data: string) => data)
            .catch((err) => {
                throw err;
            });
    }

    getUsers(chatId: string) {
        const options: Options<EmptyRequest> = {
            data: {},
            headers: { "Content-Type": "application/json" },
        };

        return chatsAPIInstance
            .get(`/${chatId}/users`, options)
            .then((data: string) => JSON.parse(data))
            .catch((err) => {
                throw err;
            });
    }

    addUsers(data: ChatUsersRequest) {
        const options: Options<ChatUsersRequest> = {
            data,
            headers: { "Content-Type": "application/json" },
        };

        return chatsAPIInstance
            .put("/users", options)
            .then((data: string) => data)
            .catch((err) => {
                throw err;
            });
    }

    removeUsers(data: ChatUsersRequest) {
        const options: Options<ChatUsersRequest> = {
            data,
            headers: { "Content-Type": "application/json" },
        };

        return chatsAPIInstance
            .delete("/users", options)
            .then((data: string) => data)
            .catch((err) => {
                throw err;
            });
    }
}
