import { TestBed } from '@angular/core/testing';

import { LaunchService } from './launch.service';
import { LaunchResponse } from './launch-response';
import { HttpClientModule } from '@angular/common/http';

describe('LaunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LaunchService = TestBed.get(LaunchService);
    expect(service).toBeTruthy();
  });

  it('getNextLaunches should return the given number of launches', () => {
    const service: LaunchService = TestBed.get(LaunchService);

    service.getNextLaunches(10).subscribe((data: LaunchResponse) => {
      expect(data.total).toBe(10);
    });
  });
});
