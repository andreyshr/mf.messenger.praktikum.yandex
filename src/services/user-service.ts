import {HTTP} from "./HTTP.js";

export class UserService {
    auth(login: string, password: string) {
        return HTTP.post('/api/signin', {login, password})
            .then((data: any) => console.log(data));
    }

    signup(data: { name: string, second_name: string, email: string, password: string, login: string, phone: string }) {
        const { name, second_name, email, password, login, phone } = data;
        return HTTP.post('/api/signup', {name, second_name, email, login, password, phone})
            .then((data: any) => console.log(data));
    }

    profile(data: { first_name: string, second_name: string, display_name: string, login: string, newPassword: string, oldPassword: string, email: string, phone: string }) {
        const { first_name, second_name, display_name, login, newPassword, oldPassword, email, phone } = data;
        return HTTP.put('/user/profile', {first_name, second_name, display_name, login, newPassword, oldPassword, email, phone})
            .then((data: any) => console.log(data));
    }
}
