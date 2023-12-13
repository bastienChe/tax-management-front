import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {BrowserModule} from "@angular/platform-browser";
import {WebcamImage, WebcamInitError, WebcamModule} from "ngx-webcam";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-vat-credit-add',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, FormsModule, WebcamModule, CommonModule],
  templateUrl: './vat-credit-add.component.html',
  styleUrl: './vat-credit-add.component.css'
})
export class VatCreditAddComponent {

  capturedImage: WebcamImage | undefined;

  handleImageCapture(webcamImage: WebcamImage) {
    this.capturedImage = webcamImage;
  }

  handleCameraSwitch(event: any) {
    // Handle camera switch event if needed
  }

  handleInitError(error: WebcamInitError) {
    console.error('Error initializing webcam:', error);
  }

  onSubmit() {
    // Handle form submission with the captured image here
    if (this.capturedImage) {
      console.log('Captured Image:', this.capturedImage);
      // You can send the captured image to your server or process it further
    }
  }
}
