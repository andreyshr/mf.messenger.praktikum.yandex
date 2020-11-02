import {ProfileApi} from "../api/profile-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";

import {ProfileData} from "./types";

export class ProfileService {
    profileApi: ProfileApi;
    bus: AppBus;
    store: Store;

    constructor() {
        this.profileApi = new ProfileApi();
        this.bus = new AppBus();
        this.store = new Store();

        this.bus.on(EVENTS.PROFILE_UPDATE_AVATAR, (input) => {
            const formData = new FormData();
            formData.append("avatar", input.files[0]);
            this.updateAvatar(formData);
        })
    }

    updateProfile(data: ProfileData) {
        return this.profileApi.update(data)
            .then((data: any) => {
                this.store.set("user", data);
                this.bus.emit(EVENTS.INPUT_UPDATE_VALUE, this.store.get("user"));
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Информация о пользователе обновлена", "success");
            })
            .catch(err => {
                const errorMessage =  JSON.parse(err.response).reason
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
                throw err
            });
    }

    updateAvatar(data: FormData) {
        return this.profileApi.updateAvatar(data)
            .then(() => {
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Аватар обновлён", "success");
            })
            .catch(err => {
                const errorMessage =  JSON.parse(err.response).reason
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
                throw err
            });
    }
}
