import { userAPIInstance } from "../modules/HTTP/HTTP";
import { Options } from "../modules/HTTP/types";
import { SearchRequest, UserResponse } from "../services/types";

export class UserAPI {
    search(login: string) {
        const options: Options<SearchRequest> = {
            data: { login },
        };

        return userAPIInstance
            .post("/search", options)
            .then((data: string): UserResponse[] => JSON.parse(data));
    }
}
