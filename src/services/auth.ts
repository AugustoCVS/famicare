import { api } from './api'
import { RegisterReponse, RegisterRequest } from './interfaces/auth'

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
}