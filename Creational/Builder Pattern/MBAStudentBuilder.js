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
exports.MBAStudentBuilder = void 0;
var StudentBuilder_1 = require("./StudentBuilder");
var MBAStudentBuilder = /** @class */ (function (_super) {
    __extends(MBAStudentBuilder, _super);
    function MBAStudentBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MBAStudentBuilder.prototype.setSubjects = function () {
        var subjects = [];
        subjects.push("Business Studies");
        subjects.push("Micro Economics");
        subjects.push("Communication");
        this.subjects = subjects;
        return this;
    };
    return MBAStudentBuilder;
}(StudentBuilder_1.StudentBuilder));
exports.MBAStudentBuilder = MBAStudentBuilder;
