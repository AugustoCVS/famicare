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

export interface LoginRelativeRequest {
    email: string;
    password: string;
    id: string;
    token: string;
}

export interface LoginRelativeResponse {
    id: number;
    name: string;
    cpf: string;
    email: string;
}

export interface FetchRelativeRequest {
    familyId: string;
    relativeId: string;
    token: string;
}

export interface FetchRelativeByIdResponse {
    id: string;
    name: string;
    email: string;
    cpf: string;
}

export interface UpdateRelativeRequest {
    familyId: string;
    relativeId: string;
    token: string;
    name: string;
    email: string;
    cpf: string;
}