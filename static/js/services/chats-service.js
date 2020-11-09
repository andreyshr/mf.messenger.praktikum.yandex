import { ChatsApi } from "../api/chats-api.js";
import { bus } from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import Store from "../modules/store/store.js";
var ChatsService = /** @class */ (function () {
    function ChatsService() {
        var _this = this;
        this.createChat = function (title) {
            return _this.chatsApi
                .createChat(title)
                .then(function () { return _this.getChats(); })
                .then(function (data) {
                _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "\u0427\u0430\u0442 \"" + title + "\" \u0441\u043E\u0437\u0434\u0430\u043D", "success");
                _this.bus.emit(EVENTS.ROOMS_UPDATE, data);
                return data;
            })
                .then(function (err) { return err; });
        };
        this.getUsers = function () {
            return _this.chatsApi
                .getUsers(_this.currentChatId)
                .then(function (data) {
                _this.bus.emit(EVENTS.USERS_UPDATE, data.map(function (user) { return ({
                    title: user.login,
                    id: user.id,
                    avatarImg: user.avatar,
                }); }));
                return data;
            })
                .catch(function (err) { return err; });
        };
        this.userAction = function (userId) {
            if (_this.dialog === "remove_user") {
                _this.removeUsers(userId);
            }
            if (_this.dialog === "add_user") {
                _this.addUsers(userId);
            }
        };
        this.addUsers = function (userId) {
            var data = {
                users: [userId],
                chatId: _this.currentChatId,
            };
            return _this.chatsApi
                .addUsers(data)
                .then(function (data) {
                _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0447\u0430\u0442", "success");
                return data;
            })
                .catch(function () {
                _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Произошла ошибка", "warning");
            });
        };
        this.removeUsers = function (userId) {
            var data = {
                users: [userId],
                chatId: _this.currentChatId,
            };
            return _this.chatsApi
                .removeUsers(data)
                .then(function () {
                if (userId === _this.user.id) {
                    _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "\u0427\u0430\u0442 \u0443\u0434\u0430\u043B\u0451\u043D", "success");
                    return _this.getChats().then(function () {
                        _this.bus.emit(EVENTS.ROUTER_REPLACE, "/messenger");
                        _this.bus.emit(EVENTS.CLOSE_DIALOG);
                    });
                }
                else {
                    _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0434\u0430\u043B\u0451\u043D \u0438\u0437 \u0447\u0430\u0442\u0430", "success");
                    return _this.getUsers();
                }
            })
                .catch(function () {
                _this.bus.emit(EVENTS.NOTIFICATION_SHOW, "Произошла ошибка", "warning");
            });
        };
        if (ChatsService.__instance) {
            return ChatsService.__instance;
        }
        this.chatsApi = new ChatsApi();
        this.store = new Store();
        this.bus = bus;
        this.bus.on(EVENTS.CREATE_CHAT, this.createChat);
        this.bus.on(EVENTS.CHAT_USER_ACTION, this.userAction);
        ChatsService.__instance = this;
    }
    Object.defineProperty(ChatsService.prototype, "currentChat", {
        get: function () {
            return this.store.get("currentChat");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsService.prototype, "currentChatId", {
        get: function () {
            return this.currentChat.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsService.prototype, "user", {
        get: function () {
            return this.store.get("user");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsService.prototype, "dialog", {
        get: function () {
            return this.store.get("dialog");
        },
        enumerable: false,
        configurable: true
    });
    ChatsService.prototype.getChats = function () {
        var _this = this;
        return this.chatsApi
            .getChats()
            .then(function (data) {
            _this.store.set("chats", data);
            return data;
        })
            .catch(function (err) {
            throw err;
        });
    };
    ChatsService.__instance = null;
    return ChatsService;
}());
export { ChatsService };
export var chatsService = new ChatsService();
//# sourceMappingURL=chats-service.js.map