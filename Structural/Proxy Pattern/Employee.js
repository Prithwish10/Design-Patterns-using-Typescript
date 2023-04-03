"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // private employeeId: string;
    // private employeeName: string;
    function Employee(employeeId, employeeName) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    Employee.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    Employee.prototype.setEmployeeId = function (employeeId) {
        this.employeeId = employeeId;
    };
    Employee.prototype.setEmployeeName = function (employeeName) {
        this.employeeName = employeeName;
    };
    return Employee;
}());
exports.Employee = Employee;
