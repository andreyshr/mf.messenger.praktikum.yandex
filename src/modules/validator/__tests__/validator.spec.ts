import { Validator } from "../validator";
import { VerifiableInput } from "../types";

describe("Validator", function () {
    const validator = new Validator();

    it("should validate correct email", function () {
        const input = {
            name: "email",
            value: "test@test.com",
            rule: "email",
        };

        expect(validator.validate(input as VerifiableInput)).toEqual({
            name: "email",
            status: true,
        });
    });

    it("should validate incorrect email", function () {
        const input = {
            name: "email",
            value: "test@test",
            rule: "email",
        };

        expect(validator.validate(input as VerifiableInput)).toEqual({
            name: "email",
            status: false,
        });
    });

    it("should validate correct password", function () {
        const input = {
            name: "password",
            value: "password12",
            rule: "password",
        };

        expect(validator.validate(input as VerifiableInput)).toEqual({
            name: "password",
            status: true,
        });
    });

    it("should validate incorrect password", function () {
        const input = {
            name: "password",
            value: "пароль",
            rule: "password",
        };

        expect(validator.validate(input as VerifiableInput)).toEqual({
            name: "password",
            status: false,
        });
    });

    it("should validate correct required value", function () {
        const input = {
            name: "prop",
            value: "p",
            rule: "required",
        };

        expect(validator.validate(input as VerifiableInput)).toEqual({
            name: "prop",
            status: true,
        });
    });

    it("should validate incorrect required value", function () {
        const input = {
            name: "prop",
            value: "",
            rule: "required",
        };

        expect(validator.validate(input as VerifiableInput)).toEqual({
            name: "prop",
            status: false,
        });
    });
});
