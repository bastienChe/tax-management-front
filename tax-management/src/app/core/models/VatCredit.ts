export interface VatCredit {
    idVatCredit: number,
    price: number,
    date: Date,
    category: VatCreditCategory,
    categoryExplanation: string,
    picture: File
}

export enum VatCreditCategory {
    ESSENCE, ELECTRICITE, REPAS, INTERNET, TELEPHONE, AUTRE
  }