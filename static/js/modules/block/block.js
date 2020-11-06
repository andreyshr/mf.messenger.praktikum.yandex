import { EventBus } from "../event-bus/event-bus.js";
import { createUniqID } from "../../utils/create-uniq-id.js";
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
        this._id = 'uniq' + createUniqID();
        this._meta = {
            tagName: tagName,
            props: props,
            className: props.className,
            attributes: props.attributes
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = function () { return eventBus; };
        this.events = this.props.events || [];
        this.listeners = [];
        this.root = props.root || false;
        this.children = [];
        this._mounted = false;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    Block.hydrate = function () {
        for (var _i = 0, _a = this._instances; _i < _a.length; _i++) {
            var i = _a[_i];
            var el = document.querySelector("[_key=" + i.id);
            if (el) {
                i.setElement(el);
            }
            if (el && !i._mounted) {
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
                    var _a, _b, _c;
                    if ((_a = _this._meta) === null || _a === void 0 ? void 0 : _a.attributes)
                        (_b = _this._element) === null || _b === void 0 ? void 0 : _b.setAttribute(attr, (_c = _this._meta) === null || _c === void 0 ? void 0 : _c.attributes[attr]);
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
    Block.prototype.componentDidMount = function () {
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
        this.componentMounted();
    };
    Block.prototype.componentMounted = function () { };
    Block.prototype._attachEvents = function () {
        var _this = this;
        var element = this.getContent();
        if (element) {
            this.events.forEach(function (event) {
                _this._delegate(event.type, document.documentElement, event.el, event.handler);
            });
        }
        this._mounted = true;
    };
    Block.prototype.detachEvents = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var _b = _a[_i], fn = _b.fn, eventName = _b.eventName;
            document.documentElement.removeEventListener(eventName, fn);
        }
    };
    Block.prototype._delegate = function (eventName, element, cssSelector, callback) {
        var fn = function (event) {
            if (!event.target.closest(cssSelector)) {
                return;
            }
            callback(event);
        };
        element.addEventListener(eventName, fn);
        this.listeners.push({ eventName: eventName, fn: fn });
        return this;
    };
    Block.prototype._render = function () {
        var block = this.render();
        if (this._element)
            this._element.innerHTML = block;
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return block;
    };
    Block.prototype.renderToString = function (parent) {
        if (parent) {
            parent.children.push(this);
        }
        var wrapper = document.createElement('div');
        if (this._element)
            this._element.innerHTML = this.render();
        wrapper.appendChild(this._element);
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return wrapper.innerHTML;
    };
    Block.prototype.forceUpdate = function () {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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
            this.onShow();
        }
    };
    Block.prototype.hide = function () {
        var element = this.getContent();
        if (element) {
            element.style.display = "none";
            this.onHide();
        }
    };
    Block.prototype.unmount = function () {
        this.getContent().remove();
        this.detachEvents();
        Block._instances = [];
    };
    Block.prototype.onShow = function () {
    };
    Block.prototype.onHide = function () {
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