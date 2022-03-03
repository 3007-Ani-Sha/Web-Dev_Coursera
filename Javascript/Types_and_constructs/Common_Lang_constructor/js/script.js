var message = "in global"
console.log("global: message " + message);
var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
}
function b () {
    console.log("b: message " + message );
}
a();
b();

console.log((5+4)/3);
console.log(undefined/5);

function test1(a) {
    console.log(a/5);
}

test1();//Here the output is NaN as the 

//Equality
var x =4, y = 4;
if (x == y) {
    console.log("x = 4 is equal to y = 4");
}
x = "4";
if (x == y){
    console.log("x = '4' is equal to y = 4")
}

//Strict Equality
if (x === y){
    console.log("x = '4' is equal to y = 4");
}
else {
    console.log("x = '4' is not equal to y = 4");
}