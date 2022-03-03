function test() {
    console.log(this);
    console.log("Hello Coursera!");
    this.myName = "Aniket";
}
//'this' points to the global window object, which has various properties
//'this' object can also have new properties that we want to insert
//this.myName creates property on the global window object, as this is a pointer to it.
test();
function test_1() {
    console.log(this);
    console.log("Hello Coursera!");
    this.myName = "Aniket Sharma";
}
test_1();
console.log(this.myName);

//Function Constructors: It is a function constructor as it creates an new object by executing a function
//in a special way by using 'this' keyword
function Circle (radius) { //writing Circle with capital 'c' does not do anything other than it 
                           //tells that it is an constructor, to other developers
    this.radius = radius;                       
    console.log(this);
}

var myCircle = new Circle(10);//Now mycircle is an object of the function Circle and if we use 'this' keyword
//inside Circle function, for myCircle it will be acting as a reference to the object and can be used to create 
//a property
console.log(myCircle);


//Introduce some methods in the Object
function Circle_1 (radius) {
    this.radius = radius;

    this.getArea = function() {
        return Math.PI *Math.pow(this.radius, 2);//Math is also a Object with properties we can use in mathematical
        //calculations
    };
}

var myCircle_1 = new Circle_1(10);

console.log(myCircle_1);
console.log(myCircle_1.getArea());//Now here whenever we create a new object by circle_1we are going to get the getArea 
//function all over and over again, So to avoid it we use an prototype function 

//Prototype:
function Circle_2 (radius) {
    this.radius = radius;
}
Circle_2.prototype.getArea =
    function() {
        return Math.PI * Math.pow(this.radius, 2);
    }//Now this function is not created again and again, but this exactly cannot be put inside Circle_2 as every time we 
    //create a new object by it, so it would be stored at that memory again so it would not waste memory rather the processing.

var myCircle_2 = new Circle_2(10);

var myOtherCircle = new Circle_2(20);

console.log(myCircle_2);

//Note: Always use new to create object from the Function constructor, which can be distinguished by the Capital first letter 
//while making a function. 