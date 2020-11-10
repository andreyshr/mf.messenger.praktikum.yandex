export function render(query, block) {
    var root = document.querySelector(query);
    var node = block.getContent();
    root === null || root === void 0 ? void 0 : root.appendChild(node);
    return root;
}
//# sourceMappingURL=render-dom.js.map