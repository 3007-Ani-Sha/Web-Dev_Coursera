//Copy by reference vs by Value
//Primitive: i.e. by value
var a = 7;
var b = a;
console.log("a : " + a);
console.log("b : " + b);

b = 5;
console.log("After the updation:")
console.log("a : " + a);
console.log("b : " + b);

//Objects: i.e. By reference

var a = {x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x is updated: ");
console.log(a);
console.log(b);//Both change x value to 5

//Pass by Reference vs. by Value
function changePrimitive (primValue) {
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

var value = 7;
changePrimitive(value);//primValue = value, is what goes on here.
console.log("after changePrimitive, original value:")
console.log(value);//it is passed by change by value so will not change

function changeObject(objValue) {
    console.log("in changeObject... ");
    console.log("before: ");
    console.log(objValue);

    objValue.x = 5;
    console.log("after: ");
    console.log(objValue);
}

value = {x: 7};
changeObject(value);//objValue = value
console.log("after changeOject, orig value: ");
console.log(value);//it changes as the reference is passed due to object
