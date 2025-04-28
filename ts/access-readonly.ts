class Student{
    readonly name: string;
    readonly age: number;
    readonly grade: string;

    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getGrade(): string {
        return this.grade;
    }
}

const student = new Student("Umair Ahmed", 20, "A");
console.log(`Name: ${student.getName()}`); // Name: John Doe