export interface Compliance {
    id: string;
    agentId: string;
    gatewayId: string;
    tapwaterId: string;
    timestamp: string;
    tapreadIds: string[];
    beginDateTime: string[];
    endDateTime: string[];
    washtime: string;
    compliance: string;
}
