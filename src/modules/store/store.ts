import { Nullable } from "../../utils/utility-type";
// import AppBus from "../event-bus/app-bus.js";
// import EVENTS from "../event-bus/events.js";

export default class Store {
    static __instance: Nullable<Store> = null;

    private _store: Record<string, any> = {};

    constructor() {
        if (Store.__instance) {
            return Store.__instance;
        }

        Store.__instance = this;
    }

    get(name: string) {
        return this._store[name]
    }

    set(name: string, value: any) {
        this._store[name] = value;
        //bus.emit()
    }
}
