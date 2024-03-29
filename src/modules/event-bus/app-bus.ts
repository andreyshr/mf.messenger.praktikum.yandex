import { EventBus } from "./event-bus";
import { Nullable } from "../../utils/utility-type";

export class AppBus extends EventBus {
    static __instance: Nullable<AppBus> = null;

    constructor() {
        if (AppBus.__instance) {
            return AppBus.__instance;
        }

        super();

        AppBus.__instance = this;
    }
}

export const bus = new AppBus();
