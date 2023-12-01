import { api } from "./api";
import { AgendaResponse, FetchAgendaRequest } from "./interfaces/agenda";

export const AgendaServices = {
    fetchAgenda: async({relativeId, token}: FetchAgendaRequest) => {
        const res = await api.get<AgendaResponse[]>(`/agenda/${relativeId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
        return res.data;
    }
}