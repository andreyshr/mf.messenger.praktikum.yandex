import {VerifiableInput, ValidatedInput} from "./types";

export class Validator {
    input: VerifiableInput

    required(value: string): boolean {
        if (!value) return false;
        return value.length > 0;
    }

    email(value: string): boolean {
        const regExp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gi;
        return regExp.test(value);
    }

    phone(value: string): boolean {
        const regExp = /(\+\d{1})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s-.]?\d{4}/gi;
        return regExp.test(value);
    }

    password(value: string): boolean {
        const regExp = /^([a-zA-Z0-9]{6,})$/gi;
        return regExp.test(value);
    }

    validate(input: VerifiableInput): ValidatedInput {
        const {name, value, rule} = input;
        const validateFn = this[rule];

        return {
            name,
            status: validateFn(value)
        };
    }
}
