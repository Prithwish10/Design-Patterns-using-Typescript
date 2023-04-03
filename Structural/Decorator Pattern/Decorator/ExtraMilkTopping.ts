import { BaseCoffee } from "../BaseCoffee/BaseCoffee";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraMilkTopping extends ToppingDecorator {
    coffee: BaseCoffee;

    constructor(coffee: BaseCoffee) {
        super();
        this.coffee = coffee;
    }
    cost(): number {
        return this.coffee.cost() + 100;
    }
}