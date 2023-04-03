"use strict";
exports.__esModule = true;
exports.EmployeeDaoImpl = void 0;
var Employee_1 = require("./Employee");
var EmployeeDaoImpl = /** @class */ (function () {
    function EmployeeDaoImpl() {
    }
    EmployeeDaoImpl.prototype.create = function (client, employeeObj) {
        console.log("Creating new Employee.");
        // Insert into db
        return new Employee_1.Employee(1, "Prithwish");
    };
    EmployeeDaoImpl.prototype["delete"] = function (client, employeeId) {
        console.log("Deleted employee eith employeeId " + employeeId);
    };
    EmployeeDaoImpl.prototype.get = function (client, employeeName, employeeId) {
        console.log("Fetching data from db");
        return new Employee_1.Employee(employeeId, employeeName);
    };
    return EmployeeDaoImpl;
}());
exports.EmployeeDaoImpl = EmployeeDaoImpl;
