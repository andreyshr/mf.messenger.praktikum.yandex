import { userAPIInstance } from "../modules/HTTP/HTTP.js";
import { Options } from "../modules/HTTP/types";
import { SearchRequest } from "../services/types";

export class UserAPI {
    search(login: string) {
        const options: Options<SearchRequest> = {
            data: { login },
            headers: { "Content-Type": "application/json" },
        };

        return userAPIInstance
            .post("/search", options)
            .then((data: string) => JSON.parse(data))
            .catch((err) => {
                throw err;
            });
    }
}
