export interface VatCredit {
    idVatCredit: number,
    price: number,
    date: Date,
    category: VatCreditCategory,
    categoryExplanation: string,
    picture: File,
    finalDeduction: number
}

export enum VatCreditCategory {
    ESSENCE, ELECTRICITE, REPAS, INTERNET, TELEPHONE, AUTRE
  }
