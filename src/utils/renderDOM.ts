import Block from "../modules/block/block";

export function render(query: string, block: Block): Node | null {
    const root = document.querySelector(query) as Node;
    const node = block.getContent() as Node;

    root?.appendChild(node);
    return root;
}
