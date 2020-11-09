import { Props } from "../modules/block/types";

export function setActiveRoom(room: Props, chatId: number) {
    if (room.id.toString() === chatId.toString()) {
        return {
            ...room,
            active: true,
        };
    } else {
        return room;
    }
}
