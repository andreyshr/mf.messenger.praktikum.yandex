import {AuthApi} from "../api/auth-api.js";
import {SignupData} from "./types";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import {Nullable} from "../utils/utility-type";
import Store from "../modules/store/store.js";

const authApi = new AuthApi();
const store = new Store();

export class AuthService {
    bus: AppBus;
    static __instance: Nullable<AuthService> = null;

    constructor() {
        if (AuthService.__instance) {
            return AuthService.__instance;
        }

        this.bus = new AppBus();

        this.bus.on(EVENTS.LOGOUT, this.logout);

        AuthService.__instance = this;
    }

    signin(login: string, password: string) {
        return authApi.signin({login, password})
            .then(() => this.getUser())
            .then(data => {
                store.set("user", data);
                this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
            })
            .catch(err => {
                throw err
            });
    }

    getUser() {
        return authApi.getUser()
            .then((data: any) => data)
            .catch(err => {
                throw err
            });
    }

    signup(data: SignupData) {
        return authApi.signup(data)
            .then(() => this.getUser())
            .then(data => {
                store.set("user", data);
                this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
            })
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

    isAuth() {
        return store.get("user");
    }
}
