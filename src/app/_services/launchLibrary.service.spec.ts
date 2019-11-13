import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LaunchLibraryService } from './launchLibrary.service';

describe('LaunchLibraryService', () => {
  let service: LaunchLibraryService;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule],
          providers: [LaunchLibraryService]
      });
      service = TestBed.get(LaunchLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
