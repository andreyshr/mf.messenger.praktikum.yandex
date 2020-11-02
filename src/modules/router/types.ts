export type Constructable<T> =  {
    new(...args: any) : T;
}

export type RouteProps = {
    rootQuery: string,
    meta: Record<string, unknown>
}
