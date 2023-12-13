import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatCreditDetailComponent } from './vat-credit-detail.component';

describe('VatCreditDetailComponent', () => {
  let component: VatCreditDetailComponent;
  let fixture: ComponentFixture<VatCreditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatCreditDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatCreditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
