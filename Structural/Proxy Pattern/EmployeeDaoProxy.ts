import { Employee } from "./Employee";
import { EmployeeDao } from "./EmployeeDao";
import { EmployeeDaoImpl } from "./EmployeeDaoImpl";

export class EmployeeDaoProxy implements EmployeeDao {
    employeeDaoImpl: EmployeeDaoImpl;

    constructor() {
        this.employeeDaoImpl = new EmployeeDaoImpl();
    }

    create(client: string, employeeObj: Employee): Employee {
        if(client === "ADMIN") {
            return this.employeeDaoImpl.create(client, employeeObj);
        }
        throw new Error("Access Denied");
    }
    delete(client: string, employeeId: number): void {
        if(client === "ADMIN") {
            this.employeeDaoImpl.delete(client, employeeId);
            return;
        }
        throw new Error("Access Denied");
    }
    get(client: string, employeeName: string, employeeId: number): Employee {
        if(client === "ADMIN" || client === "USER") {
            return this.employeeDaoImpl.get(client, employeeName, employeeId);
        }
        throw new Error("Access Denied");
    }

}