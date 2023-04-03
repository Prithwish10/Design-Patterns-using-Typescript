export class Employee {
    // private employeeId: string;
    // private employeeName: string;

    constructor(
        private employeeId: number, 
        private employeeName: string) {
    }

    getEmployeeId(): number {
        return this.employeeId;
    }
    getEmployeeName(): string {
        return this.employeeName;
    }
    setEmployeeId(employeeId: number): void {
        this.employeeId = employeeId;
    }
    setEmployeeName(employeeName: string): void {
        this.employeeName = employeeName;
    }
}