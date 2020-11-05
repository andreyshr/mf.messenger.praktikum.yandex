import {ProfileApi} from "../api/profile-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";

import {ProfileData} from "./types";
import {Nullable} from "../utils/utility-type";

export class ProfileService {
    profileApi: ProfileApi;
    bus: AppBus;
    store: Store;
    static __instance: Nullable<ProfileService> = null;

    constructor() {
        if (ProfileService.__instance) {
            return ProfileService.__instance;
        }

        this.profileApi = new ProfileApi();
        this.bus = new AppBus();
        this.store = new Store();

        this.bus.on(EVENTS.PROFILE_UPDATE_AVATAR, this.updateAvatar);

        ProfileService.__instance = this;
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

    updateAvatar = (files: any[]) => {
        const formData = new FormData();
        formData.append("avatar", files[0]);

        return this.profileApi.updateAvatar(formData)
            .then((data) => {
                this.store.set("user", data);
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Аватар обновлён", "success");
                this.bus.emit(EVENTS.AVATAR_UPDATE, this.store.get("user").avatar);
            })
            .catch(err => {
                const errorMessage =  JSON.parse(err.response).reason
                this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
                throw err
            });
    }
}
