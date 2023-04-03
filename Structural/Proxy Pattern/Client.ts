import { Employee } from "./Employee";
import { EmployeeDao } from "./EmployeeDao";
import { EmployeeDaoProxy } from "./EmployeeDaoProxy";

export class Client {
    public static main(): void {
        try {
            const employeeDao: EmployeeDao = new EmployeeDaoProxy();
            const newEmployee: Employee = employeeDao.create("ADMIN", new Employee(1, "Demo"));
            console.log("Operation successfull "+newEmployee);
        } catch(error) {
            if(error instanceof Error)
                console.log(error.message);
            
        }
    }
}

Client.main()