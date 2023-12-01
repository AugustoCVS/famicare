export interface FetchAgendaRequest {
    relativeId: string;
    token: string;
}

export interface AgendaResponse {
    id: string;
    type: string;
    date: string;
    doctor: string;
    local: string;
    observations: string;
}