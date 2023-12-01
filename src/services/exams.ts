import { api } from "./api";
import { ExamsRequest, ExamsResponse } from "./interfaces/exams";

export const ExamsServices = {
    fetchHealthHistoric: async({relativeId, token}: ExamsRequest) => {
        const res = await api.get<ExamsResponse[]>(`/exams/${relativeId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
        return res.data;
    }
}