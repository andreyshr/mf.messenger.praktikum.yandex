import Button from "./button.js";
import { render } from "../../utils/renderDOM";
var button = new Button({
    className: 'my-class',
    child: 'Click me',
});
// app — это class дива в корне DOM
render(".app", button);
//# sourceMappingURL=index.js.map