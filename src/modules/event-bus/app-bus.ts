// особенность расширений импортов описана в README.md
import { EventBus } from "./event-bus.js";
import { Nullable } from "../../utils/utility-type";

export default class AppBus extends EventBus{
    static __instance: Nullable<AppBus> = null;

    constructor() {
        if (AppBus.__instance) {
            return AppBus.__instance;
        }

        super();

        AppBus.__instance = this;
    }
}
