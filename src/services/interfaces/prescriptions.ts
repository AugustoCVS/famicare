export interface FetchPrescriptionsRequest {
    token: string;
    relativeId: string;
}

export interface PrescriptionsResponse {
    id: string;
    date: string;
    medicine: string;
    dosage: string;
    duration: string;
    instructions: string;
    doctor: string;
}