interface Vehicle{

    name: string;
    speed: number;
    gears: number;

    applyBrakes(decrement: number): void;
}

class Car implements Vehicle{

    //var name;
    name: string;
    speed: number;
    gears: number;



    // one constructor implementation
    constructor(name?: string, speed?: number, gears?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(decrement: number): void {
        this.speed  -= decrement;
    }
}

let car1: Vehicle = new Car();
car1.name = "Audi A5";
car1.speed = 90;
car1.gears = 8;
console.log("car1", car1);
car1.applyBrakes(30);
console.log("car1", car1);

let car2 = new Car("Verna", 110, 5);
console.log("car2", car2);