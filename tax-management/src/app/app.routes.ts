import { Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {VatCreditComponent} from "./components/vat-credit/vat-credit.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'vat-credit',
    component: VatCreditComponent
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];
