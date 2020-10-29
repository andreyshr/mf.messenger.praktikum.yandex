import {queryStringify} from "../../utils/query-stringify.js";
import { Options } from "./types";

export const HTTP_STATUSES = {
    '200': 200,
    '400': 400,
    '401': 401,
    '409': 409,
    '500': 500
}

export enum METHODS  {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

class HTTP {
    static baseUrl: string = "https://ya-praktikum.tech";
    private readonly _url: string;

    constructor(serviceUrl: string = "") {
        this._url = HTTP.baseUrl + serviceUrl;
    }

    get<T>(url: string, options: Options<T> = {}) {
        console.log(options);
        return this.request(this._url + url, {...options, method: METHODS.GET});
    }

    post<T>(url: string, options: Options<T> = {}){
        return this.request(this._url + url, {...options, method: METHODS.POST});
    }

    put<T>(url: string, options: Options<T> = {}) {
        return this.request(this._url + url, {...options, method: METHODS.PUT});
    }

    delete<T>(url: string, options: Options<T> = {}) {
        return this.request<T>(this._url + url, {...options, method: METHODS.DELETE});
    };

    request = <T>(url: string, options: Options<T>) => {
        const {method, data, headers} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.timeout = options.timeout || 5000;
            xhr.withCredentials = true;

            const _url: string = method === METHODS.GET ? url + "?" + queryStringify(data as Record<string, unknown>) : url;

            xhr.open(method as string, _url);

            if (headers) {
                Object.keys(headers).forEach((header: string) => {
                    xhr.setRequestHeader(header, headers[header]);
                })
            }

            const handleError = (err: ProgressEvent) => {
                reject(err);
            };

            xhr.onload = function() {
                if (xhr.status === HTTP_STATUSES['200']) {
                    resolve(xhr.response);
                } else {
                    reject(JSON.parse(xhr.response));
                }
            };

            xhr.onabort = handleError;
            xhr.onerror = handleError;
            xhr.ontimeout = handleError;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export const apiInstance = new HTTP('/api/v2');
export const authAPIInstance = new HTTP('/api/v2/auth');
export const profileAPIInstance = new HTTP('/api/v2/user/profile');

export default HTTP;
