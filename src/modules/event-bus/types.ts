export interface IListener {
    (...args: any): any
}

export interface IListeners {
    [key: string]: Array<IListener>
}
