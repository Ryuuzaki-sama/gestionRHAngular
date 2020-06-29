import { TestBed } from '@angular/core/testing';

import { PfeApiRhService } from './pfe-api-rh.service';

describe('PfeApiRhService', () => {
  let service: PfeApiRhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfeApiRhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
