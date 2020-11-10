import { AuthApi } from "../api/auth-api.js";
import { bus, AppBus } from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";

import { SignupRequest, UserResponse } from "./types";
import { Nullable } from "../utils/utility-type";

export class AuthService {
    authApi: AuthApi;
    bus: AppBus;
    store: Store;
    static __instance: Nullable<AuthService> = null;

    constructor() {
        if (AuthService.__instance) {
            return AuthService.__instance;
        }

        this.authApi = new AuthApi();
        this.store = new Store();
        this.bus = bus;

        this.bus.on(EVENTS.LOGOUT, this.logout);

        AuthService.__instance = this;
    }

    getUser(): Promise<void | UserResponse> {
        return this.authApi.getUser().catch((err) => {
            console.log(err.response);
        });
    }

    signin(login: string, password: string) {
        return this.authApi
            .signin({ login, password })
            .then(() => this.getUser())
            .then((data: UserResponse) => {
                this.store.set("user", data);
                this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
            })
            .catch((err) => {
                const errorMessage = JSON.parse(err.response).reason;
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    errorMessage,
                    "warning"
                );
            });
    }

    signup(data: SignupRequest) {
        return this.authApi
            .signup(data)
            .then(() => this.getUser())
            .then((data: UserResponse) => {
                this.store.set("user", data);
                this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
            })
            .catch((err) => {
                const errorMessage = JSON.parse(err.response).reason;
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    errorMessage,
                    "warning"
                );
            });
    }

    logout = () => {
        return this.authApi.logout().then(() => document.location.reload());
    };

    isAuth() {
        return this.store.get("user");
    }
}

export const authService = new AuthService();
