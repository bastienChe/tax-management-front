import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VatCreditService} from "../vat-credit.service";


@Component({
  selector: 'app-vat-credit-add',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './vat-credit-add.component.html',
  styleUrl: './vat-credit-add.component.css',
  providers:  [ VatCreditService ]
})
export class VatCreditAddComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private vatCreditService: VatCreditService) {   
    this.form = this.fb.group({
      price: [0],
      date: [""],
      category: [""
      ],
      categoryExplanation: [""],
      fileInput: [null]
    });
  }

  listOptions = [
    { name: "ESSENCE" },
    { name: "ELECTRICITE" },
    { name: "REPAS" },
    { name: "INTERNET" },
    { name: "TELEPHONE" },
    { name: "AUTRE" }
  ];

  onSubmit() {
    
    const formData = new FormData();
    formData.append('price', this.form.value.price);
    formData.append('date', this.form.value.date);
    formData.append('categorytOptions', this.form.value.categorytOptions);
    formData.append('categoryExplanation', this.form.value.categoryExplanation);
    formData.append('file', this.form.value.fileInput);

    this.vatCreditService.createVatCredit(formData).subscribe(
      (response) => {
        console.log('Form data sent successfully:', response);
        // Handle the response from the server if needed
      },
      (error) => {
        console.error('Error sending form data:', error);
        // Handle errors if needed
      }
    );
  }
}
