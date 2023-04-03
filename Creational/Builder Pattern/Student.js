"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(builder) {
        this.rollNumber = builder.rollNumber;
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
        this.subjects = builder.subjects;
    }
    Student.prototype.toString = function () {
        return ("" +
            " Roll number: " +
            this.rollNumber + ", " +
            " Name: " +
            this.name + ", " +
            " Age: " +
            this.age + ", " +
            " Email: " +
            this.email + ", " +
            " Subjects: " +
            "[" + this.subjects + "]");
    };
    return Student;
}());
exports.Student = Student;
