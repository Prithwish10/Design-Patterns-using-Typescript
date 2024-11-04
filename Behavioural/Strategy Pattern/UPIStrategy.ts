import { IPaymentStrategy } from "./IPaymentStrategy";

export class UPIStrategy implements IPaymentStrategy {
  constructor(private upiId: string) {}

  async pay(amount: number): Promise<void> {
    // Implement UPI payment logic using upiId
    console.log(
      `Processing UPI payment of ₹${amount} for UPI ID: ${this.upiId}`
    );
  }
}
