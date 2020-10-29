import { authAPIInstance } from "../modules/HTTP/HTTP.js";
var AuthApi = /** @class */ (function () {
    function AuthApi() {
    }
    AuthApi.prototype.signin = function (data) {
        var options = { data: data, headers: { "Content-Type": "application/json" } };
        return authAPIInstance.post('/signin', options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    AuthApi.prototype.getUser = function () {
        var options = { data: {}, headers: { "Content-Type": "application/json" } };
        return authAPIInstance.get('/user', options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    AuthApi.prototype.signup = function (data) {
        var options = { data: data, headers: { "Content-Type": "application/json" } };
        return authAPIInstance.post('/signup', options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    AuthApi.prototype.logout = function () {
        var options = { headers: { "Content-Type": "application/json" } };
        return authAPIInstance.post('/logout', options)
            .then(function () {
            document.location.reload();
        })
            .catch(function (err) {
            throw err;
        });
    };
    return AuthApi;
}());
export { AuthApi };
//# sourceMappingURL=auth-api.js.map