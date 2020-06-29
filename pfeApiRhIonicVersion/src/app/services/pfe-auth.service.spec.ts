import { TestBed } from '@angular/core/testing';

import { PfeAuthService } from './pfe-auth.service';

describe('PfeAuthService', () => {
  let service: PfeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
