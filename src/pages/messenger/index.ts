import Block from "../../modules/block/block.js";
import { template } from "./template.js";
import {Props} from "../../modules/block/types";

import Room from "../../components/room/Room.js";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader.js";
import WorkSpaceEmpty from "../../components/workspace-empty/WorkSpaceEmpty.js";

import {ChatsService} from "../../services/chats-service.js"
import {UserService} from "../../services/user-service.js";
import Store from "../../modules/store/store.js";

import { sidebarHeader, workspaceEmpty } from "../messenger-chat/initial-props.js";

const chatsService = new ChatsService();
const userService = new UserService();
const store = new Store();

export const props = {
    rooms: store.get("chats") || [],
    sidebarHeader,
    workspaceEmpty
}

export default class Messenger extends Block {
    constructor(props: Props) {
        super("div", props);

        Block._instances.push(this);
    }

    get chats() {
        return store.get("chats");
    }

    onShow = () => {
        if (!this.chats) {
            chatsService.getChats().then((data) => {
                this.setProps({
                    rooms: data.map(this.createRoom)
                })
            });
        } else {
            this.setProps({
                rooms: this.chats.map(this.createRoom)
            })
        }
    }

    componentMounted() {
        document.addEventListener("submit", (evt: any) => {
            if (!evt?.target?.closest(".sidebar__search form")) {
                return;
            }

            evt.preventDefault();
            userService.search(evt.target[0].value)
                .then(data => {
                    this.setProps({
                        rooms: data.map((user: any) => ({ title: user.login, avatarImg: user.avatarImg })).map(this.createRoom)
                    })
                })
        });
    }

    createRoom(room: Record<string, string>): Record<string, string> {
        return {
            ...room,
            link: `/messenger/${room.id}`,
        };
    }

    render() {
        return Handlebars.compile(template)({
            rooms: this.props.rooms.map((room: Props): string => new Room(room).renderToString()),
            sidebarHeader: new SidebarHeader(this.props.sidebarHeader).renderToString(),
            workspaceEmpty: new WorkSpaceEmpty(this.props.workspaceEmpty).renderToString()
        });
    }
}
