import { AuthApi } from "../api/auth-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
var authApi = new AuthApi();
var store = new Store();
var AuthService = /** @class */ (function () {
    function AuthService() {
        if (AuthService.__instance) {
            return AuthService.__instance;
        }
        this.bus = new AppBus();
        this.bus.on(EVENTS.LOGOUT, this.logout);
        AuthService.__instance = this;
    }
    AuthService.prototype.signin = function (login, password) {
        var _this = this;
        return authApi.signin({ login: login, password: password })
            .then(function () { return _this.getUser(); })
            .then(function (data) {
            store.set("user", data);
            _this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
        })
            .catch(function (err) {
            throw err;
        });
    };
    AuthService.prototype.getUser = function () {
        return authApi.getUser()
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    AuthService.prototype.signup = function (data) {
        var _this = this;
        return authApi.signup(data)
            .then(function () { return _this.getUser(); })
            .then(function (data) {
            store.set("user", data);
            _this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
        })
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
    AuthService.prototype.isAuth = function () {
        return store.get("user");
    };
    AuthService.__instance = null;
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth-service.js.map