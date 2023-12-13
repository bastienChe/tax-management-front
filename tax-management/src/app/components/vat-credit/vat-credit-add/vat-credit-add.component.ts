import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-vat-credit-add',
  standalone: true,
  imports: [MatIconModule, HttpClientModule],
  templateUrl: './vat-credit-add.component.html',
  styleUrl: './vat-credit-add.component.css'
})
export class VatCreditAddComponent {


  fileName = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;


    if (fileList != null && fileList[0] != null) {

      const file:File = fileList[0];
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }

}
