import { TestBed } from '@angular/core/testing';

import { VatCreditService } from './vat-credit.service';

describe('VatCreditService', () => {
  let service: VatCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VatCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
