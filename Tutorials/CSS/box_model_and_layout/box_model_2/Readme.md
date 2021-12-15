box-model-part-2:
Of course, we don't want to specify box sizing border box on every element in our entire HTML, so we definitely want to specify it once and then have it be inherited everywhere. 
So let's go ahead and try to do that. Let's remove this border box from box. 
And body seems to be like a natural place to put it since body is the top level element and it should inherit everywhere else. 
So if we place the box size and border box here, this should stay the same. It didn't work.
It jumped back to the content box. Well, the reason that didn't work is because box sizing is one of those CSS properties that is NOT inherited. 
You can't set it on the parent element and then expect that the child elements will inherit that property.

So what could we do now? We can use here a star selector, we say '*' and 
we'll cut and paste that border box property inside it and it worked.

Star selector says, go ahead and select every element there is and apply these particular CSS properties to them. 
The difference between star and placing some property in a parent element for example is that star says It is not asking us to inherit anything, It is saying select every element. 
Which means it's as if it took this property and this value and then it went to the HTML and it applied it to every element it saw, it applied that particular property and value, which in this case is box-sizing: border-box.
As it is new property we can go ahead and check on caniuse.com if it is available on different browsers.

If we have two boxes next to each other or on left-right side the margin between them add upto give cumulative margin, 
While if on top and bottom on one another the margin between them is not cumulative rather it is the maximum of two or the smaller margin collapse, 
Say one's margin is 20px ,other's 30px .Then in side-to-side the margin becomes 50px, but in top-bottom case it is 30px.

Let's define a margin top of 20 pixels  in box and when we do that absolutely nothing will happen. 
And the reason that is because the box is defining a 20 pixel margin. Yet, the h1 is already defining a 40 pixels margin. 
So when they come together and touch, they collapse into whatever the larger margin is. So in this case, that's 40.
However if we make the margin to be 45 and let's say even 50 pixels now we'll see that the box will move down because now the box has a larger margin than the one specified on h1. 
So there is now a bigger distance between the box model h1 and the actual box and it's actually 50 pixels. 

We can also notice that the box model, the words box model are not flush at the top with the corner of the browser. 
Now why is that? Let's go and investigate h1. It's got a margin of 21.4 something. And where is this margin coming from? Well, it's coming from, again, the user agent style sheet. 
And the reason it's coming here is because of some browser specific prefixes that we actually haven't talked about that are defining the margin before and margin after. 

We're not going to delve too much into this, but the bottom line it means that before the element and after the element they'll define some margin.
 
Now the reason our margin on the body that was specified margin: 0 is not working here is very simple. 
Body says anything that is below me and inside of me is going to have the margin inherited. 
But that's only if you don't override it specifically for that element. 
As you see here, the user agent stylesheet has a selector h1 that is specifically overriding the margin, which therefore, wins. 
This is a bit of a side point but how do we override this? Well, now that we know about the star selector, it's easy. 
You could just say and move the padding and the margin to the star selector. 
And now, what this is basically saying is that we are selecting every element specifically, and then I'm overriding its margin. 
So, we could see now it's flushed together to the top. 
We won't necessarily be doing this in our pages left and right, but at least now you know that if you wanted to reset in, it's called CSS resetting,
If you wanted to reset the CSS browser defaults you would do this most of the time using the star selector.