export class HTTP {
    static async post(endpoint: string, data?: any) {
        return { endpoint, data };
    }

    static async put(endpoint: string, data?: any) {
        return { endpoint, data };
    }
}
