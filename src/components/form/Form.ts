import Block from "../../modules/block/block.js";
import { template as templateMain } from "./template.js";
import { template as templateProfile } from "./template-profile.js";

import AppBus from "../../modules/event-bus/app-bus.js";
import EVENTS from "../../modules/event-bus/events.js";

import {Validator} from "../../modules/validator/validator.js";
import {UserService} from "../../services/user-service.js";

export default class Form extends Block {
    state: any;
    bus: AppBus;
    validator: Validator;
    userService: UserService;

    constructor(props: any) {
        super("div", props);

        this.state = {
            inputs: this.props.inputs.reduce((acc: any, input: any) => ({ ...acc, [input.props.name]: input.props.value || null }), {}),
            required: this.props.inputs.reduce((acc: any, input: any) => ({ ...acc, [input.props.name]: input.props.required }), {}),
            action: this.props.action
        }

        this.bus = new AppBus();
        this.bus.on(EVENTS.FORM_INPUT, (name, value) => {
            this.state.inputs[name] = value;
            const errors = [this.validator.validate({ name, value: this.state.inputs[name], rule: this.state.required[name] })];

            this.bus.emit(EVENTS.FORM_INVALID, ...errors);
        })
        this.bus.on(EVENTS.FORM_VALIDATE, (name) => {
            const errors = [this.validator.validate({ name, value: this.state.inputs[name], rule: this.state.required[name] })];

            this.bus.emit(EVENTS.FORM_INVALID, ...errors);
        })

        this.validator = new Validator();
        this.userService = new UserService();
    }

    onSubmit(evt: any) {
        evt.preventDefault();
        const errors = Object.keys(this.state.inputs)
            .map((input: string) => this.validator.validate({ name: input ,value: this.state.inputs[input], rule: this.state.required[input] }));

        this.bus.emit(EVENTS.FORM_INVALID, ...errors);

        if (errors.every(e => e.status)) {
            if (this.props.action === "signin") {
                const { login, password } = this.state.inputs;
                this.userService.auth(login, password)
                    .catch(e => console.log(e));
            }
            if (this.props.action === "signup") {
                const { login, password, name, second_name, email, phone } = this.state.inputs;
                this.userService.signup(name, second_name, email, password, login, phone)
                    .catch(e => console.log(e));
            }
            if (this.props.action === "profile") {
                const { login, password, name, second_name, email, phone } = this.state.inputs;
                this.userService.profile(name, second_name, email, password, login, phone)
                    .catch(e => console.log(e));
            }
        }
    }

    render() {
        return Handlebars.compile(this.props.template === "profile" ? templateProfile : templateMain)({
            className: this.props.className,
            title: this.props.title,
            inputs: this.props.inputs.map((input: any) => input.forceUpdate(this)),
            buttons: this.props.buttons.map((button: any) => button.forceUpdate(this))
        });
    }
}
