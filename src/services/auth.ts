import { api } from './api'
import { FetchRelativeByIdResponse, FetchRelativeRequest, FetchRelativesResponse, LoginRelativeRequest, LoginRelativeResponse, LoginRequest, LoginResponse, RegisterReponse, RegisterRequest, UpdateRelativeRequest, registerRelativeRequest, registerRelativeResponse } from './interfaces/auth'

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

    loginRelative: async({ email, password, id, token }: LoginRelativeRequest) => {
        const res = await api.post<LoginRelativeResponse>(`/relative/${id}/login`, {
            email,
            password
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return res.data;
    },

    fetchRelativeById: async({ familyId, relativeId, token }: FetchRelativeRequest) => {
        const res = await api.get<FetchRelativeByIdResponse>(`/relative/${familyId}/${relativeId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return res.data;
    },

    updateRelative: async({ name, email, cpf, relativeId, familyId, token }: UpdateRelativeRequest) => {
        const res = await api.put<registerRelativeResponse>(`/relative/${familyId}/${relativeId}`, {
            name,
            email,
            cpf,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return res.data;
    },
}