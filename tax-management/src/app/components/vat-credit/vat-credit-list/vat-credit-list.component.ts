import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {VatCredit, VatCreditCategory} from '../../../core/models/VatCredit';
import {VatCreditService} from '../vat-credit.service';

@Component({
  selector: 'app-vat-credit-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './vat-credit-list.component.html',
  styleUrl: './vat-credit-list.component.css',
  providers: [VatCreditService]
})
export class VatCreditListComponent {

  monthsNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  displayedDate = new Date();
  displayedMonth: number = this.displayedDate.getMonth();
  displayedMonthName: string = this.monthsNames[this.displayedMonth];
  displayedYear: number = new Date().getFullYear();
  totalDeductionsForMonth: number;

  vatCredits: VatCredit[];

  constructor(private vatCreditService: VatCreditService) {}

  ngOnInit(): void {
    const dateStart: string = this.displayedYear+"-"+this.displayedMonth+"-01";
    const dateEnd: string = this.displayedYear+"-"+this.displayedMonth+"-30";
    this.refreshDates();
  }

  changeDisplayedMonth(step: string) {
    console.log("step" + step);
    if (step === "before") {
      this.displayedDate.setMonth(this.displayedDate.getMonth()-1);
    }
    else if (step === "after") {
      this.displayedDate.setMonth(this.displayedDate.getMonth()+1);
    }
    this.refreshDates();
  }

  refreshDates() {
    this.displayedMonth = this.displayedDate.getMonth();
    this.displayedMonthName = this.monthsNames[this.displayedMonth];
    this.displayedYear = this.displayedDate.getFullYear();

    const monthRequest: number = this.displayedDate.getMonth()+1;
    const monthRequestAsString: string = monthRequest < 10 ? "0"+monthRequest : ""+monthRequest;

    const dateStart: string = this.displayedYear+"-"+monthRequestAsString+"-01";
    const dateEnd: string = this.displayedYear+"-"+monthRequestAsString+"-30";
    this.fetchVatCredit(dateStart, dateEnd);
  }

  fetchVatCredit(dateStart: string, dateEnd: string) {
    this.totalDeductionsForMonth = 0;
    this.vatCreditService.getData(dateStart, dateEnd).subscribe(
      (data : VatCredit[]) => {
        this.vatCredits = data;
        this.vatCredits.forEach(
          value => {
            value.finalDeduction = this.getFinalDeduction(value.price, value.category);
            this.totalDeductionsForMonth+=value.finalDeduction;
          }
        )
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getFinalDeduction(price: number, category: VatCreditCategory): number {

    console.log(category)
    switch (""+category) {
      case "AUTRE":
        return price;
        break;

      case "VatCreditCategory":
        return (price * (100/100))*(70/100);
        break;

      case "ESSENCE":
        return (price * (80/100))*(70/100);
        break;

      case "INTERNET":
        return (price * (100/100))*(70/100);
        break;

      case "REPAS":
        return price;
        break;

      case "TELEPHONE":
        return (price * (100/100))*(70/100);
        break;

    }
    return 0;
  }

}
