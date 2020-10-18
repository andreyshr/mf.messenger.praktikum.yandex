import {EventBus} from "./event-bus.js";

export default class AppBus extends EventBus{
    static __instance: AppBus | null = null;

    constructor() {
        if (AppBus.__instance) {
            return AppBus.__instance;
        }

        super();

        AppBus.__instance = this;
    }
}
