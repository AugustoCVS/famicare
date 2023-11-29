export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface RegisterReponse {
    id: string;
    name: string;
    email: string;
}