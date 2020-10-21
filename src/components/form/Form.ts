import Block from "../../modules/block/block.js";
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import { Validator } from "../../modules/validator/validator.js";
import { UserService } from "../../services/user-service.js";

export default class Form extends Block {
    state: any;
    bus: AppBus;
    validator: Validator;
    userService: UserService;

    constructor(props: Props) {
        super("form", props);

        this.state = {
            inputs: this.props.inputs.reduce(this.createStateInputs, {}),
            required: this.props.inputs.reduce(this.createStateRequired, {}),
            action: this.props.action
        }

        this.bus = new AppBus();
        this.bus.on(EVENTS.FORM_INPUT, (name, value) => {
            this.state.inputs[name] = value;
            const errors = [this.validator.validate(this.createVerifiableInput(name))];

            this.bus.emit(EVENTS.FORM_INVALID, ...errors);
        })
        this.bus.on(EVENTS.FORM_VALIDATE, (name) => {
            const errors = [this.validator.validate(this.createVerifiableInput(name))];

            this.bus.emit(EVENTS.FORM_INVALID, ...errors);
        })

        this.validator = new Validator();
        this.userService = new UserService();

        Block._instances.push(this);
    }

    createStateInputs(acc: any, input: Block) {
        return {
            ...acc,
            [input.props.name]: input.props.value || null
        }
    }

    createStateRequired(acc: any, input: Block) {
        return {
            ...acc,
            [input.props.name]: input.props.required
        }
    }

    createVerifiableInput(name: string):VerifiableInput {
        return {
            name: name,
            value: this.state.inputs[name],
            rule: this.state.required[name]
        }
    }

    onSubmit(evt: Event) {
        evt.preventDefault();
        const errors = Object.keys(this.state.inputs)
            .map((name: string) => this.validator.validate(this.createVerifiableInput(name)));

        this.bus.emit(EVENTS.FORM_INVALID, ...errors);

        if (errors.every(e => e.status)) {
            if (this.props.action === "signin") {
                const { login, password } = this.state.inputs;
                this.userService.auth(login, password)
                    .catch(e => console.log(e));
            }
            if (this.props.action === "signup") {
                this.userService.signup(this.state.inputs)
                    .catch(e => console.log(e));
            }
            if (this.props.action === "profile") {
                this.userService.profile(this.state.inputs)
                    .catch(e => console.log(e));
            }
        }
    }

    render() {
        return Handlebars.compile(this.props.template === "profile" ? templateProfile : templateMain)({
            className: this.props.className,
            title: this.props.title,
            inputs: this.props.inputs.map((input: Block) => input.renderToString()),
            buttons: this.props.buttons.map((button: Block) => button.renderToString()),
            avatar: this.props.template === "profile" ? this.props.avatar.renderToString() : "",
            avatarLoadButton: this.props.template === "profile" ? this.props.avatarLoadButton.renderToString() : "",
        });
    }
}
