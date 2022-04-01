// Object Literals
// Constructor functions
// Object.create()
// Classes(ES6)

//Object Literals
var obj = {
    id: 1,
    name : "Anil",
    "home-address" : "ABC, XYZ"
}
console.log("obj", obj);
console.log("obj id", obj.id);
console.log("obj id", obj["id"]);

console.log("obj home-address", obj["home-address"]);

obj.location = "Mumbai";
console.log("obj", obj);
delete obj.location;
console.log("obj", obj);

// Constructor functions
function User(id, name, address){
    this.id = id;
    this.name = name;
    this.address = address;
    this.createdDate = new Date();
    this.print = function(){
        console.log("User", this.id, this.name, this.address, this.createdDate);
    }
}
// create an object
var user = new User(1, "Ramesh", "Colaba, Mumbai");
user.print();

//Class (ES6)

class Employee{

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display(){
        console.log("Employee", this.id, this.name, this.salary)
    }
}

var emp = new Employee(1, "Anil", 35000);
emp.display();



