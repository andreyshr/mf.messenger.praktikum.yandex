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
var SidebarHeader = /** @class */ (function (_super) {
    __extends(SidebarHeader, _super);
    function SidebarHeader(props) {
        var _this = _super.call(this, "header", props) || this;
        Block._instances.push(_this);
        return _this;
    }
    SidebarHeader.prototype.render = function () {
        return Handlebars.compile(template)(this.props);
    };
    return SidebarHeader;
}(Block));
export default SidebarHeader;
//# sourceMappingURL=SidebarHeader.js.map