import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatCreditForMonthComponent } from './vat-credit-for-month.component';

describe('VatCreditForMonthComponent', () => {
  let component: VatCreditForMonthComponent;
  let fixture: ComponentFixture<VatCreditForMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatCreditForMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatCreditForMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
