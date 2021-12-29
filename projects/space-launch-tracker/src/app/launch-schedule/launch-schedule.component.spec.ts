import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineResponse20022, LaunchService } from 'launch-library-client';
import { of } from 'rxjs';

import { LaunchScheduleComponent } from './launch-schedule.component';

describe('LaunchScheduleComponent', () => {
  let component: LaunchScheduleComponent;
  let fixture: ComponentFixture<LaunchScheduleComponent>;

  beforeEach(async () => {
    const mockLaunchService = jasmine.createSpyObj('LaunchService', ['launchUpcomingList']);

    const mockLaunchUpcomingListResponse: InlineResponse20022 = {
      count: 0,
      results: []
    };

    let launchUpcomingListSpy = mockLaunchService.launchUpcomingList.and.returnValue(of(mockLaunchUpcomingListResponse));

    await TestBed.configureTestingModule({
      declarations: [ LaunchScheduleComponent ],
      providers: [ { provide: LaunchService, useValue: mockLaunchService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});