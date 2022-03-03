//Functions are First-Class Data Types i.e. whatever we could do to a variable, we could do it with it also
//Functions ARE Objects
function multiply(x, y){
    return x*y;
}
console.log(multiply(3, 5));

//We can set a property in a function like object
multiply.version = "v.1.0.0";

//Every object has a toString function which returns the same value as the object 
console.log(multiply.toString());

//Function Factory
function makeMultiplier(multiplier) {
    var myFunc = function(x) {
        return multiplier * x;
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);//here the multiplier is made as 3 and to get 
//the return value we pass another argument i.e. x

console.log(multiplyBy3.toString());//to check what does above result in

console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing functions as an Argument

function doOperationOn (x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);//here the function is not passed with 
//prenthesis as it will execute it there itself, so we pass the reference to it.
console.log(result);