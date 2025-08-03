export interface UserData {
    id: number;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: 'patient' | 'docteur' | 'admin';
}

