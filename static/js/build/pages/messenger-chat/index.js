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
import { render } from "../../utils/renderDOM.js";
import "../../utils/handlebars-helpers.js";
var MessengerChat = /** @class */ (function (_super) {
    __extends(MessengerChat, _super);
    function MessengerChat(props) {
        return _super.call(this, "div", props) || this;
    }
    MessengerChat.prototype.render = function () {
        return Handlebars.compile(template)({});
    };
    return MessengerChat;
}(Block));
export default MessengerChat;
var messengerChat = new MessengerChat({});
render(".app", messengerChat);
//# sourceMappingURL=index.js.map