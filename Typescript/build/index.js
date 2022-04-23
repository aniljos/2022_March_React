console.log("Hello TypeScript");
//Type Annotations, Checking and Inference
var x; //infered to any
console.log("x", x);
x = 10;
console.log("x", x);
x = "Anil";
console.log("x", x);
var y = 20; //infered to number
console.log("y", y);
//y = "30"; //compiler error
var z; // type annotation
console.log("z", z);
z = "Hello";
console.log("z", z);
// z = 100; //compiler error
var isAllowed;
var calculateInterestFn;
var calculateInterestFn = function (principle, tenure, roi) {
    return principle * tenure * roi / 100;
};
console.log("calcInterest", calculateInterestFn(1000, 2, 7));
//calculateInterestFn = function(){}; //compier error
class Test {
}
;
var test;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("numbers", numbers);
const square_of_numbers = numbers.map((item, index) => {
    return item * item;
});
console.log("square_of_numbers", square_of_numbers);
// var arr1 = numbers[0];
// var arr2 = numbers[1];
var [arr1, arr2] = numbers;
console.log(arr1, arr2);
arr1 = 10;
