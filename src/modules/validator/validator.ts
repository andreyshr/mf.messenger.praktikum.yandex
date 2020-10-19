import {IVerifiableInput} from "./types.js";

export class Validator {
    input: IVerifiableInput

    required(value: any) {
        if (!value) return false;
        return value.length > 0;
    }

    email(value: any) {
        const regExp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gi;
        return regExp.test(value);
    }

    phone(value: any) {
        const regExp = /(\+\d{1})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s-.]?\d{4}/gi;
        return regExp.test(value);
    }

    password(value: any) {
        const regExp = /^([a-zA-Z0-9]{6,})$/gi;
        return regExp.test(value);
    }

    validate(input: IVerifiableInput) {
        const {name, value, rule} = input;
        const validateFn = this[rule];
        return {
            name,
            status: validateFn(value)
        };
    }
}
