//Array is a collection of values
var array = new Array();
array[0] = "Aniket";
array[1] = 2;
array[2] = function (name){
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};
console.log(array);//here we can store more than one data type in the same array
//to retreieve the values,
console.log(array[1]);
//to invoke the function,
array[2]("Aniket");
array[2](array[0]);
//to take out the properties of the Object Literal
console.log(array[3].course);


//Short hand array creation:
var names = ["Aniket", 
    "Yaakov", 
    "John"];//We can also include an object
console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}
//array has a length property which measures the and gives the 
//number of components in the array. 

names[100] = "Jim";//all rest from 3 to 99 in between will be undefined
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}