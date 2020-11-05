// import AppBus from "../event-bus/app-bus.js";
// import EVENTS from "../event-bus/events.js";
var Store = /** @class */ (function () {
    function Store() {
        this._store = {};
        if (Store.__instance) {
            return Store.__instance;
        }
        Store.__instance = this;
    }
    Store.prototype.get = function (name) {
        return this._store[name];
    };
    Store.prototype.set = function (name, value) {
        this._store[name] = value;
        //bus.emit()
    };
    Store.__instance = null;
    return Store;
}());
export default Store;
//# sourceMappingURL=store.js.map