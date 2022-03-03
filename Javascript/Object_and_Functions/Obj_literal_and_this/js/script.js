//Object Literal
var literalCircle = {
    radius: 10,

    getArea: function() {
        console.log(this);//Now 'this' does not refer to the global window, rather to the literalCircle which is an object
        //of radius 10. 

        var increaseRadius = function () {
            this.radius = 20;
        };

        increaseRadius();

        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
}

console.log(literalCircle.getArea());//here we intended to increase the area for radius 10 to 20 circle by using 
//increaseRadius inside the literalCircle
//but that does not work as an inner function inside a function starts to point to the global window variable rather 
//than literalCircle
//So, to clear this but we define a self variable inside the function and assign it 'this' as till there 'this' is 
//literalCircle and use self inside inner function of the function where self is still literalCircle.

var literalCircle_1 = {
    radius: 10,

    getArea_1: function() {
        
        var self = this;

        console.log(this);//Now 'this' does not refer to the global window, rather to the literalCircle which is an object
        //of radius 10. 

        var increaseRadius_1 = function () {
            self.radius = 20;
        };

        increaseRadius_1();

        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
}

console.log(literalCircle_1.getArea_1());