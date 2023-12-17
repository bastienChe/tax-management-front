import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VatCredit } from '../../../core/models/VatCredit';
import { VatCreditService } from '../vat-credit.service';

@Component({
  selector: 'app-vat-credit-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './vat-credit-list.component.html',
  styleUrl: './vat-credit-list.component.css',
  providers: [VatCreditService]
})
export class VatCreditListComponent {
  moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  dateDuJour: Date = new Date() ;
  moisCourant: string = this.moisNoms[this.dateDuJour.getMonth()];
  vatCredits: any;

  constructor(private vatCreditService: VatCreditService) {}

  
  ngOnInit(): void {
    this.fetchVatCredit();
  }

  fetchVatCredit() {
    // Use your API service to fetch data based on the id
    this.vatCreditService.getData().subscribe(
      (data : VatCredit[]) => {
        console.log(data);
        this.vatCredits = data;
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    );
  }

}
