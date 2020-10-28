import {isArray} from "./isArray.js";
import {isObject} from "./isObject.js";

export function isEmpty(value: any): boolean {
    if (value instanceof Map || value instanceof Set) return !value.size;

    if (isArray(value)) return !value.length;

    if (isObject(value)) return !Object.keys(value).length;

    if (typeof value === "string") return !value.length;

    if (
        typeof value === "number" ||
        typeof value === "boolean" ||
        value === null ||
        value === undefined
    )
        return true;

    return true;
}
