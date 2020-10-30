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
    '200': 200,
    '400': 400,
    '401': 401,
    '409': 409,
    '500': 500
};
export var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["PUT"] = "PUT";
    METHODS["POST"] = "POST";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
var HTTP = /** @class */ (function () {
    function HTTP(serviceUrl) {
        if (serviceUrl === void 0) { serviceUrl = ""; }
        this.request = function (url, options) {
            var method = options.method, data = options.data, headers = options.headers;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.timeout = options.timeout || 5000;
                xhr.withCredentials = true;
                var _url = method === METHODS.GET ? url + "?" + queryStringify(data) : url;
                xhr.open(method, _url);
                if (headers) {
                    Object.keys(headers).forEach(function (header) {
                        xhr.setRequestHeader(header, headers[header]);
                    });
                }
                var handleError = function (err) {
                    reject(err);
                };
                xhr.onload = function () {
                    if (xhr.status === HTTP_STATUSES['200']) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(JSON.parse(xhr.response));
                    }
                };
                xhr.onabort = handleError;
                xhr.onerror = handleError;
                xhr.ontimeout = handleError;
                if (method === METHODS.GET || !data) {
                    xhr.send();
                }
                else {
                    xhr.send(JSON.stringify(data));
                }
            });
        };
        this._url = HTTP.baseUrl + serviceUrl;
    }
    HTTP.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        console.log(options);
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
    ;
    HTTP.baseUrl = "https://ya-praktikum.tech";
    return HTTP;
}());
export var apiInstance = new HTTP('/api/v2');
export var authAPIInstance = new HTTP('/api/v2/auth');
export var profileAPIInstance = new HTTP('/api/v2/user/profile');
export default HTTP;
//# sourceMappingURL=HTTP.js.map