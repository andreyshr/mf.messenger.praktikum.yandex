import { ProfileApi } from "../api/profile-api.js";
var profileApi = new ProfileApi();
var ProfileService = /** @class */ (function () {
    function ProfileService() {
    }
    ProfileService.prototype.updateProfile = function (data) {
        return profileApi.update(data)
            .then(function (data) { return console.log(data); })
            .catch(function (err) {
            throw err;
        });
    };
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile-service.js.map