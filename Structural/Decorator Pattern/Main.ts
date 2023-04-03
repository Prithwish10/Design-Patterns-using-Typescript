import { Cappuccino } from "./BaseCoffee/Cappuccino";
import { ChocoChipsTopping } from "./Decorator/ChocoChipsTopping";
import { ExtraMilkTopping } from "./Decorator/ExtraMilkTopping";

class Main {
    public static main(): void {
        const coffee = new ExtraMilkTopping(new Cappuccino());
        const cost = coffee.cost();
        console.log('Cost of cappuccino with extra Milk is: Rs.',cost);

        const coffee1 = new ChocoChipsTopping(new ExtraMilkTopping(new Cappuccino()));
        const cost1 = coffee1.cost();
        console.log('Cost of cappuccino with extra Milk and choco-chip topping is: Rs.',cost1);
    }
}

Main.main();