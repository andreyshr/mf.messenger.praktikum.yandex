import {authAPIInstance} from "../modules/HTTP/HTTP.js";
import {Options} from "../modules/HTTP/types";
import {SigninData, SignupData} from "../services/types";

export class AuthApi {
    signin(data: SigninData) {
        const options: Options<SigninData> = {data, headers: {"Content-Type": "application/json"}};

        return authAPIInstance.post('/signin', options)
            .then(data => data)
            .catch(err => {
                throw err
            });
    }

    getUser() {
        const options: Options<unknown> = {data: {}, headers: {"Content-Type": "application/json"}};

        return authAPIInstance.get('/user', options)
            .then(data => data)
            .catch(err => {
                throw err
            });
    }

    signup(data: SignupData) {
        const options: Options<SignupData> = {data, headers: {"Content-Type": "application/json"}};

        return authAPIInstance.post('/signup', options)
            .then(data => data)
            .catch(err => {
                throw err
            });
    }

    logout() {
        const options: Options<unknown> = {headers: {"Content-Type": "application/json"}};

        return authAPIInstance.post('/logout', options)
            .then(() => {
                document.location.reload();
            })
            .catch(err => {
                throw err
            });
    }
}
