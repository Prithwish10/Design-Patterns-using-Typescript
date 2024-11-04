import { IPaymentStrategy } from "./IPaymentStrategy";

export class ShoppingCart {
    private strategy: IPaymentStrategy;

    constructor(strategy: IPaymentStrategy) {
        this.strategy = strategy;
    }

    async executePayment(amount: number): Promise<void> {
        await this.strategy.pay(amount);
    }
}