"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Director_1 = require("./Director");
var DSAStudentBuilder_1 = require("./DSAStudentBuilder");
var MBAStudentBuilder_1 = require("./MBAStudentBuilder");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function () {
        var directorObj1 = new Director_1.Director(new DSAStudentBuilder_1.DSAStudentBuilder());
        var directorObj2 = new Director_1.Director(new MBAStudentBuilder_1.MBAStudentBuilder());
        var engineeringStudent = directorObj1.createStudent();
        var mbaStudent = directorObj2.createStudent();
        console.log(engineeringStudent === null || engineeringStudent === void 0 ? void 0 : engineeringStudent.toString());
        console.log(mbaStudent === null || mbaStudent === void 0 ? void 0 : mbaStudent.toString());
    };
    return Client;
}());
exports.Client = Client;
Client.main();
