import { profileAPIInstance } from "../modules/HTTP/HTTP.js";
var ProfileApi = /** @class */ (function () {
    function ProfileApi() {
    }
    ProfileApi.prototype.update = function (data) {
        var options = { data: data, headers: { "Content-Type": "application/json" } };
        return profileAPIInstance.put('/', options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    ProfileApi.prototype.updateAvatar = function (data) {
        var options = { data: data, headers: { "Content-Type": "multipart/form-data" } };
        return profileAPIInstance.put('/avatar', options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    return ProfileApi;
}());
export { ProfileApi };
//# sourceMappingURL=profile-api.js.map