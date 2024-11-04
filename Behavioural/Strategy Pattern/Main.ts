import { DebitCardPayment } from "./DebitCardStrategy";
import { ShoppingCart } from "./ShoppingCart";
import { UPIStrategy } from "./UPIStrategy";

async function main() {
    const amount = 500;
    const upiPayment = new UPIStrategy('user@api');
    let cart = new ShoppingCart(upiPayment);
    await cart.executePayment(amount);

    const debitCardPayment = new DebitCardPayment(
      "1234-5678-9012-3456",
      "12/25",
      "123"
    );
    cart = new ShoppingCart(debitCardPayment);
    await cart.executePayment(amount);
}

(async () => {
  await main();
})();
