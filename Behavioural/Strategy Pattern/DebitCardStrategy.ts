import { IPaymentStrategy } from "./IPaymentStrategy";

export class DebitCardPayment implements IPaymentStrategy {
  constructor(
    private cardNumber: string,
    private expiryDate: string,
    private cvv: string
  ) {}

  async pay(amount: number): Promise<void> {
    // Implement debit card payment logic using this.cardNumber, this.expiryDate, and this.cvv
    console.log(
      `Paid ${amount} using Debit Card. Card Number: ${this.cardNumber}`
    );
  }
}
