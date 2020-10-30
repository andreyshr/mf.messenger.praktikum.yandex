import AppBus from "../modules/event-bus/app-bus.js";
import EVENTS from "../modules/event-bus/events.js";
import {Props} from "../modules/block/types";

const bus = new AppBus();

export const addRoomEvents = (room: Props): Props => ({
    ...room,
    events: [
        {
            type: "click",
            el: `[data-room-id='${room.id}']`,
            handler: function (evt) {
                evt.preventDefault();
                bus.emit(EVENTS.ROUTER_GO, "/messenger/:id");
            }
        }
    ]
})
