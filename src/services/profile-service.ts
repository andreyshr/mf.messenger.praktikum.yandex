import {ProfileApi} from "../api/profile-api.js";
import {ProfileData} from "./types";

const profileApi = new ProfileApi();

export class ProfileService {
    updateProfile(data: ProfileData) {
        return profileApi.update(data)
            .then((data: any) => console.log(data))
            .catch(err => {
                throw err
            });
    }
}
