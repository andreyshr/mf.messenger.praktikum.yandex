import Block from "../block/block";
import { Route } from "./route";
import { createUniqID } from "../../utils/create-uniq-id";

import { Nullable } from "../../utils/utility-type";
import { Constructable } from "./types";

export class Router {
    static __instance: Router;

    private _currentRoute: Nullable<Route>;
    private readonly _rootQuery: string;

    routes: Route[];
    history: History;

    _routerLink: string;

    constructor(rootQuery: string, routerLink: string = ".router-link") {
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

    attachEvent() {
        const fn = (event: Event) => {
            if (!(event.target as HTMLElement).closest(this._routerLink)) {
                return;
            }

            event.preventDefault();

            let el = event.target as HTMLElement;
            while (el.tagName !== "A") {
                el = <HTMLElement>el.parentElement;
            }

            this.go(`${el?.getAttribute("href")}`);
        };

        document.documentElement.addEventListener("click", fn);
    }

    use(pathname: string, block: Constructable<Block>, meta?: any): Router {
        const route = new Route(pathname, block, {
            meta,
            rootQuery: this._rootQuery,
        });
        this.routes.push(route);
        return this;
    }

    start() {
        this.attachEvent();

        window.onpopstate = ((event: any) => {
            if (!this._validatePath(event.currentTarget?.location?.pathname))
                return;

            this._onRoute(event.currentTarget?.location?.pathname);
        }).bind(this);

        return this.beforeStart().finally(() => {
            if (!this._validatePath(window.location.pathname)) return;

            this._onRoute(window.location.pathname);
        });
    }

    private _onRoute(pathname: string) {
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
        if (!this._validatePath(pathname)) return;

        this.history.pushState({ id: createUniqID() }, "", pathname);

        this._onRoute(pathname);
    }

    replace(pathname: string) {
        if (!this._validatePath(pathname)) return;

        this.history.replaceState({ id: createUniqID() }, "", pathname);

        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string): Nullable<Route> {
        return (
            this.routes.find((route: Route): boolean =>
                route.match(pathname)
            ) || null
        );
    }

    private _validatePath(pathname: string): boolean {
        return this.validatePath(pathname);
    }

    validatePath(pathname: string): boolean {
        return !!pathname;
    }

    beforeStart() {
        return Promise.resolve();
    }
}
