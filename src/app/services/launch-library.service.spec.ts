import { TestBed } from '@angular/core/testing';

import { LaunchLibraryService } from './launch-library.service';

describe('LaunchLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchLibraryService = TestBed.get(LaunchLibraryService);
    expect(service).toBeTruthy();
  });
});
