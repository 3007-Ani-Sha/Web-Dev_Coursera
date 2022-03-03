//Now we will consider what Javascript considers Boolean false and Boolean True

if( false || null || undefined || "" || 0 || NaN){
    cosole.log("This line won't ever execute");
}// All the conditions or phrases or numbers inside if statement's condition are false like null, false, undefined, "", 0 and NaN
else {
    console.log ("All False")
}

//To check whether anything is boolean tru or false type in the CONSOLE : Boolean(), and inside the bracket write that variable or constant or anything else.

// What is true in Javascript?
// first of all 'true' is true, any non-zero number, any non-ending string even 'false'

if (true && "hello" && 1 && -1 && "false") {
    console.log("All True");
}