export class HTTP {
    static post<T>(endpoint: string, data: T) {
        return Promise.resolve({endpoint, data});
    }

    static async put<T>(endpoint: string, data: T) {
        return Promise.resolve({endpoint, data});
    }
}
