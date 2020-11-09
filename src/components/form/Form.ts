import Block from "../../modules/block/block.js";
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";

import { bus } from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import { Validator } from "../../modules/validator/validator.js";
import { authService } from "../../services/auth-service.js";
import { profileService } from "../../services/profile-service.js";

import { Props } from "../../modules/block/types";
import { PropsInput } from "../input/types";
import { VerifiableInput, ValidatedInput } from "../../modules/validator/types";

import Store from "../../modules/store/store.js";

export default class Form extends Block {
    state: any;
    validator: Validator;
    store: Store;

    constructor(props: Props) {
        super("form", props);

        this.state = {
            inputs: this.props.inputs.reduce(this.createStateInputs, {}),
            required: this.props.inputs.reduce(this.createStateRequired, {}),
            action: this.props.action,
        };

        this.store = new Store();

        bus.on(
            EVENTS.FORM_INPUT,
            (name: string, value: string, action: string): void => {
                if (this.state.action !== action) return;

                this.state.inputs[name] = value;
                const errors: ValidatedInput[] = [
                    this.validator.validate(this.createVerifiableInput(name)),
                ];

                bus.emit(EVENTS.FORM_INVALID, ...errors);
            }
        );
        bus.on(EVENTS.FORM_VALIDATE, (name: string, action: string): void => {
            if (this.state.action !== action) return;

            const errors: ValidatedInput[] = [
                this.validator.validate(this.createVerifiableInput(name)),
            ];

            bus.emit(EVENTS.FORM_INVALID, ...errors);
        });

        this.validator = new Validator();

        Block._instances.push(this);
    }

    createStateInputs(acc: PropsInput, input: Block) {
        return {
            ...acc,
            [input.props.name]: input.props.value || null,
        };
    }

    createStateRequired(acc: PropsInput, input: Block) {
        return {
            ...acc,
            [input.props.name]: input.props.required,
        };
    }

    createVerifiableInput(name: string): VerifiableInput {
        return {
            name: name,
            value: this.state.inputs[name],
            rule: this.state.required[name],
        };
    }

    onSubmit(evt: Event) {
        evt.preventDefault();
        const errors = Object.keys(this.state.inputs).map(
            (name: string): ValidatedInput =>
                this.validator.validate(this.createVerifiableInput(name))
        );

        bus.emit(EVENTS.FORM_INVALID, ...errors);

        if (errors.every((e) => e.status)) {
            if (this.props.action === "signin") {
                const { login, password } = this.state.inputs;
                authService
                    .signin(login, password)
                    .catch((e) => console.log(e));
            }
            if (this.props.action === "signup") {
                authService
                    .signup(this.state.inputs)
                    .catch((e) => console.log(e));
            }
            if (this.props.action === "profile") {
                profileService
                    .updateProfile(this.state.inputs)
                    .catch((e) => console.log(e));
            }
        }
    }

    render() {
        return Handlebars.compile(
            this.props.template === "profile" ? templateProfile : templateMain
        )({
            className: this.props.className,
            title: this.props.title,
            inputs: this.props.inputs.map((input: Block) =>
                input.renderToString()
            ),
            buttons: this.props.buttons.map((button: Block) =>
                button.renderToString()
            ),
            avatar:
                this.props.template === "profile"
                    ? this.props.avatar.renderToString()
                    : "",
            avatarLoadButton:
                this.props.template === "profile"
                    ? this.props.avatarLoadButton.renderToString()
                    : "",
        });
    }
}
