import {profileAPIInstance} from "../modules/HTTP/HTTP.js";
import {Options} from "../modules/HTTP/types";
import {AvatarData, ProfileData} from "../services/types";

export class ProfileApi {
    update(data: ProfileData) {
        const options: Options<ProfileData> = {data, headers: {"Content-Type": "application/json"}};

        return profileAPIInstance.put('/', options)
            .then(data => data)
            .catch(err => {
                throw err
            });
    }

    updateAvatar(data: any) {
        const options: Options<AvatarData> = {data, headers: {"Content-Type": "multipart/form-data"}};

        return profileAPIInstance.put('/avatar', options)
            .then(data => data)
            .catch(err => {
                throw err
            });
    }
}
