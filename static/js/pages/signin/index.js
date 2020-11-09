var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import Form from "../../components/form/Form.js";
import Button from "../../components/button/Button.js";
import Input from "../../components/input/Input.js";
import Notification from "../../components/notification/Notification.js";
import { addInputEvents } from "../../utils/add-input-events.js";
import { inputsProps, buttons } from "./initial-props.js";
var inputs = inputsProps.map(addInputEvents);
var form = new Form({
    className: "form form--signin",
    action: "signin",
    title: "Вход",
    inputs: inputs.map(function (props) { return new Input(props); }),
    buttons: buttons.map(function (props) {
        return new Button(props.tagName === "button" ? "button" : "a", props);
    }),
    events: [
        {
            type: "submit",
            el: ".form--signin",
            handler: function (evt) {
                form.onSubmit(evt);
            },
        },
    ],
});
export var props = {
    form: form,
    notification: {},
};
var SignInPage = /** @class */ (function (_super) {
    __extends(SignInPage, _super);
    function SignInPage(props) {
        return _super.call(this, "div", props) || this;
    }
    SignInPage.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            notification: new Notification(this.props.notification).renderToString(),
        });
    };
    return SignInPage;
}(Block));
export default SignInPage;
//# sourceMappingURL=index.js.map