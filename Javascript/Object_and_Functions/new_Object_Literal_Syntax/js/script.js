//Better way to create object : Object Literal
var Google = {
    name: "Google",
    ceo: {
        firstname: "Sundar",
        fav_color: "white"
        },
    "stock of company": "110"//Not used dot notation here
    //After last property comma is not used
};
console.log(Google);
console.log(Google.ceo.firstname);