const ruleValues = ["email", "required", "phone", "password"] as const

type ValidationRule = typeof ruleValues[number]

type VerifiableInput = {
    name: string,
    value: any,
    rule: ValidationRule
}
