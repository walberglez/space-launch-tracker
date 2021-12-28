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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { InlineResponse20024 } from '../model/inlineResponse20024';
import { LocationDetail } from '../model/locationDetail';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LocationService {

    protected basePath = 'https://ll.thespacedevs.com/2.2.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * API endpoint that allows Location instances to be viewed.
     * @param name 
     * @param countryCode 
     * @param id 
     * @param padLocationId 
     * @param search A search term.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationList(name?: string, countryCode?: string, id?: number, padLocationId?: string, search?: string, limit?: number, offset?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20024>;
    public locationList(name?: string, countryCode?: string, id?: number, padLocationId?: string, search?: string, limit?: number, offset?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20024>>;
    public locationList(name?: string, countryCode?: string, id?: number, padLocationId?: string, search?: string, limit?: number, offset?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20024>>;
    public locationList(name?: string, countryCode?: string, id?: number, padLocationId?: string, search?: string, limit?: number, offset?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (countryCode !== undefined && countryCode !== null) {
            queryParameters = queryParameters.set('country_code', <any>countryCode);
        }
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (padLocationId !== undefined && padLocationId !== null) {
            queryParameters = queryParameters.set('pad__location_id', <any>padLocationId);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }

        let headers = this.defaultHeaders;

        // authentication (Token) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Token"]) {
            headers = headers.set('Token', this.configuration.apiKeys["Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<InlineResponse20024>(`${this.basePath}/location/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * API endpoint that allows Location instances to be viewed.
     * @param id A unique integer value identifying this Location.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationRead(id: number, observe?: 'body', reportProgress?: boolean): Observable<LocationDetail>;
    public locationRead(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LocationDetail>>;
    public locationRead(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LocationDetail>>;
    public locationRead(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling locationRead.');
        }

        let headers = this.defaultHeaders;

        // authentication (Token) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Token"]) {
            headers = headers.set('Token', this.configuration.apiKeys["Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<LocationDetail>(`${this.basePath}/location/${encodeURIComponent(String(id))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
