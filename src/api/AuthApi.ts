export default class AuthApi {

    private users = [
        {
            username : 'admin',
            password : 'admin',
        },
    ];

    public authenticate(username: string, password: string): Promise<boolean>{
        const isAuthN = !!this.users.find((u) => u.username === username.toLowerCase() && u.password === password);
        return Promise.resolve(isAuthN);
    }
}
