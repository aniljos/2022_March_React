class Employee{

    // id: number;
    // name: string;
    // salary: number;

    // constructor(id?: number, name?: string, salary?: number){
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    // }

    private _location: string;
    constructor(public id?: number, public name?: string, public salary?: number){
    }

    //property
    public get location() : string{
        return this._location;
    }
    public set location(value: string){
        this._location = value;
    }


}

var emp1 = new Employee(1, "Anil", 20000);
console.log(emp1);

emp1.location = "Hyderabad";

console.log("location", emp1.location);


var emp2 = new Employee();
