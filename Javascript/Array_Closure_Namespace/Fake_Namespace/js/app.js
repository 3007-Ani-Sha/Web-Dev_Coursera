aniketGreeter.sayHello();
johnGreeter.sayHi();//both give the output as the Hello John, and Hi John
//instead of for first using the name Aniket
//As when in the index.html it is serial wise occurence and name
//becomes John when script2 is involed and the app executes with 
//name = "John"; as name is overriden.
//How to solve this situation?
//Using Namespace we can solve it, but Javascript does not have
//Namespace, but we can fake it.
//Namespace is a container for some functionality or variable.

//Now if we create the namespace, name etc. will have to 
//pass through the namespace i.e. aniketGreeter and johnGreeter
//So will be different names and the same name variables will not misfunction.
