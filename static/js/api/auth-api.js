import { authAPIInstance } from "../modules/HTTP/HTTP.js";
var AuthApi = /** @class */ (function () {
    function AuthApi() {
    }
    AuthApi.prototype.signin = function (data) {
        var options = {
            data: data,
        };
        return authAPIInstance.post("/signin", options);
    };
    AuthApi.prototype.signup = function (data) {
        var options = {
            data: data,
        };
        return authAPIInstance.post("/signup", options);
    };
    AuthApi.prototype.logout = function () {
        var options = {};
        return authAPIInstance.post("/logout", options);
    };
    AuthApi.prototype.getUser = function () {
        var options = {
            data: {},
        };
        return authAPIInstance
            .get("/user", options)
            .then(function (data) { return JSON.parse(data); });
    };
    return AuthApi;
}());
export { AuthApi };
//# sourceMappingURL=auth-api.js.map