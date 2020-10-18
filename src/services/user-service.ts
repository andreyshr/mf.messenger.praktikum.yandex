class HTTP {
    static async post(endpoint: string, data?: any) {
        return { endpoint, data };
    }

    static async put(endpoint: string, data?: any) {
        return { endpoint, data };
    }
}

export class UserService {
    auth(login: any, password: any) {
        return HTTP.post('/api/signin', {login, password})
            .then(function (data: any) {
                console.log(data);
            }.bind(this));
    }

    signup(name: any, second_name: any, email: any, password: any, login: any, phone: any) {
        return HTTP.post('/api/signup', {name, second_name, email, login, password, phone})
            .then(function (data: any) {
                console.log(data);
            }.bind(this));
    }

    profile(name: any, second_name: any, email: any, password: any, login: any, phone: any) {
        return HTTP.put('/user/profile', {name, second_name, email, login, password, phone})
            .then(function (data: any) {
                console.log(data);
            }.bind(this));
    }
}
