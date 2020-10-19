import {HTTP} from "./HTTP.js";

export class UserService {
    auth(login: any, password: any) {
        return HTTP.post('/api/signin', {login, password})
            .then(function (data: any) {
                console.log(data);
            }.bind(this));
    }

    signup(name: any, second_name: any, email: any, password: any, login: any, phone: any) {
        return HTTP.post('/api/signup', {name, second_name, email, login, password, phone})
            .then(function (data: any) {
                console.log(data);
            }.bind(this));
    }

    profile(first_name: any, second_name: any, display_name: any, login: any, newPassword:any, oldPassword:any, email: any, phone: any) {
        return HTTP.put('/user/profile', {first_name, second_name, display_name, login, newPassword, oldPassword, email, phone})
            .then(function (data: any) {
                console.log(data);
            }.bind(this));
    }
}
