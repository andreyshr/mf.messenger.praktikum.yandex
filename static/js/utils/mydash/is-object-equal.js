export function isObjectEqual(a, b) {
    if (!a || !b)
        return a === b;
    if (typeof a === "string" || typeof b === "string")
        return a === b;
    if (typeof a === "number" || typeof b === "number")
        return a === b;
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    return aKeys.every(function (key, i) {
        var aVal = a[key];
        var bKey = bKeys[i];
        if (bKey !== key)
            return false;
        var bVal = b[key];
        if (aVal == null || bVal == null)
            return aVal === bVal;
        if (typeof aVal === "object" && typeof bVal === "object") {
            return isObjectEqual(aVal, bVal);
        }
        return String(aVal) === String(bVal);
    });
}
//# sourceMappingURL=is-object-equal.js.map