import { TestBed } from '@angular/core/testing';

import { AdmainSerivesService } from './admain-serives.service';

describe('AdmainSerivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmainSerivesService = TestBed.get(AdmainSerivesService);
    expect(service).toBeTruthy();
  });
});
