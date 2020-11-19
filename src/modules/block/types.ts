export type BlockEvent = {
    type: string;
    el: string;
    handler(...args: any[]): any;
};

export type Attributes = {
    [key: string]: string;
};

export type Props = {
    [key: string]: any;
    events?: BlockEvent[];
};

export type Meta = {
    tagName: string;
    props: Props;
    className?: string;
    attributes?: Attributes;
};
