export interface User {
    id?: string;
    password: string;
    role: string;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: number;
    address: string;
    lastLogin: string;
    creatingDate: string;
    token?: string;
    avatar: string;
}
