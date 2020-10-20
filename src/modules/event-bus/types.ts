type Listener =  (...args: any) => any

type Listeners =  {
    [key: string]: Listener[]
}
