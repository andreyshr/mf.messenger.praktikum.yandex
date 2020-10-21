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
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";
import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, "div", props) || this;
        _this.showError = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var input = inputs.find(function (input) { return input.name === _this.props.name; });
            if (!input)
                return;
            var node = document.querySelector(".error-message[data-name=" + input.name + "]");
            if (input.status) {
                if (node)
                    node.classList.remove('error-message--active');
            }
            else {
                if (node)
                    node.classList.add('error-message--active');
            }
        };
        _this.bus = new AppBus();
        _this.bus.on(EVENTS.FORM_INVALID, _this.showError);
        Block._instances.push(_this);
        return _this;
    }
    Input.prototype.render = function () {
        return Handlebars.compile(this.props.template === "profile" ? templateProfile : templateMain)(this.props);
    };
    return Input;
}(Block));
export default Input;
//# sourceMappingURL=Input.js.map