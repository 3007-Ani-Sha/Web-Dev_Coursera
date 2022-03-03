aniketGreeter.sayHello();
johnGreeter.sayHi();


//IIFE :
var a = function() {
    console.log("Hello Coursera!");
}
a();
//Function is invoked by putting a parenthesis after it's name.
//and 
//function() {
//  console.log("Hello Coursera!");
//} this is just an function object, so we can put it in parenthesis
// like, (function() {
//    console.log("Hello Coursera!");
//})
//So, we can invoke the function by putting it inside parenthesis after
//which put an parenthesis for parameters(if any).
(function() {
    console.log("Hello Coursera!");
})();//This is Immediately Invoked Function Expression as the function 
//object is immediately invoked


(function(name) {
    console.log("Hello " + name);
})("Coursera!");