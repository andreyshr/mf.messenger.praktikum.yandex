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
export var props = {
    title: "404",
    description: "Не туда попали",
    linkTitle: "Назад к чатам",
    linkHref: "/messenger",
};
var Page404 = /** @class */ (function (_super) {
    __extends(Page404, _super);
    function Page404(props) {
        return _super.call(this, "div", props) || this;
    }
    Page404.prototype.render = function () {
        return Handlebars.compile(template)(this.props);
    };
    return Page404;
}(Block));
export default Page404;
//# sourceMappingURL=index.js.map