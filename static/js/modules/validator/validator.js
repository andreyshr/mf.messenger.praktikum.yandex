var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.required = function (value) {
        if (!value)
            return false;
        return value.length > 0;
    };
    Validator.prototype.email = function (value) {
        var regExp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gi;
        return regExp.test(value);
    };
    Validator.prototype.phone = function (value) {
        var regExp = /(\+\d{1})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s-.]?\d{4}/gi;
        return regExp.test(value);
    };
    Validator.prototype.password = function (value) {
        var regExp = /^([a-zA-Z0-9]{6,})$/gi;
        return regExp.test(value);
    };
    Validator.prototype.validate = function (input) {
        var name = input.name, value = input.value, rule = input.rule;
        var validateFn = this[rule];
        return {
            name: name,
            status: validateFn(value),
        };
    };
    return Validator;
}());
export { Validator };
//# sourceMappingURL=validator.js.map