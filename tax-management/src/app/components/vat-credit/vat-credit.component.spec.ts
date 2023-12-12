import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatCreditComponent } from './vat-credit.component';

describe('VatCreditComponent', () => {
  let component: VatCreditComponent;
  let fixture: ComponentFixture<VatCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatCreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
