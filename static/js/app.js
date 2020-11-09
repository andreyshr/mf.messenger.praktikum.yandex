// Pages
import SignInPage, { props as propsSignIn } from "./pages/signin/index.js";
import SignUpPage, { props as propsSignUp } from "./pages/signup/index.js";
import Messenger, { props as propsMessenger } from "./pages/messenger/index.js";
import MessengerChat, { props as propsMessengerChat, } from "./pages/messenger-chat/index.js";
import Profile, { props as propsProfile } from "./pages/profile/index.js";
import Page404, { props as props404Page } from "./pages/404/index.js";
import Page500, { props as props500Page } from "./pages/500/index.js";
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
    .use("/signin", SignInPage.bind(this, propsSignIn), { guest: true })
    .use("/signup", SignUpPage.bind(this, propsSignUp), { guest: true })
    .use("/messenger", Messenger.bind(this, propsMessenger), { auth: true })
    .use("/messenger/:id", MessengerChat.bind(this, propsMessengerChat), {
    auth: true,
})
    .use("/profile", Profile.bind(this, propsProfile), { auth: true })
    .use("/404", Page404.bind(this, props404Page))
    .use("/500", Page500.bind(this, props500Page))
    .start();
//# sourceMappingURL=app.js.map