import { AuthApi } from "../api/auth-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.logout = function () {
            return _this.authApi.logout()
                .then(function () { return document.location.reload(); })
                .catch(function (err) {
                throw err;
            });
        };
        if (AuthService.__instance) {
            return AuthService.__instance;
        }
        this.authApi = new AuthApi();
        this.bus = new AppBus();
        this.store = new Store();
        this.bus.on(EVENTS.LOGOUT, this.logout);
        AuthService.__instance = this;
    }
    AuthService.prototype.signin = function (login, password) {
        var _this = this;
        return this.authApi.signin({ login: login, password: password })
            .then(function () { return _this.getUser(); })
            .then(function (data) {
            _this.store.set("user", data);
            _this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
        })
            .catch(function (err) {
            var errorMessage = JSON.parse(err.response).reason;
            _this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
            throw err;
        });
    };
    AuthService.prototype.getUser = function () {
        return this.authApi.getUser()
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    AuthService.prototype.signup = function (data) {
        var _this = this;
        return this.authApi.signup(data)
            .then(function () { return _this.getUser(); })
            .then(function (data) {
            _this.store.set("user", data);
            _this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
        })
            .catch(function (err) {
            var errorMessage = JSON.parse(err.response).reason;
            _this.bus.emit(EVENTS.NOTIFICATION_SHOW, errorMessage, "warning");
            throw err;
        });
    };
    AuthService.prototype.isAuth = function () {
        return this.store.get("user");
    };
    AuthService.__instance = null;
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth-service.js.map