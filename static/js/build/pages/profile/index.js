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
import Button from "../../components/button/Button.js";
import Form from "../../components/form/Form.js";
import Input from "../../components/input/Input.js";
import { addInputEvents } from "../../utils/add-input-events.js";
import { render } from "../../utils/renderDOM.js";
import "../../utils/handlebars-helpers.js";
import { inputsProps, buttons, buttonBack } from "./data.js";
var inputs = inputsProps.map(addInputEvents);
var form = new Form({
    template: "profile",
    className: "profile__form",
    action: "profile",
    title: "Андрей Шауров",
    inputs: inputs.map(function (props) { return new Input(props); }),
    buttons: buttons.map(function (props) { return new Button("button", props); }),
    events: [
        {
            type: "submit",
            el: "form",
            handler: function (evt) {
                form.onSubmit(evt);
            }
        }
    ]
});
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(props) {
        return _super.call(this, "div", props) || this;
    }
    Profile.prototype.render = function () {
        return Handlebars.compile(template)({
            form: this.props.form.renderToString(),
            buttonBack: this.props.buttonBack.renderToString(),
        });
    };
    return Profile;
}(Block));
export default Profile;
var profile = new Profile({
    form: form,
    buttonBack: new Button("div", buttonBack)
});
render(".app", profile);
Block.hydrate();
//# sourceMappingURL=index.js.map