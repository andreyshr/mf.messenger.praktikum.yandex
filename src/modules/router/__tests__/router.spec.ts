import {Router} from "../router";
import Block from "../../block/block";
import {Props} from "../../block/types";

beforeAll(() => {
    const _location = window.location;
    // @ts-ignore
    delete window.location;
    window.location = {
        ..._location,
        pathname: "/component"
    }
});

describe("Router", function() {
    class Component extends Block {
        constructor(props: Props) {
            super("div", props);
        }

        render() {
            return ""
        }
    }


    it("should add route to routes array", function() {
        const router = new Router(".app");
        router.use('/component', Component);

        expect(router.routes[0]["_pathname"]).toEqual('/component');
        expect(router.routes[0]["_blockClass"]).toEqual(Component);
        expect(router.routes[0]["_block"]).toBeNull();
        expect(router.routes[0]["_props"]).toEqual({ meta: undefined, rootQuery: '.app' });
    });

    it("should render block on start", async () => {
        const router = new Router(".app");
        router.use('/component', Component);

        await router.start();
        expect(router.routes[0]["_block"] instanceof Block).toBeTruthy();
    });

    it("should attach event for router-link on start", async () => {
        const router = new Router(".app");
        router.use('/component', Component);
        router.attachEvent = jest.fn();

        await router.start();
        expect(router.attachEvent).toHaveBeenCalled();
    });

    it("should go to path", async () => {
        const router = new Router(".app");
        router.use('/component', Component);
        router.history.pushState = jest.fn();

        await router.start();

        router.go("/component");
        expect(router.history.pushState).toHaveBeenCalled();
    });

    it("should go back", async () => {
        const router = new Router(".app");
        router.use('/component', Component);
        router.history.back = jest.fn();

        await router.start();

        router.back();
        expect(router.history.back).toHaveBeenCalled();
    });

    it("should go forward", async () => {
        const router = new Router(".app");
        router.use('/component', Component);
        router.history.forward = jest.fn();

        await router.start();

        router.forward();
        expect(router.history.forward).toHaveBeenCalled();
    });
});
