import Block from "../modules/block/block";
import {Nullable} from "./utility-type";

export function render(query: string, block: Block): Nullable<Node> {
    const root = document.querySelector(query) as Node;
    const node = block.getContent() as Node;

    root?.appendChild(node);
    return root;
}
