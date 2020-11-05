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
import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var bus = new AppBus();
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.showNotification = function (message, type) {
            _this.setProps({
                message: message,
                type: type
            });
            _this.show();
            setTimeout(function () {
                _this.hide();
            }, 3500);
        };
        bus.on(EVENTS.NOTIFICATION_SHOW, _this.showNotification);
        Block._instances.push(_this);
        return _this;
    }
    Notification.prototype.componentMounted = function () {
        this.hide();
    };
    Notification.prototype.render = function () {
        return Handlebars.compile(template)(this.props);
    };
    return Notification;
}(Block));
export default Notification;
//# sourceMappingURL=Notification.js.map