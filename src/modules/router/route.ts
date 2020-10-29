import {isEqual} from "../../utils/mydash/isEqual.js";
import Block from "../block/block.js";
import {render} from "../../utils/renderDOM.js";
import {Nullable} from "../../utils/utility-type";


export class Route {
    _pathname: string;
    _blockView: Block;
    _block: Nullable<Block>;
    _props: any;

    constructor(pathname: string, view: Block, props: any) {
        this._pathname = pathname;
        this._blockView = view;
        this._block = null;
        this._props = props;
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

    match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = this._blockView;

            render(this._props.rootQuery, this._block);

            Block.hydrate();

            return;
        }

        this._block.show();
    }
}
