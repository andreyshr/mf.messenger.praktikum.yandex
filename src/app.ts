// Pages
import SignInPage, { props as propsSignIn } from "./pages/signin/index.js";
import SignUpPage, { props as propsSignUp } from "./pages/signup/index.js";
import Messenger, { props as propsMessenger } from "./pages/messenger/index.js";
import MessengerChat, {
    props as propsMessengerChat,
} from "./pages/messenger-chat/index.js";
import Profile, { props as propsProfile } from "./pages/profile/index.js";
import Page404, { props as props404Page } from "./pages/404/index.js";
import Page500, { props as props500Page } from "./pages/500/index.js";

// Modules
import { Router } from "./modules/router/router.js";
import { bus } from "./modules/event-bus/app-bus.js";
import EVENTS from "./modules/event-bus/events.js";
import Store from "./modules/store/store.js";

// Services
import { authService } from "./services/auth-service.js";

const router = new Router(".app");
const store = new Store();

bus.on(EVENTS.ROUTER_GO, (route) => router.go(route));
bus.on(EVENTS.ROUTER_REPLACE, (route) => router.replace(route));

router.validatePath = function (pathname: string): boolean {
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
};

router.beforeStart = function (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        authService
            .getUser()
            .then((data) => {
                store.set("user", data);
                resolve();
            })
            .catch(reject);
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
