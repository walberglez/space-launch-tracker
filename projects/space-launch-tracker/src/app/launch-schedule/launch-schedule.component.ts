import { Component, OnInit } from '@angular/core';
import { LaunchSerializerCommon, LaunchService, Location, LocationService } from 'launch-library-client';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-launch-schedule',
  templateUrl: './launch-schedule.component.html',
  styleUrls: ['./launch-schedule.component.css']
})
export class LaunchScheduleComponent {
  launchLimit: Array<number> = [5, 10, 15, 20];
  locations: Observable<Array<Location>> = this.getLocations();
  filters: LaunchUpcomingFilters = new LaunchUpcomingFilters(10);
  launches: Observable<Array<LaunchSerializerCommon>> = this.getUpcomingLaunches(this.filters);

  constructor(private launchService: LaunchService, private locationService: LocationService) { }

  applyFilters() {
    this.launches = this.getUpcomingLaunches(this.filters);
  }

  clearFilters() {
    this.filters = {
      limit: 10,
      locationIds: undefined
    };
    this.launches = this.getUpcomingLaunches(this.filters);
  }

  private getLocations(): Observable<Array<Location>> {
    return this.locationService.locationList(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        100,
        undefined,
        "body",
        false
    ).pipe(
      map(data => data.results),
      tap(results => {
        results.sort((a: Location, b: Location) => {
          // if (a.name == null && b.name == null) {
          //   return 0;
          // }

          // if (a.name == null) {
          //   return 1;
          // }

          // if (b.name == null) {
          //   return -1;
          // }
        
          return a.name!.localeCompare(b.name!);
        })
      })
    );
  }

  private getUpcomingLaunches(filters: LaunchUpcomingFilters): Observable<Array<LaunchSerializerCommon>> {
    return this.launchService.launchUpcomingList(
      undefined, 
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      filters.limit,
      undefined,
      filters.locationIds,      
      undefined,
      false,
      false,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      false,
      true,
      'body',
      false)
      .pipe(map(data => data.results));
  }
}

export class LaunchUpcomingFilters {
  constructor(public limit: number, public locationIds?: Array<number>) {}
}
