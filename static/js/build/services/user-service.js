import { HTTP } from "./HTTP.js";
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.auth = function (login, password) {
        return HTTP.post('/api/signin', { login: login, password: password })
            .then(function (data) {
            console.log(data);
        }.bind(this));
    };
    UserService.prototype.signup = function (name, second_name, email, password, login, phone) {
        return HTTP.post('/api/signup', { name: name, second_name: second_name, email: email, login: login, password: password, phone: phone })
            .then(function (data) {
            console.log(data);
        }.bind(this));
    };
    UserService.prototype.profile = function (first_name, second_name, display_name, login, newPassword, oldPassword, email, phone) {
        return HTTP.put('/user/profile', { first_name: first_name, second_name: second_name, display_name: display_name, login: login, newPassword: newPassword, oldPassword: oldPassword, email: email, phone: phone })
            .then(function (data) {
            console.log(data);
        }.bind(this));
    };
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user-service.js.map