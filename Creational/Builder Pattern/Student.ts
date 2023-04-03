import { StudentBuilder } from "./StudentBuilder";

export class Student {
  rollNumber: number;
  name: string;
  age: number;
  email: string;
  subjects: string[];

  public constructor(builder: StudentBuilder) {
    this.rollNumber = builder.rollNumber;
    this.name = builder.name;
    this.age = builder.age;
    this.email = builder.email;
    this.subjects = builder.subjects;
  }

  public toString(): string {
    return (
      "" +
      " Roll number: " +
      this.rollNumber +
      ", " +
      " Name: " +
      this.name +
      ", " +
      " Age: " +
      this.age +
      ", " +
      " Email: " +
      this.email +
      ", " +
      " Subjects: " +
      "[" +
      this.subjects +
      "]"
    );
  }
}
