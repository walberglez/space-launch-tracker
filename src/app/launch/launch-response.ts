import { Launch } from './launch';

export interface LaunchResponse {
    total: number;
    count: number;
    offset: number;
    launches: Launch[];
}
