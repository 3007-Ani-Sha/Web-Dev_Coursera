var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayHi = function() {
    console.log("Hi " + johnGreeter.name);
}

//To apply Fake Namespace: We Make an empty object 
//and put variable and the function in the object.