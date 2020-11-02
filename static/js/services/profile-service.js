import { ProfileApi } from "../api/profile-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
var ProfileService = /** @class */ (function () {
    function ProfileService() {
        var _this = this;
        this.profileApi = new ProfileApi();
        this.bus = new AppBus();
        this.store = new Store();
        this.bus.on(EVENTS.PROFILE_UPDATE_AVATAR, function (input) {
            var formData = new FormData();
            formData.append("avatar", input.files[0]);
            _this.updateAvatar(formData);
        });
    }
    ProfileService.prototype.updateProfile = function (data) {
        var _this = this;
        return this.profileApi.update(data)
            .then(function (data) {
            _this.store.set("user", data);
            _this.bus.emit(EVENTS.INPUT_UPDATE_VALUE, _this.store.get("user"));
            _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Информация о пользователе обновлена", "success");
        })
            .catch(function (err) {
            var errorMessage = JSON.parse(err.response).reason;
            _this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
            throw err;
        });
    };
    ProfileService.prototype.updateAvatar = function (data) {
        var _this = this;
        return this.profileApi.updateAvatar(data)
            .then(function () {
            _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Аватар обновлён", "success");
        })
            .catch(function (err) {
            var errorMessage = JSON.parse(err.response).reason;
            _this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
            throw err;
        });
    };
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile-service.js.map