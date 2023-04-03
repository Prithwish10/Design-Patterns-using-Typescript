import { StudentBuilder } from "./StudentBuilder";

export class DSAStudentBuilder extends StudentBuilder {
    public setSubjects(): StudentBuilder {
        const subjects: string[] = [];
        subjects.push("DSA");
        subjects.push("OS");
        subjects.push("DBMS");
        subjects.push("System Design");
        subjects.push("CN");
        this.subjects = subjects;
       
        return this;
    }
}