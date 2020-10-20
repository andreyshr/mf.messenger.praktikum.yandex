import { HTTP } from "./HTTP.js";
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.auth = function (login, password) {
        return HTTP.post('/api/signin', { login: login, password: password })
            .then(function (data) { return console.log(data); });
    };
    UserService.prototype.signup = function (data) {
        var name = data.name, second_name = data.second_name, email = data.email, password = data.password, login = data.login, phone = data.phone;
        return HTTP.post('/api/signup', { name: name, second_name: second_name, email: email, login: login, password: password, phone: phone })
            .then(function (data) { return console.log(data); });
    };
    UserService.prototype.profile = function (data) {
        var first_name = data.first_name, second_name = data.second_name, display_name = data.display_name, login = data.login, newPassword = data.newPassword, oldPassword = data.oldPassword, email = data.email, phone = data.phone;
        return HTTP.put('/user/profile', { first_name: first_name, second_name: second_name, display_name: display_name, login: login, newPassword: newPassword, oldPassword: oldPassword, email: email, phone: phone })
            .then(function (data) { return console.log(data); });
    };
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user-service.js.map