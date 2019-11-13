import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LaunchResponse } from '../_models/launch-response';

@Injectable({
  providedIn: 'root'
})
export class LaunchLibraryService {
  private BASE_URL: string = environment.launchLibraryApiUrl;

  constructor(private httpClient: HttpClient) { }

  public getNextLaunches(next: number) {
    const url = this.BASE_URL + 'launch?mode=verbose&next=' + next;
    return this.httpClient.get<LaunchResponse>(url);
  }
}
