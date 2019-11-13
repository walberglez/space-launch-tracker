import { Component, OnInit } from '@angular/core';
import { LaunchResponse } from '../_models/launch-response';
import { LaunchLibraryService } from '../_services/launchLibrary.service';
import { Launch } from '../_models/launch';

@Component({
  selector: 'app-launch-schedule',
  templateUrl: './launch-schedule.component.html',
  styleUrls: ['./launch-schedule.component.css']
})
export class LaunchScheduleComponent implements OnInit {
  launches: Launch[];

  constructor(private launchLibraryService: LaunchLibraryService) { }

  ngOnInit() {
    this.launchLibraryService.getNextLaunches(10)
      .subscribe((data: LaunchResponse) => {
        this.launches = data.launches;
      });
  }

}
