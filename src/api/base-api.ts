export abstract class BaseAPI {
    abstract create(data: any): any

    abstract request(data?: any): any

    abstract update(data: any): any

    abstract delete(data: any): any
}
