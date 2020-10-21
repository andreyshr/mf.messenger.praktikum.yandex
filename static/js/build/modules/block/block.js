import { EventBus } from "../event-bus/event-bus.js";
var Block = /** @class */ (function () {
    function Block(tagName, props) {
        var _this = this;
        if (tagName === void 0) { tagName = "div"; }
        if (props === void 0) { props = {}; }
        this._element = null;
        this._meta = null;
        this._mounted = false;
        this.setProps = function (nextProps) {
            if (!nextProps) {
                return;
            }
            Object.assign(_this.props, nextProps);
        };
        var eventBus = new EventBus();
        this._id = 'uniq' + parseInt(String(Math.random() * 1000000));
        this._meta = {
            tagName: tagName,
            props: props,
            className: props.className,
            attributes: props.attributes
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = function () { return eventBus; };
        this.events = this.props.events || [];
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    Block.hydrate = function () {
        for (var _i = 0, _a = this._instances; _i < _a.length; _i++) {
            var i = _a[_i];
            var el = document.querySelector("[_key=" + i.id);
            if (el) {
                i.setElement(el);
                i._attachEvents();
            }
        }
    };
    Block.prototype._registerEvents = function (eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_MOUNTED, this._componentMounted.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    };
    Block.prototype._createResources = function () {
        var _this = this;
        var _a, _b, _c, _d;
        var tagName = (_a = this._meta) === null || _a === void 0 ? void 0 : _a.tagName;
        if (tagName) {
            this._element = this._createDocumentElement(tagName);
        }
        if (this._element) {
            if ((_b = this._meta) === null || _b === void 0 ? void 0 : _b.className)
                this._element.className = this.props.className;
            if ((_c = this._meta) === null || _c === void 0 ? void 0 : _c.attributes) {
                Object.keys(this._meta.attributes).forEach(function (attr) {
                    var _a, _b;
                    // @ts-ignore
                    (_a = _this._element) === null || _a === void 0 ? void 0 : _a.setAttribute(attr, (_b = _this._meta) === null || _b === void 0 ? void 0 : _b.attributes[attr]);
                });
            }
        }
        (_d = this._element) === null || _d === void 0 ? void 0 : _d.setAttribute('_key', this.id);
    };
    Block.prototype.setElement = function (element) {
        this._element = element;
    };
    Object.defineProperty(Block.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
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
        this.componentDidUpdate(oldProp, newProp);
        return true;
    };
    Block.prototype.componentDidUpdate = function (oldProp, newProp) {
        return oldProp === newProp;
    };
    Block.prototype._componentMounted = function () {
        if (!this._mounted)
            this._attachEvents();
        this._mounted = true;
    };
    Block.prototype._attachEvents = function () {
        var _this = this;
        var element = this.getContent();
        if (element) {
            this.events.forEach(function (event) {
                var targetElement = element.querySelector(event.el);
                if (targetElement) {
                    targetElement.addEventListener(event.type, event.handler.bind(_this));
                }
                else {
                    element.addEventListener(event.type, event.handler.bind(_this));
                }
            });
        }
    };
    Block.prototype._render = function () {
        var block = this.render();
        if (this._element)
            this._element.innerHTML = block;
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return block;
    };
    Block.prototype.renderToString = function () {
        var wrapper = document.createElement('div');
        if (this._element)
            this._element.innerHTML = this.render();
        wrapper.appendChild(this._element);
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return wrapper.innerHTML;
    };
    Block.prototype.getContent = function () {
        return this.element;
    };
    Block.prototype._makePropsProxy = function (props) {
        var _this = this;
        return new Proxy(props, {
            get: function (target, prop) {
                var value = target[prop];
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
    Block._instances = [];
    return Block;
}());
export default Block;
//# sourceMappingURL=block.js.map