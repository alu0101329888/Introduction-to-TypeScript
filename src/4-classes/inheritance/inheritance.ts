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
        console.log("Sorry but you can't change last names");
        return;
    }

    protected getAge(): number {
        return this.age;
    }
}

// Inheritance
class Employee extends Person {
    private jobTitle: string;

    constructor(firstName: string, lastName: string, age: number, jobTitle: string) {
        super(firstName, lastName, age);    // You need to call super first to instantiate the class!
        this.jobTitle = jobTitle;
    }

    public describe(): void {
        // Careful! We can't access this.firstName or this.lastName or this.age as they are private!
        console.log(`My name is ${this.getFullName()}, I am ${this.getAge()} and I am a/an ${this.jobTitle}`);
        return;
    }
}
