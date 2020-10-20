type BlockEvent = {
    type: string,
    el: string,
    handler(...args: any): any
}

type Attributes = {
    [key: string]: string,
}

type Meta = {
    tagName: string,
    props: Props,
    className?: string,
    attributes?: Attributes
}

type Props = {
    [key: string]: any,
    events?: BlockEvent[]
}

