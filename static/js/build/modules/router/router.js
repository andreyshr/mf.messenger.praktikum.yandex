import { Route } from "./route.js";
var Router = /** @class */ (function () {
    function Router(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    Router.prototype.use = function (pathname, block, meta) {
        var route = new Route(pathname, block, { meta: meta, rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    };
    Router.prototype.start = function () {
        var _this = this;
        this.beforeStart()
            .finally(function () {
            window.onpopstate = (function (event) {
                var _a, _b;
                _this._onRoute((_b = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.pathname);
            }).bind(_this);
            if (!_this._beforeEach(window.location.pathname))
                return;
            _this._onRoute(window.location.pathname);
        });
    };
    Router.prototype._onRoute = function (pathname) {
        var route = this.getRoute(pathname);
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        if (route) {
            this._currentRoute = route;
            route.render();
        }
    };
    Router.prototype.go = function (pathname) {
        if (!this._beforeEach(pathname))
            return;
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    };
    Router.prototype.back = function () {
        this.history.back();
    };
    Router.prototype.forward = function () {
        this.history.forward();
    };
    Router.prototype.getRoute = function (pathname) {
        return this.routes.find(function (route) { return route.match(pathname); });
    };
    Router.prototype._beforeEach = function (pathname) {
        return this.beforeEach(pathname);
    };
    return Router;
}());
export { Router };
//# sourceMappingURL=router.js.map