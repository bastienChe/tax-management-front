import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VatCreditAddComponent} from "./vat-credit-add/vat-credit-add.component";
import {VatCreditListComponent} from "./vat-credit-list/vat-credit-list.component";
import {VatCreditDetailComponent} from "./vat-credit-detail/vat-credit-detail.component";
import {VatCreditForMonthComponent} from "./vat-credit-for-month/vat-credit-for-month.component";



@NgModule({
  declarations: [VatCreditAddComponent, VatCreditListComponent, VatCreditDetailComponent, VatCreditForMonthComponent],
  imports: [
    CommonModule
  ],
  exports: [VatCreditAddComponent, VatCreditListComponent, VatCreditDetailComponent, VatCreditForMonthComponent]
})
export class VatCreditModule { }
