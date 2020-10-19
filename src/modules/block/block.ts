import { EventBus } from "../event-bus/event-bus.js";
import { IProps, IMeta } from "./types";

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_MOUNTED: "flow:component-mounted",
        FLOW_RENDER: "flow:render",
    };

    private _element: Node | null = null;
    private _meta: IMeta | null = null;
    private _parent: Block | null;
    private _children: Array<Block> | null;
    props: IProps;
    eventBus: () => EventBus;
    events: any;

    protected constructor(tagName: string = "div", props: IProps = {}) {
        const eventBus = new EventBus();

        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this.events = this.props.events || [];

        this._parent = null;
        this._children = [];

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
            this._element = this._createDocumentElement(tagName);
        }
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount(oldProps?: any) {
        return oldProps;
    }

    private _componentDidUpdate(oldProp: any, newProp: any): boolean {
        if (oldProp === newProp) return false;

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);

        if (this._parent) {
            let el = this._parent;
            while (el?._parent) {
                el = el._parent
            }
            el?.forceUpdate();
        }

        this.componentDidUpdate(oldProp, newProp);

        return true;
    }

    componentDidUpdate(oldProp: any, newProp: any): boolean {
        return oldProp === newProp;
    }

    private _componentMounted() {
        if (!this._parent) this._attachEvents();
        else {
            this.events.forEach((event: any) => {
                if (!this._parent?.events.includes(event)) this._parent?.events.push(event);
            })
        }

        this.componentMounted();
    }

    componentMounted() {}

    private _attachEvents() {
        this.events.forEach((event: any) => {
            if (this.getContent()) {
                const target = this.getContent().querySelector(event.el);
                target ? target.addEventListener(event.type, event.handler.bind(this)) : null;
            }
        })
    }

    setProps = (nextProps: IProps) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement {
        return this._element as HTMLElement;
    }

    private _render(): string {
        const block: any = this.render();
        this.element.innerHTML = block;
        this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
        return block;
    }

    render() {
    }

    forceUpdate(prev?: Block): string {
        if (prev) this._parent = prev;
        return this._render();
    }

    getContent(): HTMLElement {
        return this.element as HTMLElement;
    }

    _makePropsProxy(props: IProps) {
        return new Proxy(props, {
            get: (target, prop) => {
                const value = target[prop];
                if (value instanceof Block && Array.isArray(this._children)) {
                    this._children.push(value);
                }
                return typeof value === "function" ? value.bind(this) : value;
            },
            set: (target: any, prop: string, nextVal: any): boolean => {
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
        }
    }

    hide() {
        const element = this.getContent();
        if (element) {
            element.style.display = "none";
        }
    }
}

export default Block;
