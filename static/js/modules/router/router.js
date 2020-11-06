import { Route } from "./route.js";
import { createUniqID } from "../../utils/create-uniq-id.js";
var Router = /** @class */ (function () {
    function Router(rootQuery, routerLink) {
        if (routerLink === void 0) { routerLink = ".router-link"; }
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        this._routerLink = routerLink;
        Router.__instance = this;
    }
    Router.prototype.attachEvent = function () {
        var _this = this;
        var fn = function (event) {
            if (!event.target.closest(_this._routerLink)) {
                return;
            }
            event.preventDefault();
            var el = event.target;
            while (el.tagName !== "A") {
                el = el.parentElement;
            }
            _this.go("" + (el === null || el === void 0 ? void 0 : el.getAttribute("href")));
        };
        document.documentElement.addEventListener("click", fn);
    };
    Router.prototype.use = function (pathname, block, meta) {
        var route = new Route(pathname, block, { meta: meta, rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    };
    Router.prototype.start = function () {
        var _this = this;
        this.attachEvent();
        window.onpopstate = (function (event) {
            var _a, _b, _c, _d;
            if (!_this._beforeEach((_b = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.pathname))
                return;
            _this._onRoute((_d = (_c = event.currentTarget) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.pathname);
        }).bind(this);
        return this.beforeStart()
            .finally(function () {
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
        this.history.pushState({ id: createUniqID() }, "", pathname);
        this._onRoute(pathname);
    };
    Router.prototype.replace = function (pathname) {
        if (!this._beforeEach(pathname))
            return;
        this.history.replaceState({ id: createUniqID() }, "", pathname);
        this._onRoute(pathname);
    };
    Router.prototype.back = function () {
        this.history.back();
    };
    Router.prototype.forward = function () {
        this.history.forward();
    };
    Router.prototype.getRoute = function (pathname) {
        return this.routes.find(function (route) { return route.match(pathname); }) || null;
    };
    Router.prototype._beforeEach = function (pathname) {
        return this.beforeEach(pathname);
    };
    Router.prototype.beforeEach = function (pathname) {
        return !!pathname;
    };
    Router.prototype.beforeStart = function () {
        return Promise.resolve();
    };
    return Router;
}());
export { Router };
//# sourceMappingURL=router.js.map