import { TestBed, inject } from '@angular/core/testing';

import { MovieManagerService } from './movie-manager.service';

describe('MovieManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieManagerService]
    });
  });

  it('should be created', inject([MovieManagerService], (service: MovieManagerService) => {
    expect(service).toBeTruthy();
  }));
});
