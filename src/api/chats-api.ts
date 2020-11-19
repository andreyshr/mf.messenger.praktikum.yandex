import { chatsAPIInstance } from "../modules/HTTP/HTTP";
import { Options } from "../modules/HTTP/types";
import { CreateChatRequest, ChatUsersRequest } from "../services/types";

export class ChatsApi {
    getChats() {
        const options: Options<unknown> = {
            data: {},
        };

        return chatsAPIInstance
            .get("/", options)
            .then((data: string) => JSON.parse(data));
    }

    createChat(title: string) {
        const options: Options<CreateChatRequest> = {
            data: { title },
        };

        return chatsAPIInstance.post("/", options);
    }

    getUsers(chatId: number) {
        const options: Options<unknown> = {
            data: {},
        };

        return chatsAPIInstance
            .get(`/${chatId}/users`, options)
            .then((data: string) => JSON.parse(data));
    }

    addUsers(data: ChatUsersRequest) {
        const options: Options<ChatUsersRequest> = {
            data,
        };

        return chatsAPIInstance.put("/users", options);
    }

    removeUsers(data: ChatUsersRequest) {
        const options: Options<ChatUsersRequest> = {
            data,
        };

        return chatsAPIInstance.delete("/users", options);
    }
}
