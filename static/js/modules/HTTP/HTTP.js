var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { queryStringify } from "../../utils/query-stringify.js";
export var HTTP_STATUSES = {
    "200": 200,
    "400": 400,
    "401": 401,
    "409": 409,
    "500": 500,
};
export var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["PUT"] = "PUT";
    METHODS["POST"] = "POST";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
var HTTP = /** @class */ (function () {
    function HTTP(serviceUrl, baseUrl) {
        if (serviceUrl === void 0) { serviceUrl = ""; }
        if (baseUrl === void 0) { baseUrl = "https://ya-praktikum.tech"; }
        this.request = function (url, options) {
            var method = options.method, data = options.data, headers = options.headers;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.timeout = options.timeout || 5000;
                xhr.withCredentials = true;
                var _url = method === METHODS.GET
                    ? url +
                        "?" +
                        queryStringify(data)
                    : url;
                xhr.open(method, _url);
                if (!(data instanceof FormData)) {
                    xhr.setRequestHeader("Content-Type", "application/json");
                }
                if (headers) {
                    Object.keys(headers).forEach(function (header) {
                        xhr.setRequestHeader(header, headers[header]);
                    });
                }
                var handleError = function (err) {
                    reject(err);
                };
                xhr.onload = function () {
                    if (xhr.status === HTTP_STATUSES["200"]) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr);
                    }
                };
                xhr.onabort = handleError;
                xhr.onerror = handleError;
                xhr.ontimeout = handleError;
                if (method === METHODS.GET || !data) {
                    xhr.send();
                }
                else if (data instanceof FormData) {
                    xhr.send(data);
                }
                else {
                    xhr.send(JSON.stringify(data));
                }
            });
        };
        this._baseUrl = baseUrl;
        this._url = this._baseUrl + serviceUrl;
    }
    HTTP.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(this._url + url, __assign(__assign({}, options), { method: METHODS.GET }));
    };
    HTTP.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(this._url + url, __assign(__assign({}, options), { method: METHODS.POST }));
    };
    HTTP.prototype.put = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(this._url + url, __assign(__assign({}, options), { method: METHODS.PUT }));
    };
    HTTP.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(this._url + url, __assign(__assign({}, options), { method: METHODS.DELETE }));
    };
    return HTTP;
}());
export { HTTP };
export var apiInstance = new HTTP("/api/v2");
export var authAPIInstance = new HTTP("/api/v2/auth");
export var profileAPIInstance = new HTTP("/api/v2/user/profile");
export var chatsAPIInstance = new HTTP("/api/v2/chats");
export var userAPIInstance = new HTTP("/api/v2/user");
export default HTTP;
//# sourceMappingURL=HTTP.js.map