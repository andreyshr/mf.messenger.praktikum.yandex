export function isObjectEqual(a: any, b: any): boolean {
    if (!a || !b) return a === b;

    if (typeof a === "string" || typeof b === "string") return a === b;

    if (typeof a === "number" || typeof b === "number") return a === b;

    const aKeys = Object.keys(a).sort();
    const bKeys = Object.keys(b).sort();

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    return aKeys.every((key, i) => {
        const aVal = a[key];
        const bKey = bKeys[i];
        if (bKey !== key) return false;
        const bVal = b[key];

        if (aVal == null || bVal == null) return aVal === bVal;

        if (typeof aVal === "object" && typeof bVal === "object") {
            return isObjectEqual(aVal, bVal);
        }
        return String(aVal) === String(bVal);
    });
}
