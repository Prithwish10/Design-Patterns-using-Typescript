"use strict";
exports.__esModule = true;
exports.SingleTon = void 0;
var SingleTon = /** @class */ (function () {
    function SingleTon() {
    }
    SingleTon.getInstance = function () {
        if (SingleTon.instance == null) {
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    };
    return SingleTon;
}());
exports.SingleTon = SingleTon;
