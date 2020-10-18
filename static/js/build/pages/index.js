// У кнопки есть index.js, который экспортирует только нужное
import Form from "../components/form/Form.js";
import Button from "../components/button/button.js";
import Input from "../components/input/Input.js";
import { render } from "../utils/renderDOM.js";
Handlebars.registerHelper('stringifyFunc', function (fn) {
    return new Handlebars.SafeString(fn.toString());
});
var input = new Input({
    placeholder: "Имя",
    type: "text"
}, {
    input: function (evt) {
        console.log(evt.target.value);
    }
});
var button = new Button({
    className: 'button button--blue',
    title: 'Показать'
}, {
    click: function () {
        console.log("hello");
    }
});
var form = new Form({
    className: "form--signin",
    title: "Вход",
    submitButtonComp: button,
    inputComp: input
}, {
    submit: function (evt) {
        this.onSubmit(evt);
    }
});
// app — это class дива в корне DOM
render(".app", form);
//# sourceMappingURL=index.js.map