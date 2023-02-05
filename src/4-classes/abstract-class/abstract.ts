abstract class Vehicle {
    protected kilometers: number;
    private brand: string;
    private model: string;

    constructor(kilometers: number, brand: string, model: string) {
        this.kilometers = kilometers;
        this.brand = brand;
        this.model = model;
    }

    public abstract getQuality(): number; // We want to define this in the inherited class!

    public get carInfo(): string {
        return `${this.brand} ${this.model}, ${this.kilometers}km`;
    }
}

class Car extends Vehicle {

    constructor(kilometer: number, brand: string, model: string) {
        super(kilometer, brand, model);
    }

    public getQuality(): number {
        return this.kilometers * 0.1;
    }
}

// let volskwagen = new Vehicle(/*Some parameters*/)            // You can't create an instance of an abstract class!
let actualCar = new Car(87000, "Volkswagen", "Tiguan");
console.log(actualCar.getQuality());
