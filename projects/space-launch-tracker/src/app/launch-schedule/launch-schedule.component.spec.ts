import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchScheduleComponent } from './launch-schedule.component';

describe('LaunchScheduleComponent', () => {
  let component: LaunchScheduleComponent;
  let fixture: ComponentFixture<LaunchScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchScheduleComponent ]
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
