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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(tag, props) {
        var _this = _super.call(this, tag, props) || this;
        Block._instances.push(_this);
        return _this;
    }
    Button.prototype.render = function () {
        return Handlebars.compile(template)(this.props);
    };
    return Button;
}(Block));
export default Button;
//# sourceMappingURL=Button.js.map