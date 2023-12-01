import { api } from "./api";
import { AppointmentsRequest, AppointmentsResponse } from "./interfaces/appointments";

export const AppointmentsServices = {
  fetchAppointments: async ({ relativeId, token }: AppointmentsRequest) => {
    const res = await api.get<AppointmentsResponse[]>(`/appointments/${relativeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};
