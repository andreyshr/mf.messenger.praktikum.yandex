import {RULES} from "./rules.js";

export interface IVerifiableInput {
    name: string,
    value: any,
    rule: RULES
}
