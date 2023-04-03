"use strict";
exports.__esModule = true;
exports.Director = void 0;
var DSAStudentBuilder_1 = require("./DSAStudentBuilder");
var MBAStudentBuilder_1 = require("./MBAStudentBuilder");
var Director = /** @class */ (function () {
    function Director(studentBuilder) {
        this.studentBuilder = studentBuilder;
    }
    Director.prototype.createStudent = function () {
        if (this.studentBuilder instanceof DSAStudentBuilder_1.DSAStudentBuilder) {
            return this.createEngineeringStudent();
        }
        else if (this.studentBuilder instanceof MBAStudentBuilder_1.MBAStudentBuilder) {
            return this.createMBAStudent();
        }
        else {
            return null;
        }
    };
    Director.prototype.createEngineeringStudent = function () {
        return this.studentBuilder.setRollNumber(10).setName("Prithwish").setEmail("pri@gmail.com").setSubjects().build();
    };
    Director.prototype.createMBAStudent = function () {
        return this.studentBuilder.setRollNumber(18).setName("Abhishek").setEmail("abhi@gmail.com").setSubjects().build();
    };
    return Director;
}());
exports.Director = Director;
