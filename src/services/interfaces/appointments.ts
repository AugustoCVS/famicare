export interface AppointmentsRequest {
  relativeId: string;
  token: string;
}

export interface AppointmentsResponse {
  id: string;
  doctor: string;
  diagnostic: string;
  treatment: string;
  medicines: string;
  results: string;
  observations: string;
}
