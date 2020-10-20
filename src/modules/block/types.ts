type BlockEvent = {
    type: string,
    el: string,
    handler(): any
}

type Meta = {
    tagName: string,
    props: Props
}

type Props = {
    [key: string]: any,
    events?: BlockEvent[]
}

