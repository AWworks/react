class Employee {

    public name: string;
    private salary: number;
    protected department: string;
    readonly empoloyeeId: number;

    constructor(name: string, salary: number, department: string, empoloyeeId: number) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.empoloyeeId = empoloyeeId;
    }

    getDetails(): string {
        return `Name: ${this.name}, Department: ${this.department}`;
    }

    calulateBonus(): number {
        return this.salary * 0.1;
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, salary: number, department: string, empoloyeeId: number, teamSize: number) {
        super(name, salary, department, empoloyeeId);
        this.teamSize = teamSize;
    }

    getTeamSize(): number {
        return this.teamSize;
    }

    getManagerInfo(): string {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }

    // getSalary(): number {   
    //     return this.salary; // Error: Property 'salary' is private and only accessible within class 'Employee'.
    // }

}

const employee = new Employee("John Doe", 50000, "Engineering", 12345);
const manager = new Manager("Jane Smith", 70000, "Engineering", 67890, 5);
// console.log(manager.getSalary()); // Name: John Doe, Department: Engineering