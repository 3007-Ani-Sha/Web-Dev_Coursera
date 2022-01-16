# Variables and Functions :
Variable definition should always start with "var" keyword. Like, 
```js
var x = "hello";
```

To declare a variable we do not have to declare a type like, int, string etc. because Javascript is a dynamic language so it infers the type of a variable at the runtime. Also So the same variable can hold different types of values during the lifetime of the execution of the code like int, string etc.

To define a function we can use the function keyword then the name of the function. like, 
```js
function a() {
...
}
```
In Javascript function declaration is similar to defining a variable whose value is a function like, 
```js
var a = function () {...}
``` 
, here the a is the value of the function not the return value of the execution of the function.

Now we can invoke a function by using, a(); , if the function name is a.
We can also pass argument in function but we also have to modify the function like if we want two arguments say x and y, so we could define function as 
```js
function a (x, y) {
    return x > y;
}
```
Also we have to return a value in the function to get a result from the invocation of the function, we could also define it in the second way which used variables.
```js
function compare (x, y) {...}
var a = compare(4, 5);
compare(4, "a");
compare();
```
we can call functions and store their values in other functions like above or not store their values even not give the arguments or give them as a string.

## Scope 

There can be global scope or an function scope aka lexical scope.

### Global Scope:
Variables defined here are available everywhere for accessing and using.
### Lexical scope:
Variables defined here are only available in the scope of the function for usage.
Much like the scope of C++, like within the brackets.
## Scope chain:
-Everything is executed in an Execution context.
-Function invocation creates a new Execution Context.
-Each Execution Context has:
    -Its own Variable Enviornment
    -Special 'this' object
    -Reference to it's outer     enviornment
-Global scope does not have an Outer Enviorment as it's the most outer there is.

Or in other words:
Reference(not defined) variable will be searched for in it's current scope first. If not found, the outer reference will be searched. If not found then the outer's outer reference will be searched, etc.
This will keep going until the Global scope. If not found in the GLobal scope, the variable is undefined.