import { ProfileApi } from "../api/profile-api";
import { bus, AppBus } from "../modules/event-bus/app-bus";
import EVENTS from "../modules/event-bus/events";
import Store from "../modules/store/store";

import { ProfileRequest, ProfileResponse, UserResponse } from "./types";
import { Nullable } from "../utils/utility-type";

export class ProfileService {
    bus: AppBus;
    profileApi: ProfileApi;
    store: Store;
    static __instance: Nullable<ProfileService> = null;

    constructor() {
        if (ProfileService.__instance) {
            return ProfileService.__instance;
        }

        this.profileApi = new ProfileApi();
        this.store = new Store();
        this.bus = bus;

        this.bus.on(EVENTS.PROFILE_UPDATE_AVATAR, this.updateAvatar);

        ProfileService.__instance = this;
    }

    updateProfile(data: ProfileRequest) {
        return this.profileApi
            .update(data)
            .then((data: ProfileResponse) => {
                this.store.set("user", data);
                this.bus.emit(
                    EVENTS.INPUT_UPDATE_VALUE,
                    this.store.get("user")
                );
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    "Информация о пользователе обновлена",
                    "success"
                );
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

    updateAvatar = (files: BinaryType[]) => {
        const formData = new FormData();
        formData.append("avatar", files[0]);

        return this.profileApi
            .updateAvatar(formData)
            .then((data: UserResponse) => {
                this.store.set("user", data);
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    "Аватар обновлён",
                    "success"
                );
                this.bus.emit(
                    EVENTS.AVATAR_UPDATE,
                    this.store.get("user").avatar
                );
            })
            .catch((err) => {
                const errorMessage = JSON.parse(err.response).reason;
                this.bus.emit(
                    EVENTS.NOTIFICATION_SHOW,
                    errorMessage,
                    "warning"
                );
            });
    };
}

export const profileService = new ProfileService();
