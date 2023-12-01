export interface ExamsRequest {
    relativeId: string;
    token: string;
}

export interface ExamsResponse {
    id: string;
    type: string;
    date: string;
    result: string;
    observation: string;
    doctor: string;
}