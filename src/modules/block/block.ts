import {EventBus} from "../event-bus/event-bus.js";
import {Nullable} from "../../utils/utility-type";
import {BlockEvent, Meta, Props} from "./types";
import {createUniqID} from "../../utils/create-uniq-id.js";

abstract class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_MOUNTED: "flow:component-mounted",
        FLOW_RENDER: "flow:render",
    };

    static _instances: Block[] = [];

    static hydrate() {
        for (const i of this._instances) {
            const el = document.querySelector(`[_key=${i.id}`);

            if (el) {
                i.setElement(el as HTMLElement);
            }

            if (el && !i._mounted) {
                i._attachEvents();
            }
        }
    }

    private _element: Nullable<HTMLElement> = null;
    private _meta: Nullable<Meta> = null;
    private readonly _id: string;
    _mounted: boolean = false;
    props: Props;
    events: BlockEvent[];
    eventBus: () => EventBus;

    listeners: any

    root: boolean;
    children: Block[]

    protected constructor(tagName: string = "div", props: Props = {}) {
        const eventBus = new EventBus();

        this._id = 'uniq' + createUniqID();

        this._meta = {
            tagName,
            props,
            className: props.className,
            attributes: props.attributes
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this.events = this.props.events || [];

        this.listeners = [];

        this.root = props.root || false;
        this.children = [];

        this._mounted = false;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_MOUNTED, this._componentMounted.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        const tagName = this._meta?.tagName;

        if (tagName) {
            (this._element as Node) = this._createDocumentElement(tagName);
        }

        if (this._element) {
            if (this._meta?.className) this._element.className = this.props.className;
            if (this._meta?.attributes) {
                Object.keys(this._meta.attributes).forEach((attr: string) => {
                    if (this._meta?.attributes) this._element?.setAttribute(attr, this._meta?.attributes[attr] as string);
                })
            }
        }

        this._element?.setAttribute('_key', this.id);
    }

    setElement(element: HTMLElement) {
        this._element = element;
    }

    get element(): HTMLElement {
        return this._element as HTMLElement;
    }

    get id(): string {
        return this._id;
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount() {
    }

    private _componentDidUpdate(oldProp: string, newProp: string): boolean {
        if (oldProp === newProp) return false;

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);

        this.componentDidUpdate(oldProp, newProp);

        return true;
    }

    componentDidUpdate(oldProp?: string, newProp?: string): boolean {
        return oldProp === newProp;
    }

    private _componentMounted() {
        this.componentMounted();
    }

    componentMounted() {}

    private _attachEvents() {
        const element = this.getContent();
        if (element) {
            this.events.forEach((event: BlockEvent) => {
                this._delegate(event.type, document.documentElement, event.el, event.handler);
            });
        }
        this._mounted = true;
    }

    detachEvents() {
        for (const {fn, eventName} of this.listeners) {
            document.documentElement.removeEventListener(eventName, fn);
        }
    }

    private _delegate(eventName: string, element: HTMLElement, cssSelector: string, callback: (event?: Event) => {}) {
        const fn = (event: Event) => {
            if (!(event.target as HTMLElement).closest(cssSelector)) {
                return;
            }

            callback(event);
        };

        element.addEventListener(eventName, fn);
        this.listeners.push({ eventName, fn });

        return this;
    }

    setProps = (nextProps: Props) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    private _render(): string {
        const block: string = this.render();
        if (this._element) this._element.innerHTML = block;
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return block;
    }

    renderToString(parent?: any): string {
        if (parent) {
            parent.children.push(this);
        }

        const wrapper = document.createElement('div');
        if (this._element) this._element.innerHTML = this.render();
        wrapper.appendChild(this._element as HTMLElement);
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return wrapper.innerHTML;
    }

    abstract render(): string

    forceUpdate() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    getContent(): HTMLElement {
        return this.element as HTMLElement;
    }

    _makePropsProxy(props: Props) {
        return new Proxy(props, {
            get: (target: Props, prop: string) => {
                const value = target[prop];
                return typeof value === "function" ? value.bind(this) : value;
            },
            set: (target: Props, prop: string, nextVal: any): boolean => {
                const oldVal = target[prop];
                target[prop] = nextVal;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldVal, nextVal);
                return true;
            },
            deleteProperty: () => {
                throw new Error("Нет прав");
            }
        });
    }

    _createDocumentElement(tagName: string): Node {
        return document.createElement(tagName);
    }

    show() {
        const element = this.getContent();
        if (element) {
            element.style.display = "block";
            this.onShow();
        }
    }

    hide() {
        const element = this.getContent();
        if (element) {
            element.style.display = "none";
            this.onHide();
        }
    }

    unmount() {
        this.getContent().remove();
        this.detachEvents();
        Block._instances = []
    }

    onShow() {

    }

    onHide() {

    }
}

export default Block;
