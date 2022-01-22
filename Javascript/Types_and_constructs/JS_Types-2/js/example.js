var x ;
console.log(x); //as it has no defined type it gives undefined
if (x == undefined) {
    console.log("x is undefined");
}
x = 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x is defined");
}