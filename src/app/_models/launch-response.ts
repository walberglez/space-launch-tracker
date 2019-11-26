import { Launch } from './launch';

export class LaunchResponse {
    total: number;
    count: number;
    offset: number;
    launches: Launch[];
}
