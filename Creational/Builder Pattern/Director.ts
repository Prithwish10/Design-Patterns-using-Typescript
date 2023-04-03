import { DSAStudentBuilder } from "./DSAStudentBuilder";
import { MBAStudentBuilder } from "./MBAStudentBuilder";
import { Student } from "./Student";
import { StudentBuilder } from "./StudentBuilder";

export class Director {
    studentBuilder: StudentBuilder

    constructor(studentBuilder: StudentBuilder) {
        this.studentBuilder = studentBuilder;
    }

    public createStudent(): Student | null {
        if(this.studentBuilder instanceof DSAStudentBuilder) {
            return this.createEngineeringStudent();
        } else if(this.studentBuilder instanceof MBAStudentBuilder) {
            return this.createMBAStudent();
        } else {
            return null;
        }
    }

    private createEngineeringStudent(): Student {
        return this.studentBuilder.setRollNumber(10).setName("Prithwish").setEmail("pri@gmail.com").setSubjects().build();
    }

    private createMBAStudent(): Student {
        return this.studentBuilder.setRollNumber(18).setName("Abhishek").setEmail("abhi@gmail.com").setSubjects().build();
    }
}