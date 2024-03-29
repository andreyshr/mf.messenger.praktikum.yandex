import { profileAPIInstance } from "../modules/HTTP/HTTP";
import { Options } from "../modules/HTTP/types";
import { ProfileRequest } from "../services/types";

export class ProfileApi {
    update(data: ProfileRequest) {
        const options: Options<ProfileRequest> = {
            data,
        };

        return profileAPIInstance
            .put("/", options)
            .then((data: string) => JSON.parse(data));
    }

    updateAvatar(data: FormData) {
        const options: Options<FormData> = { data };

        return profileAPIInstance
            .put("/avatar", options)
            .then((data: string) => JSON.parse(data));
    }
}
