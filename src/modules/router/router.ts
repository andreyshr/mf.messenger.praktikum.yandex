import {Route} from "./route.js";
import Block from "../block/block";
import {Nullable} from "../../utils/utility-type";
import {createUniqID} from "../../utils/create-uniq-id.js";

export class Router {
    static __instance: Router;

    private _currentRoute: Nullable<Route>;
    private readonly _rootQuery: string;

    routes: Route[];
    history: History;

    beforeEach: (pathname: string) => boolean;
    beforeStart: () => Promise<void>

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: Block, meta?: any): Router {
        const route = new Route(pathname, block, {meta, rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = ((event: any) => {
            if (!this._beforeEach(event.currentTarget?.location?.pathname)) return;

            this._onRoute(event.currentTarget?.location?.pathname);
        }).bind(this);

        this.beforeStart()
            .finally(() => {
                if (!this._beforeEach(window.location.pathname)) return;

                this._onRoute(window.location.pathname);
            })
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        if (route) {
            this._currentRoute = route;
            route.render();
        }
    }

    go(pathname: string) {
        if (!this._beforeEach(pathname)) return;

        this.history.pushState({id: createUniqID()}, "", pathname);

        this._onRoute(pathname);
    }

    replace(pathname: string) {
        if (!this._beforeEach(pathname)) return;

        this.history.replaceState({id: createUniqID()}, "", pathname);

        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find((route: Route): boolean => route.match(pathname));
    }

    _beforeEach(pathname: string): boolean {
        return this.beforeEach(pathname);
    }
}
