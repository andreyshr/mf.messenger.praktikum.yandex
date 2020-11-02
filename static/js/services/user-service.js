import { UserAPI } from "../api/user-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import Store from "../modules/store/store.js";
var UserService = /** @class */ (function () {
    function UserService() {
        this.userApi = new UserAPI();
        this.bus = new AppBus();
        this.store = new Store();
    }
    UserService.prototype.search = function (login) {
        return this.userApi.search(login)
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            throw err;
        });
    };
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user-service.js.map