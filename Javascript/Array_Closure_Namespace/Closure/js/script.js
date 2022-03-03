//Closures
function makeMultiplier (multiplier) {
    function b() {
        console.log("Multiplier is: " + multiplier);
    }//it first checks that, is multiplier defined in its local
    //enviornment, if not it goes outside in the lexical enviornment
    //to check if there is multiplier present if yes so it uses it. 
    b();
    return(
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);//this makes multiplier = 2,
//doubleAll is a reference to, 
//function(x) {
//    return multiplier * x;
//}
console.log(doubleAll(10));//Now the function is executed.
//But how does it know that the multiplier is 2, as it gets off the
//stack at that timewhen we call doubleAll(10)
//It is possible as the Javascript has closures, which whenever a 
//function is returned from inside of a function keeps the outer memory
//of the returned function intact for it to produce, so multiplier still
//sits in the outside scope memory of this return function.
//So doubleAll, when it executes searches for the multiplier in its enviornment
//which is not found so it searches in the enviornment outside it which is preserved
//by the closure even if the function makeMultiplier is off the stack and not
//function anymore and it finds that multiplier is 2, and uses it. 