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
import Block from "../../modules/block.js";
import { template } from "./template.js";
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props, events) {
        // Создаём враппер DOM-элемент button
        return _super.call(this, "form", props, events) || this;
    }
    Form.prototype.render = function () {
        // В данном случае render возвращает строкой разметку из шаблонизатора
        return Handlebars.compile(template)({
            className: this.props.className,
            title: this.props.title,
            submitButton: this.props.submitButton ? this.props.submitButton.render() : ""
        });
    };
    return Form;
}(Block));
export default Form;
//# sourceMappingURL=Button.js.map