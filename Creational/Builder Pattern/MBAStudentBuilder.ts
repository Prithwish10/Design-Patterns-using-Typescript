import { StudentBuilder } from "./StudentBuilder";

export class MBAStudentBuilder extends StudentBuilder {
    public setSubjects(): StudentBuilder {
        const subjects: string[] = [];
        subjects.push("Business Studies");
        subjects.push("Micro Economics");
        subjects.push("Communication");
        this.subjects = subjects;
        
        return this;
    }
}