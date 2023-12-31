import { Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {VatCreditAddComponent} from "./components/vat-credit/vat-credit-add/vat-credit-add.component";
import {VatCreditListComponent} from "./components/vat-credit/vat-credit-list/vat-credit-list.component";
import { VatCreditDetailComponent } from './components/vat-credit/vat-credit-detail/vat-credit-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'vat-credit',
    component: VatCreditListComponent
  },
  {
    path: 'vat-credit/:id',
    component: VatCreditDetailComponent
  },
  {
    path: 'vat-credit-add',
    component: VatCreditAddComponent
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];
