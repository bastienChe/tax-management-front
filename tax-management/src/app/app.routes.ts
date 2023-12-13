import { Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {VatCreditAddComponent} from "./components/vat-credit/vat-credit-add/vat-credit-add.component";
import {VatCreditListComponent} from "./components/vat-credit/vat-credit-list/vat-credit-list.component";
import {VatCreditForMonthComponent} from "./components/vat-credit/vat-credit-for-month/vat-credit-for-month.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'vat-credit-add',
    component: VatCreditAddComponent
  },
  {
    path: 'vat-credit-list',
    component: VatCreditListComponent
  },
  {
    path: 'vat-credit-add',
    component: VatCreditAddComponent
  },
  {
    path: 'vat-credit-for-month',
    component: VatCreditForMonthComponent
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];
