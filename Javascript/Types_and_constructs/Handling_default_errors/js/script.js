//Default Values
function orderChickenWith (sideDish) {
    if (sideDish === undefined) {
        sideDish = "whatever!"; 
    }
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();//in order to avoid geetting undefined here as it is not much user friendly term we introduce the default "whatever!" term

//Javascript has another way of doing
//    if (sideDish === undefined) {
//    sideDish = "whatever!"; 
//    }
//which is,
//sideDish = sideDish || whatever!;

function OrderChickenWith (sideDish) {
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}
OrderChickenWith("noodles");
OrderChickenWith();

//This way the first which evaluates to true via coercion to 
//boolean type is output of the 'or' statement i.e. it first converts all to boolean 
//type and then first true statement is converted back to original form 
//and given as output
