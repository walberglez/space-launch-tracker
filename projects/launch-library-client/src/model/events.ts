/**
 * Launch Library
 * The Launch Library API is a product by The Space Devs with an up-to-date database of Spaceflight events.   While this API is free to use it is subject to rate limiting for non-authenticated requests.  Please use https://lldev.thespacedevs.com for development testing - this endpoint has stale data but is not subject to any rate limits.  If you are interested in a higher rate limit please consider supporting the project on Patreon for access to an API Key.
 *
 * OpenAPI spec version: v2.2.0
 * Contact: support@thespacedevs.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EventType } from './eventType';
import { Expedition } from './expedition';
import { LaunchSerializerCommon } from './launchSerializerCommon';
import { Program } from './program';
import { SpaceStationSerializerForCommon } from './spaceStationSerializerForCommon';
import { Update } from './update';


export interface Events { 
    readonly id?: number;
    readonly url?: string;
    slug: string;
    name: string;
    readonly updates?: Array<Update>;
    type?: EventType;
    description?: string;
    location?: string;
    newsUrl?: string;
    videoUrl?: string;
    readonly featureImage?: string;
    date?: Date;
    launches: Array<LaunchSerializerCommon>;
    expeditions: Array<Expedition>;
    spacestations: Array<SpaceStationSerializerForCommon>;
    readonly program?: Array<Program>;
}
