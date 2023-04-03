import { Director } from "./Director";
import { DSAStudentBuilder } from "./DSAStudentBuilder";
import { MBAStudentBuilder } from "./MBAStudentBuilder";

export class Client {
  public static main(): void {
    const directorObj1 = new Director(new DSAStudentBuilder());
    const directorObj2 = new Director(new MBAStudentBuilder());

    const engineeringStudent = directorObj1.createStudent();
    const mbaStudent = directorObj2.createStudent();

    console.log(engineeringStudent?.toString());
    console.log(mbaStudent?.toString());
  }
}

Client.main();
