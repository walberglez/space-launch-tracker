import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../_models/launch';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  @Input() launch: Launch;
  
  constructor() { }

  ngOnInit() {
  }

}
