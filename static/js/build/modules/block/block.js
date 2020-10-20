import { EventBus } from "../event-bus/event-bus.js";
var Block = /** @class */ (function () {
    function Block(tagName, props) {
        var _this = this;
        if (tagName === void 0) { tagName = "div"; }
        if (props === void 0) { props = {}; }
        this._element = null;
        this._meta = null;
        this._parent = null;
        this._children = [];
        this.setProps = function (nextProps) {
            if (!nextProps) {
                return;
            }
            Object.assign(_this.props, nextProps);
        };
        var eventBus = new EventBus();
        this._meta = {
            tagName: tagName,
            props: props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = function () { return eventBus; };
        this.events = this.props.events || [];
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    Block.prototype._registerEvents = function (eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_MOUNTED, this._componentMounted.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    };
    Block.prototype._createResources = function () {
        var _a;
        var tagName = (_a = this._meta) === null || _a === void 0 ? void 0 : _a.tagName;
        if (tagName) {
            this._element = this._createDocumentElement(tagName);
        }
    };
    Block.prototype.init = function () {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    };
    Block.prototype._componentDidMount = function () {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    };
    Block.prototype.componentDidMount = function (oldProps) {
        return oldProps;
    };
    Block.prototype._componentDidUpdate = function (oldProp, newProp) {
        if (oldProp === newProp)
            return false;
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        if (this._parent) {
            var el = this._parent;
            while (el === null || el === void 0 ? void 0 : el._parent) {
                el = el._parent;
            }
            el === null || el === void 0 ? void 0 : el.forceUpdate();
        }
        this.componentDidUpdate(oldProp, newProp);
        return true;
    };
    Block.prototype.componentDidUpdate = function (oldProp, newProp) {
        return oldProp === newProp;
    };
    Block.prototype._componentMounted = function () {
        var _this = this;
        if (!this._parent)
            this._attachEvents();
        else {
            this.events.forEach(function (event) {
                var _a, _b;
                if (!((_a = _this._parent) === null || _a === void 0 ? void 0 : _a.events.includes(event)))
                    (_b = _this._parent) === null || _b === void 0 ? void 0 : _b.events.push(event);
            });
        }
        this.componentMounted();
    };
    Block.prototype.componentMounted = function () {
    };
    Block.prototype._attachEvents = function () {
        var _this = this;
        this.events.forEach(function (event) {
            if (_this.getContent()) {
                var target = _this.getContent().querySelector(event.el);
                target ? target.addEventListener(event.type, event.handler.bind(_this)) : null;
            }
        });
    };
    Object.defineProperty(Block.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype._render = function () {
        var block = this.render();
        this.element.innerHTML = block;
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return block;
    };
    Block.prototype.forceUpdate = function (prev) {
        if (prev)
            this._parent = prev;
        return this._render();
    };
    Block.prototype.getContent = function () {
        return this.element;
    };
    Block.prototype._makePropsProxy = function (props) {
        var _this = this;
        return new Proxy(props, {
            get: function (target, prop) {
                var value = target[prop];
                if (value instanceof Block && Array.isArray(_this._children)) {
                    _this._children.push(value);
                }
                return typeof value === "function" ? value.bind(_this) : value;
            },
            set: function (target, prop, nextVal) {
                var oldVal = target[prop];
                target[prop] = nextVal;
                _this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldVal, nextVal);
                return true;
            },
            deleteProperty: function () {
                throw new Error("Нет прав");
            }
        });
    };
    Block.prototype._createDocumentElement = function (tagName) {
        return document.createElement(tagName);
    };
    Block.prototype.show = function () {
        var element = this.getContent();
        if (element) {
            element.style.display = "block";
        }
    };
    Block.prototype.hide = function () {
        var element = this.getContent();
        if (element) {
            element.style.display = "none";
        }
    };
    Block.EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_MOUNTED: "flow:component-mounted",
        FLOW_RENDER: "flow:render",
    };
    return Block;
}());
export default Block;
//# sourceMappingURL=block.js.map