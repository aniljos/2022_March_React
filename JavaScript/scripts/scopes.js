//var x

console.log("Scopes");

console.log("before defining x: ", x); //undefined
// JS has a featured call "Hoisting"==> All declarations(variable, method, class) 
//  are hoisted(redeclared at the top of the scope)
var x = 10;
console.log("x: ", x); // 10

var y;
console.log("y: ", y); //undefined

//console.log("z: ", z); // refernece error(exception)


 function foo(){

    //var msg, var x
    
    var x = 40;
    console.log("in foo", x);
    if(x < 5){
        let msg = "hello";
        console.log("in foo", msg);
    }
    //console.log("in foo", msg); error when using let
}
foo();

// function bar(){
//     var i = 20;
//     console.log("bar i", i);
// }
// bar()
//console.log("global i", i);

console.log("Program ended");