var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// особенность расширений импортов описана в README.md
import { EventBus } from "./event-bus.js";
var AppBus = /** @class */ (function (_super) {
    __extends(AppBus, _super);
    function AppBus() {
        var _this = this;
        if (AppBus.__instance) {
            return AppBus.__instance;
        }
        _this = _super.call(this) || this;
        AppBus.__instance = _this;
        return _this;
    }
    AppBus.__instance = null;
    return AppBus;
}(EventBus));
export default AppBus;
//# sourceMappingURL=app-bus.js.map