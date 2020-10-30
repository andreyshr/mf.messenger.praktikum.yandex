// Pages
import {signInPage} from "./pages/signin/index.js";
import {signUpPage} from "./pages/signup/index.js";
import {page404} from "./pages/404/index.js";
import {messengerChat} from "./pages/messenger/index.js";
import {messengerChat as messengerChatID} from "./pages/messenger-chat/index.js";
import {profile} from "./pages/profile/index.js";

// Modules
import {Router} from "./modules/router/router.js";
import AppBus from "./modules/event-bus/app-bus.js";
import EVENTS from "./modules/event-bus/events.js";
import Store from "./modules/store/store.js";

// Services
import {AuthService} from "./services/auth-service.js";

const router = new Router(".app");
const store = new Store();
const authService = new AuthService();

const bus = new AppBus();
bus.on(EVENTS.ROUTER_GO, (route) => router.go(route));
bus.on(EVENTS.ROUTER_REPLACE, (route) => router.replace(route));

router.beforeEach = function (pathname: string): boolean {
    const route = router.getRoute(pathname);
    const baseRoute = pathname === "/";

    if (route || baseRoute) {
        if ((route?.meta?.guest || baseRoute) && authService.isAuth()) {
            router.go("/messenger");
            return false;
        }
        if ((route?.meta?.auth || baseRoute) && !authService.isAuth()) {
            router.go("/signin");
            return false;
        }
        return true;
    }

    router.replace("/404");
    return false;
}

router.beforeStart = function (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        authService
            .getUser()
            .then(data => {
                store.set("user", data);
                resolve();
            })
            .catch(() => reject())
    })
}

router
    .use("/signin", signInPage, {guest: true})
    .use("/signup", signUpPage, {guest: true})
    .use("/messenger", messengerChat, {auth: true})
    .use("/messenger/:id", messengerChatID, {auth: true})
    .use("/profile", profile, {auth: true})
    .use("/404", page404)
    .start();
