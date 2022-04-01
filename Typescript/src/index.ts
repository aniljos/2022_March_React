console.log("Hello TypeScript");

//Type Annotations, Checking and Inference

var x; //infered to any
console.log("x", x);
x  = 10;
console.log("x", x);
x = "Anil";
console.log("x", x);

var y = 20; //infered to number
console.log("y", y);
//y = "30"; //compiler error

var z : string; // type annotation
console.log("z", z);
z = "Hello";
console.log("z", z);
// z = 100; //compiler error

var isAllowed: boolean;
var calculateInterestFn 
            : (principle: number, tenure: number, roi: number) => number ;

var calculateInterestFn = function(principle: number, tenure: number, roi: number){

    return principle * tenure * roi/100;
}

console.log("calcInterest", calculateInterestFn(1000,2, 7));

//calculateInterestFn = function(){}; //compier error

class Test{};

var test: Test;

