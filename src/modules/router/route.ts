import {isEqual} from "../../utils/mydash/isEqual.js";
import Block from "../block/block.js";
import {render} from "../../utils/renderDOM.js";
import {Nullable} from "../../utils/utility-type";


export class Route {
    _pathname: string;
    _blockClass: Block;
    _block: Nullable<Block>;
    _props: any;

    constructor(pathname: string, view: Block, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
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

    match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            // @ts-ignore
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block as Block);
            return;
        }

        this._block.show();
    }
}
