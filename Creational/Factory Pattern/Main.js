"use strict";
exports.__esModule = true;
var ShapeFactory_1 = require("./ShapeFactory");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var shapeFactory = new ShapeFactory_1.ShapeFactory();
        var shape = shapeFactory.getShape("CIRCLE");
        shape === null || shape === void 0 ? void 0 : shape.draw();
    };
    return Main;
}());
Main.main();
