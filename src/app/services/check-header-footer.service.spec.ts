import { TestBed } from '@angular/core/testing';

import { CheckHeaderFooterService } from './check-header-footer.service';

describe('CheckHeaderFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckHeaderFooterService = TestBed.get(CheckHeaderFooterService);
    expect(service).toBeTruthy();
  });
});
