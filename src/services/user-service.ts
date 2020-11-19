import { UserAPI } from "../api/user-api";
import { bus, AppBus } from "../modules/event-bus/app-bus";
import Store from "../modules/store/store";
import { Nullable } from "../utils/utility-type";
import { Props } from "../modules/block/types";
import EVENTS from "../modules/event-bus/events";
import { UserResponse } from "./types";

export class UserService {
    userApi: UserAPI;
    bus: AppBus;
    store: Store;
    static __instance: Nullable<UserService> = null;

    constructor() {
        if (UserService.__instance) {
            return UserService.__instance;
        }

        this.userApi = new UserAPI();
        this.bus = bus;
        this.store = new Store();

        UserService.__instance = this;
    }

    search(login: string) {
        return this.userApi.search(login).then((data: UserResponse[]) => {
            this.bus.emit(
                EVENTS.USERS_UPDATE,
                data.map(
                    (user: UserResponse): Props => ({
                        title: user.login,
                        id: user.id,
                        avatarImg: user.avatar,
                    })
                )
            );
        });
    }
}

export const userService = new UserService();
