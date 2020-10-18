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
import { render } from "../../utils/renderDOM.js";
import "../../utils/handlebars-helpers.js";
var Page500 = /** @class */ (function (_super) {
    __extends(Page500, _super);
    function Page500(props) {
        return _super.call(this, "div", props) || this;
    }
    Page500.prototype.render = function () {
        return Handlebars.compile(template)({});
    };
    return Page500;
}(Block));
export default Page500;
var page500 = new Page500({});
render(".app", page500);
//# sourceMappingURL=index.js.map