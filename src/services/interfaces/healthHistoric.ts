export interface HealthHisoricRequest {
    idRelative: string;
    token: string;
}

export interface FetchHealthHistoricResponse {
    id: string;
    diagnostic: string;
    treatment: string;
    allergies: string;
    results: string;
}