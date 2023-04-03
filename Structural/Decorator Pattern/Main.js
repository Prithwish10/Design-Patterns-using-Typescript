"use strict";
exports.__esModule = true;
var Cappuccino_1 = require("./BaseCoffee/Cappuccino");
var ChocoChipsTopping_1 = require("./Decorator/ChocoChipsTopping");
var ExtraMilkTopping_1 = require("./Decorator/ExtraMilkTopping");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var coffee = new ExtraMilkTopping_1.ExtraMilkTopping(new Cappuccino_1.Cappuccino());
        var cost = coffee.cost();
        console.log('Cost of cappuccino with extra Milk is: Rs.', cost);
        var coffee1 = new ChocoChipsTopping_1.ChocoChipsTopping(new ExtraMilkTopping_1.ExtraMilkTopping(new Cappuccino_1.Cappuccino()));
        var cost1 = coffee1.cost();
        console.log('Cost of cappuccino with extra Milk and choco-chip topping is: Rs.', cost1);
    };
    return Main;
}());
Main.main();
