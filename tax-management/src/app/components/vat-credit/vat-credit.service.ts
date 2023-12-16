import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatCreditService {
  private URL_VAT_CREDIT_API = 'http://localhost:8080/api/vat-credit'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  createVatCredit(formData: FormData): Observable<any> {
    console.log(formData);
    return this.http.post(this.URL_VAT_CREDIT_API, formData);
  }
  
  getDataById(id: string) {
    return this.http.get(this.URL_VAT_CREDIT_API+"/"+id);
  }

}
