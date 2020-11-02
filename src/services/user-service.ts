import {UserAPI} from "../api/user-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import Store from "../modules/store/store.js";

export class UserService {
    userApi: UserAPI;
    bus: AppBus;
    store: Store;

    constructor() {
        this.userApi = new UserAPI();
        this.bus = new AppBus();
        this.store = new Store();
    }

    search(login: string) {
        return this.userApi.search(login)
            .then((data: any) => {
                return data;
            })
            .catch(err => {
                throw err
            });
    }
}
