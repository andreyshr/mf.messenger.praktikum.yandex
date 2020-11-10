import { userAPIInstance } from "../modules/HTTP/HTTP.js";
var UserAPI = /** @class */ (function () {
    function UserAPI() {
    }
    UserAPI.prototype.search = function (login) {
        var options = {
            data: { login: login },
        };
        return userAPIInstance
            .post("/search", options)
            .then(function (data) { return JSON.parse(data); });
    };
    return UserAPI;
}());
export { UserAPI };
//# sourceMappingURL=user-api.js.map