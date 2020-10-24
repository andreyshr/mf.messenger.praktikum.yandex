import { HTTP } from "./HTTP.js";
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.auth = function (login, password) {
        return HTTP.post('/api/signin', { login: login, password: password })
            .then(function (data) { return console.log(data); });
    };
    UserService.prototype.signup = function (data) {
        return HTTP.post('/api/signup', data)
            .then(function (data) { return console.log(data); });
    };
    UserService.prototype.profile = function (data) {
        return HTTP.put('/user/profile', data)
            .then(function (data) { return console.log(data); });
    };
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user-service.js.map