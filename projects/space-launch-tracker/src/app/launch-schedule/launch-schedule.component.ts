import { Component, OnInit } from '@angular/core';
import { InlineResponse20022, LaunchSerializerCommon, LaunchService } from 'launch-library-client';

@Component({
  selector: 'app-launch-schedule',
  templateUrl: './launch-schedule.component.html',
  styleUrls: ['./launch-schedule.component.css']
})
export class LaunchScheduleComponent implements OnInit {
  launches: LaunchSerializerCommon[] | undefined;

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
    this.launchService.launchUpcomingList(
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
     15,
     undefined,
     undefined,
     undefined,
     false,
     false,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     false,
     false,
     undefined,
     false
     )
     .subscribe((data: InlineResponse20022) => {
      this.launches = data.results;
    });
  }

}
