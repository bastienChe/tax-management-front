import { Component } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VatCreditService} from "../vat-credit.service";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-vat-credit-add',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './vat-credit-add.component.html',
  styleUrl: './vat-credit-add.component.css',
  providers: [VatCreditService, DatePipe]
})
export class VatCreditAddComponent {
  form: FormGroup;
  fileUploaded: File;
  categoryOptions = [
    { name: "ESSENCE" },
    { name: "ELECTRICITE" },
    { name: "REPAS" },
    { name: "INTERNET" },
    { name: "TELEPHONE" },
    { name: "AUTRE" }
  ];
  fromDate: any;

  constructor(private fb: FormBuilder, private vatCreditService: VatCreditService, private datePipe: DatePipe) {   
    this.form = this.fb.group({
      price: [null, Validators.required],
      date: ["", Validators.required],
      category: ["", Validators.required],
      categoryExplanation: [""],
      fileInput: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.fromDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  onFileChange(event: any): void {
    const file:File = event.target.files[0];
    if (file) {
      this.fileUploaded = file;
    }
  }

  onSubmit() {
    const formData = new FormData();

    if (this.form.valid) { 
      formData.append('price', this.form.value.price);
      formData.append('date', this.form.value.date);
      formData.append('category', this.form.value.category);
      formData.append('categoryExplanation', this.form.value.categoryExplanation);
      formData.append('file', this.fileUploaded);

      this.vatCreditService.createVatCredit(formData).subscribe(
        (response) => {
          this.vatCreditHttpResultOk(true, "VAT Credit was sent with success.");
        },
        (error) => {
          this.vatCreditHttpResultOk(false, "There was a problem while sending VAT Credit. " + error.message);
        });
      } else {
        document.getElementById('price')?.classList.remove("required-field");
        document.getElementById('date')?.classList.remove("required-field");
        document.getElementById('category')?.classList.remove("required-field");
        document.getElementById('fileInput')?.classList.remove("required-field");
        if (this.form.value.price == null) document.getElementById('price')?.classList.add("required-field");
        if (this.form.value.date == "") document.getElementById('date')?.classList.add("required-field");
        if (this.form.value.category == "") document.getElementById('category')?.classList.add("required-field");
        if (this.form.value.fileInput == null) document.getElementById('fileInput')?.classList.add("required-field");
        this.form.markAllAsTouched();
      }
  }

  vatCreditHttpResultOk(success: boolean, message: string) {
    const alertElement = document.getElementById('alert');
    if (alertElement != null) {

      if (success) {
      alertElement?.classList.remove("alert-danger");
      alertElement?.classList.add("alert-success");
      } else {
        alertElement?.classList.add("alert-danger");
        alertElement?.classList.remove("alert-success");
      }

      alertElement?.classList.add("show");
      alertElement.innerHTML = message;
      setTimeout(() => {
        alertElement?.classList.remove("show");
        alertElement?.classList.add("hide");
      }, 5000);

      this.form.value.price = null;
      this.form.value.category = null;
      this.form.value.fileInput = null;
      this.form.value.categoryExplanation = null;
    }
  }

}
