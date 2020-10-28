import {AuthApi} from "../api/auth-api.js";
import {SignupData} from "./types";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";

const authApi = new AuthApi();

export class AuthService {
    bus: AppBus;

    constructor() {
        this.bus = new AppBus();

        this.bus.on(EVENTS.LOGOUT, this.logout);
    }

    signin(login: string, password: string) {
        return authApi.signin({login, password})
            .then((data: any) => console.log(data))
            .catch(err => {
                throw err
            });
    }

    signup(data: SignupData) {
        return authApi.signup(data)
            .then((data: any) => console.log(data))
            .catch(err => {
                throw err
            });
    }

    logout() {
        return authApi.logout()
            .then((data: any) => console.log(data))
            .catch(err => {
                throw err
            });
    }
}
