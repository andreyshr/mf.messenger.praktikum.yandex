import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import {Props} from "../modules/block/types";
import Store from "../modules/store/store.js";

const bus = new AppBus();
const store = new Store();

export const addRoomEvents = (room: Props): Props => ({
    ...room,
    events: [
        {
            type: "click",
            el: `[data-room-id='${room.id}']`,
            handler: function (evt) {
                evt.preventDefault();
                store.set("currentChat", room);
                bus.emit(EVENTS.ROUTER_GO, `/messenger/:id`);
            }
        }
    ]
})
