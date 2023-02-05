class Person {
    private firstName: string;
    private readonly lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public changeLastName(lastName: string): void {
        this.lastName = lastName;   // This is not possible!
        return;
    }

    protected getAge(): number {
        return this.age;
    }
}

const person = new Person("Pedro", "Piqueras", 67);
console.log(person.getFullName());