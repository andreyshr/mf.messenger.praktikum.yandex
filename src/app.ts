// Pages
import SignInPage, { props as propsSignIn } from "./pages/signin/index";
import SignUpPage, { props as propsSignUp } from "./pages/signup/index";
import Messenger, { props as propsMessenger } from "./pages/messenger/index";
import MessengerChat, {
    props as propsMessengerChat,
} from "./pages/messenger-chat/index";
import Profile, { props as propsProfile } from "./pages/profile/index";
import Page404, { props as props404Page } from "./pages/404/index";
import Page500, { props as props500Page } from "./pages/500/index";

// Modules
import { Router } from "./modules/router/router";
import { bus } from "./modules/event-bus/app-bus";
import EVENTS from "./modules/event-bus/events";
import Store from "./modules/store/store";

// Services
import { authService } from "./services/auth-service";

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
