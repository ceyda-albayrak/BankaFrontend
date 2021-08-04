import { TestBed } from '@angular/core/testing';

import { HesapService } from './hesap.service';

describe('HesapService', () => {
  let service: HesapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HesapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
