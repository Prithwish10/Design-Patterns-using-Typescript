"use strict";
exports.__esModule = true;
exports.StudentBuilder = void 0;
var Student_1 = require("./Student");
var StudentBuilder = /** @class */ (function () {
    function StudentBuilder() {
    }
    StudentBuilder.prototype.setRollNumber = function (rollNumber) {
        this.rollNumber = rollNumber;
        return this;
    };
    StudentBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StudentBuilder.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    StudentBuilder.prototype.build = function () {
        return new Student_1.Student(this);
    };
    return StudentBuilder;
}());
exports.StudentBuilder = StudentBuilder;
