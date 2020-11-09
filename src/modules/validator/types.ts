const ruleValues = ["email", "required", "phone", "password"] as const;

export type ValidationRule = typeof ruleValues[number];

export type VerifiableInput = {
    name: string;
    value: string;
    rule: ValidationRule;
};

export type ValidatedInput = {
    name: string;
    status: boolean;
};
