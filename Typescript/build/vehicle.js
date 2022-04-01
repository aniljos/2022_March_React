class Car {
    // one constructor implementation
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(decrement) {
        this.speed -= decrement;
    }
}
let car1 = new Car();
car1.name = "Audi A5";
car1.speed = 90;
car1.gears = 8;
console.log("car1", car1);
car1.applyBrakes(30);
console.log("car1", car1);
let car2 = new Car("Verna", 110, 5);
console.log("car2", car2);
