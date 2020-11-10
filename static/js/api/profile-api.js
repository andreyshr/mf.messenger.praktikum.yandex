import { profileAPIInstance } from "../modules/HTTP/HTTP.js";
var ProfileApi = /** @class */ (function () {
    function ProfileApi() {
    }
    ProfileApi.prototype.update = function (data) {
        var options = {
            data: data,
        };
        return profileAPIInstance
            .put("/", options)
            .then(function (data) { return JSON.parse(data); });
    };
    ProfileApi.prototype.updateAvatar = function (data) {
        var options = { data: data };
        return profileAPIInstance
            .put("/avatar", options)
            .then(function (data) { return JSON.parse(data); });
    };
    return ProfileApi;
}());
export { ProfileApi };
//# sourceMappingURL=profile-api.js.map