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


//arrow function
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
            console.log("ID after 2secs: ", this);
        }, 2000);

        setTimeout(()=>{

           // var i = 10
            console.log("ID after 2secs arrow fn: ", this);
        }, 2000);
    }

}

obj.print();

