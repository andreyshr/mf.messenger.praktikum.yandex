import { ProfileApi } from "../api/profile-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
var ProfileService = /** @class */ (function () {
    function ProfileService() {
        var _this = this;
        this.updateAvatar = function (files) {
            var formData = new FormData();
            formData.append("avatar", files[0]);
            return _this.profileApi.updateAvatar(formData)
                .then(function (data) {
                _this.store.set("user", data);
                _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Аватар обновлён", "success");
                _this.bus.emit(EVENTS.AVATAR_UPDATE, _this.store.get("user").avatar);
            })
                .catch(function (err) {
                var errorMessage = JSON.parse(err.response).reason;
                _this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
                throw err;
            });
        };
        if (ProfileService.__instance) {
            return ProfileService.__instance;
        }
        this.profileApi = new ProfileApi();
        this.bus = new AppBus();
        this.store = new Store();
        this.bus.on(EVENTS.PROFILE_UPDATE_AVATAR, this.updateAvatar);
        ProfileService.__instance = this;
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
    ProfileService.__instance = null;
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile-service.js.map