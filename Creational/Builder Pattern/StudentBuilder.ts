import { Student } from "./Student";

export abstract class StudentBuilder {
  rollNumber: number;
  name: string;
  age: number;
  email: string;
  subjects: string[];

  public setRollNumber(rollNumber: number): StudentBuilder {
    this.rollNumber = rollNumber
    return this;
  }

  public setName(name: string): StudentBuilder {
    this.name = name
    return this;
  }

  public setEmail(email: string): StudentBuilder {
    this.email = email
    return this;
  }

  public abstract setSubjects(): StudentBuilder;

  public build(): Student {
    return new Student(this);
  }
}
