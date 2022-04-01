// function statement
// implicit args ==> this, arguments
function sum(x, y){

    console.log("in sum: ", this);
}
sum(2, 3);
sum();
sum(2,3,4,5);

//function expression
// implicit args ==> this, arguments
// add => refernece(pointer) to the function
var add = function(x, y){
    console.log("in add: ");
    return x + y;
}
var result  = add(2,3);

//arrow functions
// no implicit args
var compute = (x, y)=>{
    return x + y;
}

console.log("compute", compute(10,30));

compute = (x, y) => x * y;

console.log("compute", compute(10,30));

var squareIt = x => x * x;
console.log("squareIt", squareIt(13));

//object literal
var obj = {

    id: 10,
    print: function(){
        console.log("ID: ", this.id);
        setTimeout(function(){
            console.log("ID after 2secs: ", this.id);
        }, 2000);

        setTimeout(()=>{

           // var i = 10
            console.log("ID after 2secs arrow fn: ", this.id);
        }, 2000);
    }
}
//obj.print();

console.log(typeof sum);

var x = 10;
console.log(typeof x);
x = "hello";
console.log(typeof x);
x = function(){

}
console.log(typeof x);
x = {
    id: 10
}
console.log(typeof x);

function foo(){
    console.log("in function foo");
}

foo();
console.log("typeof foo", typeof foo);
foo.id = 100;
foo.location = "Mumbai";
foo.print = function(){
    console.log("print in foo function(object)")
}

console.log("id", foo.id);
console.log("location", foo.location);
foo.print();
console.log("typeof foo", typeof foo);
foo();

const user = {
    id: 10,
    getID: function(){
        return this.id;
    }
}


console.log("type of user", typeof user);
console.log("user", user);
console.log("ID", user.getID());

const employee = {
    id: 20
};


//console.log("ID", employee.getID());
const copyOfGetId = user.getID.bind(employee);
console.log("ID(Employee)", copyOfGetId());














