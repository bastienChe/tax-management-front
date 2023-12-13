import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatCreditListComponent } from './vat-credit-list.component';

describe('VatCreditListComponent', () => {
  let component: VatCreditListComponent;
  let fixture: ComponentFixture<VatCreditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatCreditListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
