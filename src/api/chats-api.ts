import {chatsAPIInstance} from "../modules/HTTP/HTTP.js";
import {Options} from "../modules/HTTP/types";

export class ChatsApi {
    getChats() {
        const options: Options<unknown> = {data: {}, headers: {"Content-Type": "application/json"}};

        return chatsAPIInstance.get('/', options)
            .then((data: string) => JSON.parse(data))
            .catch(err => {
                throw err
            });
    }

    createChat(title: string) {
        const options: Options<unknown> = {data: {title}, headers: {"Content-Type": "application/json"}};

        return chatsAPIInstance.post('/', options)
            .then((data: string) => JSON.parse(data))
            .catch(err => {
                throw err
            });
    }
}
