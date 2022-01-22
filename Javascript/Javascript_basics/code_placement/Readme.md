Okay, now that we've set up our development environment the way we want, the first thing we should talk about is where do you include our JavaScript code? Where do we write it? 
Well there's essentially a couple of places where we could do that. The first one is we can have a script tag inside the head section. So we could write script, if we could type right now script, and we could say type, equals text/javascript. 
Now, the type is technically not required, so if we wanted to we could basically just avoid it altogether, and just have script. And here's our script write out. So, this between the opening script and the closing script tags, we can now write our JavaScript. 
Another place where we could do that is, an external file. So an external file also starts with a script, except it has a source attribute, where we could specify an external file. 
And if this is case, it'll be script.js because our script is sitting inside js/script.js. 

NOTE that whenever we include an external JavaScript file, we still have to provide the closing script tag. 

NOTE: A script tag is one of those tags that always requires a closing script tag, whether or not there is actually body within the script tag or not. Now, just like CSS in HTML, JavaScript code is executed sequentially. So it means whatever is inside of this script.js file is going to get executed first. And whatever is inside this script tag is going to get executed second. So let's go ahead and try that out. Let's put JavaScript or script.js, let's declare a variable, we'll talk about declaration variables in a minute, but for now let's just declare a simple variable. 
It's going to be a string and it's going to say hello world, so we'll save that. We'll go to our HTML, and inside this script, we'll go ahead and say console.log. 

NOTE: Console.log is something that we're going to be using a lot. And basically that is a function that is available on every single browser except some really old Internet Explorer browsers, where it will log whatever it is you write in between these parentheses. It will log that to our console right here. So let's go ahead and log our x, since we declared x. And now that we've saved the file, our browser sync went ahead and synced the code with the browser. And it immediately said hello world. 
Well, where did this x come from? Well the x came from script. Since inside script we already defined this x, We are certainly very much welcome to use it outside of it, obviously after it has been defined. And the value Hello World is obviously coming to this x, because it has been defined already inside the script.js. 

It's also important to remember that the JavaScript engine inside the browser, is a single threaded engine, which means that as the code in our JavaScript executes, it will execute completely without being interrupted by any other JavaScript code from somewhere outside. So it is not a multi threaded environment, it's a single threaded environment. And also as we could see already, it's a sequential execution, which means JavaScript will execute line by line without jumping, and inserting other lines of code from other places. 
Now the head section is not the only section where we could define JavaScript. We could define JavaScript in a very similar manner that we defined it in the head. We could define that JavaScript in the body as well. So for example right before body ends, we could say script and close the script tag. And we can have some code there, so in this case we'll say console.log, and we'll say right before body closing tag, given an exclamation point. Now, we'll see that Hello World gets executed first since this is what gets triggered first in the sequential execution of the code. And then we see right before body closing tag message, and that gets executed afer another message in the head tag, at the end since it's coming after the other JavaScript code. Likewise, we could really take the entire construct, go ahead and cut it, and paste it ni body at last, right at the end, and it will still have exactly the same effect as before, at least in this case and if we save it, we'll see that it says, 
Hello World!
Hi! This is Aniket.
Hi, I am Vivo!
Because We can include a JavaScript file right in the middle of the body of the HTML page as well. So to summarize, there's a few places where we could actually write our JavaScript code, we could write it inside the head tag, inside the script tag, we could write it outside of the head tag, inside the script tag or again inside or outside of the head tag. We could include a JavaScript file, the effect of which will be as if we're cutting and pasting the contents of that file right into the place where you declare it inside our html page.