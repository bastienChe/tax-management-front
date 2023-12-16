export interface VatCredit {
    price: number,
    date: Date,
    category: VatCreditCategory,
    categoryExplanation: string,
    fileInput: File
}

export enum VatCreditCategory {
    ESSENCE, ELECTRICITE, REPAS, INTERNET, TELEPHONE, AUTRE
  }