"use strict";
exports.__esModule = true;
var Singleton_1 = require("./Singleton");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var singleton1 = Singleton_1.SingleTon.getInstance();
        var singleton2 = Singleton_1.SingleTon.getInstance();
        if (singleton1 === singleton2) {
            console.log("Singleton");
            console.log(singleton1);
        }
        else {
            console.log("Not a Singleton");
        }
    };
    return Main;
}());
var main = new Main();
main.main();
