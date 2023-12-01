export interface ExamsRequest {
    relativeId: string;
    token: string;
}

export interface ExamsResponse {
    id: string;
    type: string;
    date: string;
    result: string;
    observations: string;
    doctor: string;
}