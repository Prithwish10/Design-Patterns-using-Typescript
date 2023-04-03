"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Employee_1 = require("./Employee");
var EmployeeDaoProxy_1 = require("./EmployeeDaoProxy");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function () {
        try {
            var employeeDao = new EmployeeDaoProxy_1.EmployeeDaoProxy();
            var newEmployee = employeeDao.create("ADMIN", new Employee_1.Employee(1, "Demo"));
            console.log("Operation successfull " + newEmployee);
        }
        catch (error) {
            if (error instanceof Error)
                console.log(error.message);
        }
    };
    return Client;
}());
exports.Client = Client;
Client.main();
