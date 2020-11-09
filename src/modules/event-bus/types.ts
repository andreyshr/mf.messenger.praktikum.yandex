export type Listener = (...args: any[]) => any;

export type Listeners = {
    [key: string]: Listener[];
};
