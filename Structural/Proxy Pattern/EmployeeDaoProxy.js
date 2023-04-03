"use strict";
exports.__esModule = true;
exports.EmployeeDaoProxy = void 0;
var EmployeeDaoImpl_1 = require("./EmployeeDaoImpl");
var EmployeeDaoProxy = /** @class */ (function () {
    function EmployeeDaoProxy() {
        this.employeeDaoImpl = new EmployeeDaoImpl_1.EmployeeDaoImpl();
    }
    EmployeeDaoProxy.prototype.create = function (client, employeeObj) {
        if (client === "ADMIN") {
            return this.employeeDaoImpl.create(client, employeeObj);
        }
        throw new Error("Access Denied");
    };
    EmployeeDaoProxy.prototype["delete"] = function (client, employeeId) {
        if (client === "ADMIN") {
            this.employeeDaoImpl["delete"](client, employeeId);
            return;
        }
        throw new Error("Access Denied");
    };
    EmployeeDaoProxy.prototype.get = function (client, employeeName, employeeId) {
        if (client === "ADMIN" || client === "USER") {
            return this.employeeDaoImpl.get(client, employeeName, employeeId);
        }
        throw new Error("Access Denied");
    };
    return EmployeeDaoProxy;
}());
exports.EmployeeDaoProxy = EmployeeDaoProxy;
