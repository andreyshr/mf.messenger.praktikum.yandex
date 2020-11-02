import { ChatsApi } from "../api/chats-api.js";
import AppBus from "../modules/event-bus/app-bus.js";
import Store from "../modules/store/store.js";
var ChatsService = /** @class */ (function () {
    function ChatsService() {
        this.chatsApi = new ChatsApi();
        this.bus = new AppBus();
        this.store = new Store();
    }
    ChatsService.prototype.getChats = function () {
        var _this = this;
        return this.chatsApi.getChats()
            .then(function (data) {
            _this.store.set("chats", data);
            return data;
        })
            .catch(function (err) {
            throw err;
        });
    };
    ChatsService.prototype.createChat = function (title) {
        var _this = this;
        return this.chatsApi.createChat(title)
            .then(function () { return _this.getChats(); })
            .then(function (data) {
            _this.store.set("chats", data);
            return data;
        });
    };
    return ChatsService;
}());
export { ChatsService };
//# sourceMappingURL=chats-service.js.map