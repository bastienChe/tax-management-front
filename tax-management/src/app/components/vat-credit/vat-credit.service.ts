import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatCreditService {

  private URL_VAT_CREDIT_ADD = 'http://localhost:8080/vat-credit'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  createVatCredit(formData: any): Observable<any> {
    return this.http.post(this.URL_VAT_CREDIT_ADD, formData);
  }

}