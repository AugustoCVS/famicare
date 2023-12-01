import { api } from "./api";
import { FetchHealthHistoricResponse } from "./interfaces/healthHistoric";

export const HealthHistoricServices = {
    fetchHealthHistoric: async({id, token}: {id: string, token: string}) => {
        const res = await api.get<FetchHealthHistoricResponse[]>(`/historic/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
        return res.data;
    }
}