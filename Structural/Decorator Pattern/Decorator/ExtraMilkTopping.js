"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ExtraMilkTopping = void 0;
var ToppingDecorator_1 = require("./ToppingDecorator");
var ExtraMilkTopping = /** @class */ (function (_super) {
    __extends(ExtraMilkTopping, _super);
    function ExtraMilkTopping(coffee) {
        var _this = _super.call(this) || this;
        _this.coffee = coffee;
        return _this;
    }
    ExtraMilkTopping.prototype.cost = function () {
        return this.coffee.cost() + 100;
    };
    return ExtraMilkTopping;
}(ToppingDecorator_1.ToppingDecorator));
exports.ExtraMilkTopping = ExtraMilkTopping;
