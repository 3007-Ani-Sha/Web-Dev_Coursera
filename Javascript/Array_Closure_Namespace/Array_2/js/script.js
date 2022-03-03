//issue of using array with for loop:
var names = ["Yaakov", "John", "Aniket"];
var myObj = {
    name: "Aniket",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};
for (var prop in myObj) {//this can be used to traverse the properties of an objects 
//here prop represents the properties and here this is convinient as objects do not have indices
    console.log(prop + ": " + myObj[prop]);//prop here is the property name and not it's value
}
//In Javascript also, arrays are objects with property names as indices and the values as their 
//corresponding values. So, we can use above way in arrays also.

for (var name in names) {
    console.log("Hello " + names[name]);
}

//As array is an object we can also create any property
names.greeting = "Hi!";

for (var name1 in names) {//this loop will loop over the properties of the names array object.
    console.log("Hello " + names[name1]);
}

