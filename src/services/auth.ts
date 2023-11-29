import { api } from './api'
import { LoginRequest, LoginResponse, RegisterReponse, RegisterRequest } from './interfaces/auth'

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
    }
}