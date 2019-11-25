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
  breakpoint: number;

  constructor(private launchLibraryService: LaunchLibraryService) { }

  ngOnInit() {
    this.setBreakpoint(window.innerWidth);

    this.launchLibraryService.getNextLaunches(10)
      .subscribe((data: LaunchResponse) => {
        this.launches = data.launches;
      });
  }

  onResize(event: any) {
    this.setBreakpoint(event.target.innerWidth);
  }

  setBreakpoint(width: number) {
    if (width <= 400) {
      this.breakpoint = 1;
      return;
    }

    if (width <= 800) {
      this.breakpoint = 2;
      return;
    }

    if (width <= 1200) {
      this.breakpoint = 3;
      return;
    }

    this.breakpoint = 4;
  }

}
