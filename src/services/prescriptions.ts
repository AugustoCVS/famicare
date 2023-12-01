import { api } from "./api";
import { FetchPrescriptionsRequest, PrescriptionsResponse } from "./interfaces/prescriptions";

export const PrescriptionsService = {
    fetchPrescriptions: async({relativeId, token}: FetchPrescriptionsRequest) => {
        const res = await api.get<PrescriptionsResponse[]>(`/prescriptions/${relativeId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
        return res.data;
    }
}