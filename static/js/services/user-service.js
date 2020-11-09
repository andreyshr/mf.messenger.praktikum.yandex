import { UserAPI } from "../api/user-api.js";
import { bus } from "../modules/event-bus/app-bus.js";
import Store from "../modules/store/store.js";
import EVENTS from "../modules/event-bus/events.js";
var UserService = /** @class */ (function () {
    function UserService() {
        if (UserService.__instance) {
            return UserService.__instance;
        }
        this.userApi = new UserAPI();
        this.bus = bus;
        this.store = new Store();
        UserService.__instance = this;
    }
    UserService.prototype.search = function (login) {
        var _this = this;
        return this.userApi.search(login).then(function (data) {
            _this.bus.emit(EVENTS.USERS_UPDATE, data.map(function (user) { return ({
                title: user.login,
                id: user.id,
                avatarImg: user.avatar,
            }); }));
            return data;
        });
    };
    UserService.__instance = null;
    return UserService;
}());
export { UserService };
export var userService = new UserService();
//# sourceMappingURL=user-service.js.map