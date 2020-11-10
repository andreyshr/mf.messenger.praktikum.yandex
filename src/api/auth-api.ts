import { authAPIInstance } from "../modules/HTTP/HTTP.js";
import { Options } from "../modules/HTTP/types";
import { SigninRequest, SignupRequest, UserResponse } from "../services/types";

export class AuthApi {
    signin(data: SigninRequest) {
        const options: Options<SigninRequest> = {
            data,
        };

        return authAPIInstance.post("/signin", options);
    }

    signup(data: SignupRequest) {
        const options: Options<SignupRequest> = {
            data,
        };

        return authAPIInstance.post("/signup", options);
    }

    logout() {
        const options: Options<unknown> = {};

        return authAPIInstance.post("/logout", options);
    }

    getUser() {
        const options: Options<unknown> = {
            data: {},
        };

        return authAPIInstance
            .get("/user", options)
            .then((data: string): UserResponse => JSON.parse(data));
    }
}
