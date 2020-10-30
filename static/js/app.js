// Pages
import { signInPage } from "./pages/signin/index.js";
import { signUpPage } from "./pages/signup/index.js";
import { page404 } from "./pages/404/index.js";
import { messengerChat } from "./pages/messenger/index.js";
import { messengerChat as messengerChatID } from "./pages/messenger-chat/index.js";
import { profile } from "./pages/profile/index.js";
// Modules
import { Router } from "./modules/router/router.js";
import AppBus from "./modules/event-bus/app-bus.js";
import EVENTS from "./modules/event-bus/events.js";
import Store from "./modules/store/store.js";
// Services
import { AuthService } from "./services/auth-service.js";
var router = new Router(".app");
var store = new Store();
var authService = new AuthService();
var bus = new AppBus();
bus.on(EVENTS.ROUTER_GO, function (route) { return router.go(route); });
bus.on(EVENTS.ROUTER_REPLACE, function (route) { return router.replace(route); });
router.beforeEach = function (pathname) {
    var _a, _b;
    var route = router.getRoute(pathname);
    var baseRoute = pathname === "/";
    if (route || baseRoute) {
        if ((((_a = route === null || route === void 0 ? void 0 : route.meta) === null || _a === void 0 ? void 0 : _a.guest) || baseRoute) && authService.isAuth()) {
            router.go("/messenger");
            return false;
        }
        if ((((_b = route === null || route === void 0 ? void 0 : route.meta) === null || _b === void 0 ? void 0 : _b.auth) || baseRoute) && !authService.isAuth()) {
            router.go("/signin");
            return false;
        }
        return true;
    }
    router.replace("/404");
    return false;
};
router.beforeStart = function () {
    return new Promise(function (resolve, reject) {
        authService
            .getUser()
            .then(function (data) {
            store.set("user", data);
            resolve();
        })
            .catch(function () { return reject(); });
    });
};
router
    .use("/signin", signInPage, { guest: true })
    .use("/signup", signUpPage, { guest: true })
    .use("/messenger", messengerChat, { auth: true })
    .use("/messenger/:id", messengerChatID, { auth: true })
    .use("/profile", profile, { auth: true })
    .use("/404", page404)
    .start();
//# sourceMappingURL=app.js.map