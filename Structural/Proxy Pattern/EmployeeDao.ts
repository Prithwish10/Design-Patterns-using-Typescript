import { Employee } from "./Employee";

export interface EmployeeDao {
    create(client: string, employeeObj: Employee): Employee;
    delete(client: string, employeeId: number): void;
    get(client: string, employeeName: string, employeeId: number): Employee;
}