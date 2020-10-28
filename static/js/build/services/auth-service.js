import { AuthApi } from "../api/auth-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
var authApi = new AuthApi();
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.bus = new AppBus();
        this.bus.on(EVENTS.LOGOUT, this.logout);
    }
    AuthService.prototype.signin = function (login, password) {
        return authApi.signin({ login: login, password: password })
            .then(function (data) { return console.log(data); })
            .catch(function (err) {
            throw err;
        });
    };
    AuthService.prototype.signup = function (data) {
        return authApi.signup(data)
            .then(function (data) { return console.log(data); })
            .catch(function (err) {
            throw err;
        });
    };
    AuthService.prototype.logout = function () {
        return authApi.logout()
            .then(function (data) { return console.log(data); })
            .catch(function (err) {
            throw err;
        });
    };
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth-service.js.map