import { chatsAPIInstance } from "../modules/HTTP/HTTP.js";
var ChatsApi = /** @class */ (function () {
    function ChatsApi() {
    }
    ChatsApi.prototype.getChats = function () {
        var options = {
            data: {},
        };
        return chatsAPIInstance
            .get("/", options)
            .then(function (data) { return JSON.parse(data); });
    };
    ChatsApi.prototype.createChat = function (title) {
        var options = {
            data: { title: title },
        };
        return chatsAPIInstance.post("/", options);
    };
    ChatsApi.prototype.getUsers = function (chatId) {
        var options = {
            data: {},
        };
        return chatsAPIInstance
            .get("/" + chatId + "/users", options)
            .then(function (data) { return JSON.parse(data); });
    };
    ChatsApi.prototype.addUsers = function (data) {
        var options = {
            data: data,
        };
        return chatsAPIInstance.put("/users", options);
    };
    ChatsApi.prototype.removeUsers = function (data) {
        var options = {
            data: data,
        };
        return chatsAPIInstance.delete("/users", options);
    };
    return ChatsApi;
}());
export { ChatsApi };
//# sourceMappingURL=chats-api.js.map