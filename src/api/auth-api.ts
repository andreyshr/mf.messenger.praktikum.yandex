import { authAPIInstance } from "../modules/HTTP/HTTP.js";
import { Options } from "../modules/HTTP/types";
import { EmptyRequest, SigninRequest, SignupRequest } from "../services/types";

export class AuthApi {
    signin(data: SigninRequest) {
        const options: Options<SigninRequest> = {
            data,
            headers: { "Content-Type": "application/json" },
        };

        return authAPIInstance
            .post("/signin", options)
            .then((data) => data)
            .catch((err) => {
                throw err;
            });
    }

    getUser() {
        const options: Options<EmptyRequest> = {
            data: {},
            headers: { "Content-Type": "application/json" },
        };

        return authAPIInstance
            .get("/user", options)
            .then((data: string) => JSON.parse(data))
            .catch((err) => {
                throw err;
            });
    }

    signup(data: SignupRequest) {
        const options: Options<SignupRequest> = {
            data,
            headers: { "Content-Type": "application/json" },
        };

        return authAPIInstance
            .post("/signup", options)
            .then((data) => data)
            .catch((err) => {
                throw err;
            });
    }

    logout() {
        const options: Options<EmptyRequest> = {
            headers: { "Content-Type": "application/json" },
        };

        return authAPIInstance
            .post("/logout", options)
            .then((data) => data)
            .catch((err) => {
                throw err;
            });
    }
}
