export interface IEvent {
    type: string,
    el: string,
    handler(): any
}

export interface IMeta {
    tagName: string,
    props: IProps
}

export interface IProps {
    [key: string]: any,
    events?: Array<IEvent>
}

