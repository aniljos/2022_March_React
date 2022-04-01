import abc from './one.js';

console.log("In module two");

console.log("import from one", abc);
//named export
export function compute() {
    abc.add(2, 3);
    abc.multiply(2, 3)
    abc.divide(2, 3);
}

export function foo(){
    console.log("foo")
}

export const version = "1.0";

export class Test{

}

