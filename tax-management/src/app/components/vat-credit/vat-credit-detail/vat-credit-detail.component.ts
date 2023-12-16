import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VatCreditService } from '../vat-credit.service';

@Component({
  selector: 'app-vat-credit-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './vat-credit-detail.component.html',
  styleUrl: './vat-credit-detail.component.css',
  providers: [VatCreditService]
})
export class VatCreditDetailComponent {
  id: string;

  constructor(private route: ActivatedRoute, private vatCreditService: VatCreditService) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.fetchVatCredit();
    });
  }

  fetchVatCredit() {
    // Use your API service to fetch data based on the id
    this.vatCreditService.getDataById(this.id).subscribe(
      (data) => {
        // Handle the fetched data
        console.log(data);
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    );
  }

}
