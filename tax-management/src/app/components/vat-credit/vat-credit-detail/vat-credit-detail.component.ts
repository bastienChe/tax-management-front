import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VatCredit } from '../../../core/models/VatCredit';
import { VatCreditService } from '../vat-credit.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  thumbnail: any;

  constructor(private route: ActivatedRoute, private vatCreditService: VatCreditService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.fetchVatCredit();
    });
  }

  fetchVatCredit() {
    // Use your API service to fetch data based on the id
    this.vatCreditService.getDataById(this.id).subscribe(
      (data: VatCredit) => {
        let objectURL = 'data:image/jpeg;base64,' + data.picture;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
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
