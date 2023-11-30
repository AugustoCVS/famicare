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

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface registerRelativeRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirm_password: string;
    id: string;
    token: string;
}

export interface registerRelativeResponse {
    id: string;
    name: string;
    email: string;
    cpf: string;
}
export interface FetchRelativesResponse {
    id: string;
    name: string;
    email: string;
    cpf: string;
}
