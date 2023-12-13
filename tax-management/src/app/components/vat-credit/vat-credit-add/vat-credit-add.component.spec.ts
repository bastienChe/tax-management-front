import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatCreditAddComponent } from './vat-credit-add.component';

describe('VatCreditAddComponent', () => {
  let component: VatCreditAddComponent;
  let fixture: ComponentFixture<VatCreditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatCreditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatCreditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
