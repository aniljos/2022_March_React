class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    //property
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
}
var emp1 = new Employee(1, "Anil", 20000);
console.log(emp1);
emp1.location = "Hyderabad";
console.log("location", emp1.location);
var emp2 = new Employee();
