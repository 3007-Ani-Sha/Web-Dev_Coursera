//Best practice for {} style like putting it on same line or in the next line is not just a style in Javascript 
//rather it is a syntax arrangement in Javascript
//like:
function a() 
{
    return 
    {
        name : "Yaakov"
    };
}//this gives the output as undefined

function b(){
    return {
        name: "Yaakov;"
    };
}//this gives the output as Object

console.log(a());
console.log(b());


//For Loop
var sum = 0;
for (var i = 0; i < 10; i++){
    console.log(i);
    sum = sum + i;
}
console.log("sum of 0 through 9 is : " + sum);

// if already i is defined above in the code then we would have to use just i = 0
//as we cannot redefine a variabe in Javascript

