import { Employee } from "./Employee";
import { EmployeeDao } from "./EmployeeDao";

export class EmployeeDaoImpl implements EmployeeDao {
    create(client: string, employeeObj: Employee): Employee {
        console.log("Creating new Employee.");

        // Insert into db
        return new Employee(1, "Prithwish");

    }
    delete(client: string, employeeId: number): void {
        console.log("Deleted employee eith employeeId "+employeeId);
    }
    get(client: string, employeeName: string, employeeId: number): Employee {
        console.log("Fetching data from db");
        return new Employee(employeeId, employeeName);
    }
    
}