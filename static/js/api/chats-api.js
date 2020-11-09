import { chatsAPIInstance } from "../modules/HTTP/HTTP.js";
var ChatsApi = /** @class */ (function () {
    function ChatsApi() {
    }
    ChatsApi.prototype.getChats = function () {
        var options = {
            data: {},
            headers: { "Content-Type": "application/json" },
        };
        return chatsAPIInstance
            .get("/", options)
            .then(function (data) { return JSON.parse(data); })
            .catch(function (err) {
            throw err;
        });
    };
    ChatsApi.prototype.createChat = function (title) {
        var options = {
            data: { title: title },
            headers: { "Content-Type": "application/json" },
        };
        return chatsAPIInstance
            .post("/", options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    ChatsApi.prototype.getUsers = function (chatId) {
        var options = {
            data: {},
            headers: { "Content-Type": "application/json" },
        };
        return chatsAPIInstance
            .get("/" + chatId + "/users", options)
            .then(function (data) { return JSON.parse(data); })
            .catch(function (err) {
            throw err;
        });
    };
    ChatsApi.prototype.addUsers = function (data) {
        var options = {
            data: data,
            headers: { "Content-Type": "application/json" },
        };
        return chatsAPIInstance
            .put("/users", options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    ChatsApi.prototype.removeUsers = function (data) {
        var options = {
            data: data,
            headers: { "Content-Type": "application/json" },
        };
        return chatsAPIInstance
            .delete("/users", options)
            .then(function (data) { return data; })
            .catch(function (err) {
            throw err;
        });
    };
    return ChatsApi;
}());
export { ChatsApi };
//# sourceMappingURL=chats-api.js.map