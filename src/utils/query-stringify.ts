import { isArray } from "./mydash/isArray.js";
import { isObject } from "./mydash/isObject.js";
import { isEmpty } from "./mydash/isEmpty.js";

type StringIndexed = Record<string, unknown>;

type Pair = [string, string];

type Pairs = Pair[];

function createPair(key: string, value: string): Pair {
    return [key, value];
}

function createPairsFromArray(arr: [], key: string): Pairs {
    return <Pairs>arr.map((el: any, i: number) => {
        if (isObject(arr[i]) && !isEmpty(arr[i])) {
            return createPairsFromObject(arr[i], `${key}[${i}]`).flat();
        }
        return createPair(`${key}[${i}]`, el);
    });
}

function createPairsFromObject(obj: StringIndexed, key: string): Pairs {
    const result: Pairs = [];

    Object.keys(obj).forEach((k: string): void => {
        if (isObject(obj[k]) && !isEmpty(obj[k])) {
            result.push(
                ...result,
                ...createPairsFromObject(
                    obj[k] as StringIndexed,
                    `${key}[${k}]`
                )
            );
        } else {
            result.push(createPair(`${key}[${k}]`, obj[k] as string));
        }
    });

    return result;
}

export function queryStringify(data: StringIndexed): string | never {
    if (!isObject(data)) throw new Error("input must be an object");

    if (isEmpty(data)) return "";

    let result: Pairs = [];

    Object.keys(data).forEach((key: string) => {
        if (isArray(data[key]) && !isEmpty(data[key])) {
            result = [...result, ...createPairsFromArray(data[key] as [], key)];
        } else if (isObject(data[key]) && !isEmpty(data[key])) {
            result = [
                ...result,
                ...createPairsFromObject(data[key] as StringIndexed, key),
            ];
        } else {
            result.push(createPair(key, data[key] as string));
        }
    });

    return result.map((el: Pair): string => `${el[0]}=${el[1]}`).join("&");
}
