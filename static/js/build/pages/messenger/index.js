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
var Messenger = /** @class */ (function (_super) {
    __extends(Messenger, _super);
    function Messenger(props) {
        return _super.call(this, "div", props) || this;
    }
    Messenger.prototype.render = function () {
        return Handlebars.compile(template)({});
    };
    return Messenger;
}(Block));
export default Messenger;
var messenger = new Messenger({});
render(".app", messenger);
//# sourceMappingURL=index.js.map