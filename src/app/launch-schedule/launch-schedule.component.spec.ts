import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchScheduleComponent } from './launch-schedule.component';
import { LaunchLibraryService } from '../_services/launchLibrary.service';
import { HttpClientModule } from '@angular/common/http';
import { Launch } from '../_models/launch';

describe('LaunchScheduleComponent', () => {
  let component: LaunchScheduleComponent;
  let fixture: ComponentFixture<LaunchScheduleComponent>;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        LaunchScheduleComponent
      ],
      providers: [
        LaunchLibraryService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchScheduleComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
