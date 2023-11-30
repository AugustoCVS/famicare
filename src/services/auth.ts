import { api } from './api'
import { FetchRelativesResponse, LoginRequest, LoginResponse, RegisterReponse, RegisterRequest, registerRelativeRequest, registerRelativeResponse } from './interfaces/auth'

export const AuthServices = {
    registerFamily: async({ name, email, password, confirm_password }: RegisterRequest) => {
        const res = await api.post<RegisterReponse>('/family/register', {
            name,
            email,
            password,
            confirm_password
        })

        return res.data;
    },

    loginFamily: async({ email, password }: LoginRequest) => {
        const res = await api.post<LoginResponse>('/family/login', {
            email,
            password
        })

        return res.data;
    },

    fetchRelatives: async({id, token}: {id: string, token: string}) => {
        const res = await api.get<FetchRelativesResponse[]>(`/relative/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
        return res.data;
    },

    registerRelative: async({ name, email, cpf, password, confirm_password, id, token }: registerRelativeRequest) => {
        const res = await api.post<registerRelativeResponse>(`/relative/register/${id}`, {
            name,
            email,
            cpf,
            password,
            confirm_password
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return res.data;
    },

}