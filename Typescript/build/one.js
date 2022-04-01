console.log("in module one");
function add(x, y) {
    console.log("in add");
}
function multiply(x, y) {
    console.log("in multiply");
}
function divide(x, y) {
    console.log("in divide");
}
const obj = { add, multiply, divide };
export default obj;
// export default {
//     add, multiply, divide
// }
