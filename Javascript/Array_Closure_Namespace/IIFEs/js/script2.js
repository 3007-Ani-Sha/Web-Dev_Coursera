(function (window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi ";
    johnGreeter.sayHi = function() {
        console.log(greeting + johnGreeter.name);
    }

    window.johnGreeter = johnGreeter;
})(window);

//To apply Fake Namespace: We Make an empty object 
//and put variable and the function in the object.

//We could expose the johnGreeter by putting it inside the global
//window object by passing it and making a property johnGreeter and
//passing the johnGreeter object to it.

//So we place any property, we want to expose to outside, in the 
//johnGreeting and pass it to window's johnGreeting property.