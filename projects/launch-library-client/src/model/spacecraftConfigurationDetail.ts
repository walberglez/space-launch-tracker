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
import { Agency } from './agency';
import { SpacecraftConfigType } from './spacecraftConfigType';


export interface SpacecraftConfigurationDetail { 
    readonly id?: number;
    readonly url?: string;
    name: string;
    type?: SpacecraftConfigType;
    agency?: Agency;
    inUse?: boolean;
    capability?: string;
    history?: string;
    details?: string;
    maidenFlight?: string;
    height?: number;
    diameter?: number;
    humanRated?: boolean;
    crewCapacity?: number;
    payloadCapacity?: number;
    flightLife?: string;
    readonly imageUrl?: string;
    readonly nationUrl?: string;
    wikiLink?: string;
    infoLink?: string;
}