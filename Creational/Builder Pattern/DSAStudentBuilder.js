"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DSAStudentBuilder = void 0;
var StudentBuilder_1 = require("./StudentBuilder");
var DSAStudentBuilder = /** @class */ (function (_super) {
    __extends(DSAStudentBuilder, _super);
    function DSAStudentBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSAStudentBuilder.prototype.setSubjects = function () {
        var subjects = [];
        subjects.push("DSA");
        subjects.push("OS");
        subjects.push("DBMS");
        subjects.push("System Design");
        subjects.push("CN");
        this.subjects = subjects;
        return this;
    };
    return DSAStudentBuilder;
}(StudentBuilder_1.StudentBuilder));
exports.DSAStudentBuilder = DSAStudentBuilder;
