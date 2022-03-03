var company = new Object();
// Now we created the reference of an object now we are going to add the properties using the references.
//Javascript creates properties like,
company.name = "Google";
console.log(company);
//company.ceo.firstname = "Sunder"; We wanted several properties even in ceo but this does not work 
//this is the same issue as 
//var a;
//a.hello = "hello";
// So we have to set up the ceo property to give it properties.
company.ceo = new Object();
company.ceo.firstname = "Sundar";
console.log(company);
company.ceo.fav_color = "White";

//Property can also be used or we can 'get' properties via dot notation as above we 'set' or assigned them
console.log("Company CEO's name is " + company.ceo.firstname + ".His favourite colour is " + company.ceo.fav_color);

//or to 'get' we can use
console.log(company["name"]);

//But why do we need two syntax to 'get'?
//We need it as the dot notation is valid only with the valid Javascript identifier or valid function name or valid 
//variable name, like we cannot have a name 'stock of company' with the dot notation as it has spaces in between which 
//are not valid Javascript identifiers or names but could do this by using [] brackets.

company["stock of company"] = 110;

console.log(company);

console.log("stock price is " + company["stock of company"]);
