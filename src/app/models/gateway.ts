export interface Gateway {
    id: string;
    ipA: string;
    siteId: string;
    coordinates: string;
    currentVersion: string;
    status: boolean;
    boardModel: string;
    tapwaterIds: string[];
}
