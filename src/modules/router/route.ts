import Block from "../block/block";
import { render } from "../../utils/render-dom";
import { Nullable } from "../../utils/utility-type";
import { Constructable, RouteProps } from "./types";

export class Route {
    static PARAMETER_REGEXP = /([:*])(\w+)/g;
    static WILDCARD_REGEXP = /\*/g;
    static REPLACE_VARIABLE_REGEXP = "([^/]+)";
    static REPLACE_WILDCARD = "(?:.*)";
    static FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)";
    static MATCH_REGEXP_FLAGS = "";

    _pathname: string;
    _blockClass: Constructable<Block>;
    _block: Nullable<Block>;
    _props: RouteProps;

    constructor(
        pathname: string,
        view: Constructable<Block>,
        props: RouteProps
    ) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    regExpResultToParams(match: RegExpMatchArray | null, names: string[]) {
        if (names.length === 0) return null;
        if (!match) return null;
        return match
            .slice(1, match.length)
            .reduce((acc: Record<string, string>, value: string, i: number) => {
                acc[names[i]] = decodeURIComponent(value);
                return acc;
            }, {});
    }

    clean(s: RegExp | string): RegExp | string {
        if (s instanceof RegExp) return s;
        return s.replace(/\/+$/, "").replace(/^\/+/, "^/");
    }

    replaceDynamicURLParts(route: RegExp | string) {
        const paramNames: string[] = [];
        let regexp: RegExp | string;

        if (route instanceof RegExp) {
            regexp = route;
        } else {
            regexp = new RegExp(
                route
                    .replace(Route.PARAMETER_REGEXP, function (name: string) {
                        paramNames.push(name);
                        return Route.REPLACE_VARIABLE_REGEXP;
                    })
                    .replace(Route.WILDCARD_REGEXP, Route.REPLACE_WILDCARD) +
                    Route.FOLLOWED_BY_SLASH_REGEXP,
                Route.MATCH_REGEXP_FLAGS
            );
        }
        return { regexp, paramNames };
    }

    findMatchedRoutes(url: string) {
        const { regexp, paramNames } = this.replaceDynamicURLParts(
            this.clean(this._pathname)
        );
        const match = url.replace(/^\/+/, "/").match(regexp);
        const params = this.regExpResultToParams(match, paramNames);

        return match ? { match, pathname: this._pathname, params } : false;
    }

    get meta(): Record<string, unknown> {
        return this._props.meta;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(url: string): boolean {
        const route = this.findMatchedRoutes(url);
        return !!route;
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();

            render(this._props.rootQuery, this._block as Block);

            Block.hydrate();

            this._block.show();

            return;
        }

        this._block?.show();
    }
}
