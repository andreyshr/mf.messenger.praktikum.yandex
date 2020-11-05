import {profileAPIInstance} from "../modules/HTTP/HTTP.js";
import {Options} from "../modules/HTTP/types";
import {ProfileData} from "../services/types";

export class ProfileApi {
    update(data: ProfileData) {
        const options: Options<ProfileData> = {data, headers: {"Content-Type": "application/json"}};

        return profileAPIInstance.put('/', options)
            .then((data: string) => JSON.parse(data))
            .catch(err => {
                throw err
            });
    }

    updateAvatar(data: FormData) {
        const options: Options<FormData> = {data};

        return profileAPIInstance.put('/avatar', options)
            .then((data: string) => JSON.parse(data))
            .catch(err => {
                throw err
            });
    }
}
