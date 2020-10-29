import {METHODS} from "./HTTP";

export type Options<T> = {
    method?: METHODS,
    data?: T,
    headers?: {
        [key: string]: string
    },
    timeout?: number
}
