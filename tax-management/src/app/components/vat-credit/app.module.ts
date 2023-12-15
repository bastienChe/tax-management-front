// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {VatCreditService} from "./vat-credit.service";

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [VatCreditService]
})
export class AppModule {}
