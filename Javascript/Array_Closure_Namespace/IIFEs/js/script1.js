//Immediately Invoked Function Expressions(IIFE's):
(function () {
    var aniketGreeter = {};
    aniketGreeter.name = "Aniket";
    var greeting = "Hello ";
    aniketGreeter.sayHello = function (){
    console.log(greeting + aniketGreeter.name);
    }
})();
//But this aniketGreeter is present inside the function but the 
//So how to expose it?
//We could expose the aniketGreeter by putting it inside the global
//window object by passing it and making a property aniketGreeter and
//passing the aniketGreeter object to it.
(function (window) {
    var aniketGreeter = {};
    aniketGreeter.name = "Aniket";
    var greeting = "Hello ";
    aniketGreeter.sayHello = function (){
    console.log(greeting + aniketGreeter.name);
    }

    window.aniketGreeter = aniketGreeter;
})(window);
//So we place any property, we want to expose to outside, in the 
//aniketGreeting and pass it to window's aniketGreeting property.