## Passing(or Copying) by Value:
Given b = a, passing/copying by value means changing copied value in b does NOT affect the value stored in a and vice-versa.

## Passing (or Copying) by Reference:
Given b = a, passing/copying by reference means changing copied value in b does affect the value stored in a and vice-versa.

In Javascript, primitives are passed by value, objects are passed by reference.

-"Under the hood", everything is actually passed by value. But just the way the memory of variables changes is different.

### primitives
var a = 7;
var b = a;

here one does not affect the other just the value is copied.

### objects
var a = {x: 7};
var b = a;
b.x = 5;

in here a has a memory location which is a reference of the memory location of where x variable is stored which in turn stores the memory location of of where 7 is placed.
Once b is updated like above then acutually the memory pointe by x is changed so is a nd original x as a and b point to same location i.e. x.

'b' ends up with the same value as 'a'.