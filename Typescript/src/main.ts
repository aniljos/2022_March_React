
//import {compute, foo} from './two.js';
//import { compute as calculate, foo} from './two.js';

import * as twolib from './two.js';

console.log("in main module");

//compute()
//calculate();

twolib.compute();

//spread operator(es6)

const numbers = [1,2,3,4,5,6,7];
console.log("numbers", numbers);

//shallow copy
//const copyOfNumbers = numbers;

//deep copy -- spread operatro
const copyOfNumbers = [...numbers];
console.log("copyOfNumbers", copyOfNumbers);

numbers.push(8);
console.log("numbers", numbers);
console.log("copyOfNumbers", copyOfNumbers);

const values = [300,1,45,6]
const merger = [...values,  ...numbers, 100, 111,112];
console.log("merger", merger);


const obj = {id: 1, name: "Anil"};
const copyOfObj = {...obj};

console.log("obj", obj);
console.log("copyOfObj", copyOfObj);

// destructuring

var product = {
    name: "IPhone",
    price: 70000
}

//let name = product.name;
//let price = product.price;
var {name, price} = product;

console.log("product.name", name);
console.log("product.price", price);


var test: any = {
   name: undefined, price: undefined, a1: 5
}

test = {...test,  ...product};
//var test2 = {...product, ...test};

console.log(test);







