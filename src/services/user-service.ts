import {HTTP} from "./HTTP.js";
import {ProfileData, SignupData} from "./types";


export class UserService {
    auth(login: string, password: string) {
        return HTTP.post('/api/signin', {login, password})
            .then((data: any) => console.log(data));
    }

    signup(data: SignupData) {
        return HTTP.post('/api/signup', data)
            .then((data: any) => console.log(data));
    }

    profile(data: ProfileData) {
        return HTTP.put('/user/profile', data)
            .then((data: any) => console.log(data));
    }
}
