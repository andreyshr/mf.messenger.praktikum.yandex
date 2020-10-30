import { isEqual } from "../../utils/mydash/isEqual.js";
import Block from "../block/block.js";
import { render } from "../../utils/renderDOM.js";
var Route = /** @class */ (function () {
    function Route(pathname, view, props) {
        this._pathname = pathname;
        this._blockView = view;
        this._block = null;
        this._props = props;
    }
    Object.defineProperty(Route.prototype, "meta", {
        get: function () {
            return this._props.meta;
        },
        enumerable: false,
        configurable: true
    });
    Route.prototype.navigate = function (pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    };
    Route.prototype.leave = function () {
        if (this._block) {
            this._block.hide();
        }
    };
    Route.prototype.match = function (pathname) {
        return isEqual(pathname, this._pathname);
    };
    Route.prototype.render = function () {
        if (!this._block) {
            this._block = this._blockView;
            render(this._props.rootQuery, this._block);
            Block.hydrate();
            this._block.show();
            return;
        }
        this._block.show();
    };
    return Route;
}());
export { Route };
//# sourceMappingURL=route.js.map