import Block from "../block/block.js";
import { render } from "../../utils/renderDOM.js";
var Route = /** @class */ (function () {
    function Route(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    Route.prototype.regExpResultToParams = function (match, names) {
        if (names.length === 0)
            return null;
        if (!match)
            return null;
        return match
            .slice(1, match.length)
            .reduce(function (acc, value, i) {
            acc[names[i]] = decodeURIComponent(value);
            return acc;
        }, {});
    };
    Route.prototype.clean = function (s) {
        if (s instanceof RegExp)
            return s;
        return s.replace(/\/+$/, '').replace(/^\/+/, '^/');
    };
    Route.prototype.replaceDynamicURLParts = function (route) {
        var paramNames = [];
        var regexp;
        if (route instanceof RegExp) {
            regexp = route;
        }
        else {
            regexp = new RegExp(route.replace(Route.PARAMETER_REGEXP, function (name) {
                paramNames.push(name);
                return Route.REPLACE_VARIABLE_REGEXP;
            })
                .replace(Route.WILDCARD_REGEXP, Route.REPLACE_WILDCARD) + Route.FOLLOWED_BY_SLASH_REGEXP, Route.MATCH_REGEXP_FLAGS);
        }
        return { regexp: regexp, paramNames: paramNames };
    };
    Route.prototype.findMatchedRoutes = function (url) {
        var _a = this.replaceDynamicURLParts(this.clean(this._pathname)), regexp = _a.regexp, paramNames = _a.paramNames;
        var match = url.replace(/^\/+/, '/').match(regexp);
        var params = this.regExpResultToParams(match, paramNames);
        return match ? { match: match, pathname: this._pathname, params: params } : false;
    };
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
    Route.prototype.match = function (url) {
        var route = this.findMatchedRoutes(url);
        return !!route;
    };
    Route.prototype.render = function () {
        var _a;
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            Block.hydrate();
            this._block.show();
            return;
        }
        (_a = this._block) === null || _a === void 0 ? void 0 : _a.show();
    };
    Route.PARAMETER_REGEXP = /([:*])(\w+)/g;
    Route.WILDCARD_REGEXP = /\*/g;
    Route.REPLACE_VARIABLE_REGEXP = '([^\/]+)';
    Route.REPLACE_WILDCARD = '(?:.*)';
    Route.FOLLOWED_BY_SLASH_REGEXP = '(?:\/$|$)';
    Route.MATCH_REGEXP_FLAGS = '';
    return Route;
}());
export { Route };
//# sourceMappingURL=route.js.map