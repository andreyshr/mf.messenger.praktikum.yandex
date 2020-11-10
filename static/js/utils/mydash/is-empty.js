import { isArray } from "./is-array.js";
import { isObject } from "./is-object.js";
export function isEmpty(value) {
    if (value instanceof Map || value instanceof Set)
        return !value.size;
    if (isArray(value))
        return !value.length;
    if (isObject(value))
        return !Object.keys(value).length;
    if (typeof value === "string")
        return !value.length;
    if (typeof value === "number" ||
        typeof value === "boolean" ||
        value === null ||
        value === undefined)
        return true;
    return true;
}
//# sourceMappingURL=is-empty.js.map