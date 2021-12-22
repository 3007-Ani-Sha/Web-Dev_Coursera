# Basics of nav-bar:
Okay, so let's go back to the code editor and we'll cut and paste some code we've prepared for the name of the restaurant and this Kosher certified sign underneath of it. 

The first thing is this navbar brand. This is something that bootstrap, the communication will tell us that any branding like the name of the company should go into this navbar brand, under this navbar brand class. 
So, we're going to, again, put our content inside of a wrapper(navbar-brand). So this David Chu's, David Chu's China Bistro will be a clickable region. And we're also putting it inside of H1, because this is the most important thing about the page. That is, the name of the restaurant. So, that's as far as the name of the restaurant is concerned. 

The next thing is the kosher sign. And this is just the logo, so it's just an image. And it's very small so we don't really care about responsiveness for this particular one because it is that small. And we just have a span set up that just says Kosher Certified. 
Let's go ahead and go back to our browser and not quite exactly what we expected. It's going to push down here and this is kind of ugly looking. 
The reason that brand name etc. going down is because this is nothing more than a div, so the div's are obviously stacking one upon the other. 
Well since David Chu's China Bistro is wrapped around with a class navbar brand and that already is floated left. 
As long as we make our logo Float left will have nicely David Chu's China Bistro aligned to the right of the logo. Well let's go back and do that but we're going to do that in a boot strap way. 

(In our case the pull-left is not working)
And the way we do it in a boot strap is we apply, in this case to a tag of our logo, and we'll apply a class called float-start. And float-start is basically float left. 
float-end is right float.

And obviously we could split a style attribute here and say float left but that would make this whole thing a little bit dirty looking so we're just going to stick with the bootstrap class names that they came up with. 

So we'll go back to the browser. Look at that, now everything is to the right of that, because we're now floating the element with a logo. 
Okay so let's go ahead and, now style is a little bit better. We certainly don't want this underlying link on Name that's number one. Number two is if we look at our design the font is different and we can see here business theme font is called Lora. 
So really the first thing we should do is we should go back to our code editor and import this Lora font the same way we imported the google fonts for the oxygen font. Now, let's go ahead and go to our styles.css and we'll cut and paste some code I prebaked for our navbar brand. 
So the first thing we're going to do is, we're going to give it some padding, We're going to basically push it down a little bit, so we'll give it some padding top, about 25 pixels.


And the other thing we're going to style the actual name, the brand name. We're going to say Navbar brand h1, that's the restaurant name and here's our Lora family font. 
We're going to give it a little bit of a different color. The color is going to be green. This is what we are basically doing according to our design. 
And we'll increase the font size just a tad. We'll increase it 1.5 time's. And what we'll do is we'll make the text uppercase. 
So we'll all stay uppercase the entire time. We'll bold it, we'll put some text shadow on it. And this is something we haven't really seen before. But we'll research how to do this ourself, this is not really so hard. 
And we'll do margin top zero, margin bottom zero, and we'll decrease the line height just a little bit to kind of tighten up the whole thing. 
We also had an underline, like a link thing, going on under there, and we really want to disable that. And that's called text-decoration. So what we're going to do is we're going to say .navbar-brand a:hover and .navbar-brand a:focus, either one, we want them not to have any underline type of link decoration. 
We just want it to be clickable but not look like a regular link. The other thing that's left here is to style this Kosher cert thing, and all we're doing here is just basically giving it a color, transforming everything to upper case and decreasing its font size to 0.7 ems. 
And again, keeping the margin top 15 just to separate it from the actual brand, the David Chu's China Bistro It'll get separated a little bit more by 15 pixels. 
And the last thing is, we want to vertically align our Star-K span. So, if we look at the index.html, there's a span here that says Kosher Certified. So, what we're doing here is we're saying that when you get to that span, just vertically align that text. And the reason we're doing this is because we want those words kosher certified to align in the center of that star image, that logo. 
Okay, so let's take a look at a browser. 
That's good. We'll go back and now sure enough its displaying how we actually wanted it to begin with. So that's pretty good so we're good to go here and,

-------------------------------

we just want to do one last thing we don't always want to display this logo as we squeeze the browser if its maybe a medium screen or a large screen we'll want to keep this logo. But then we're going to be, if it's smaller than that, we're going to start fighting for real estate. 
And we don't want to do that. We want to remove this logo and only leave the name of the business. So only when it's small. So let's take a look at what we could do in order to achieve. Do that in bootstrap. 
Okay so if we go to index.html there are a couple of classes that bootstrap defines that let's us basically say that this element should only be visible in a particular break point and they're called visible, navbar-expand-md and what we're saying is if the screen size is medium we want this element, this a href element to be visible but if it's anything other than, at this point, a medium-sized screen, we don't want this element to be displayed. 
Well, if we put that plus, we also want it to be displayed when it's large. So now, this element will be visible when the screen is large or when the screen is medium-sized. 

------------------------------------

Well, let's try this out. Let's go back to the browser, and our new styles should have already been injected. So at this point, if we just squeeze the browser and make it, it's medium. We can see by the way how the container jumps. 
So now it's a little bit more spacier so it's going to keep our site centered here. And if we squeeze it a little bit more, boom, it's gone. And we still have to fix that at least at this particular breakpoint. But we can see now that the logo is gone. And it's gone because of those responsive elements. And if we stretch it back out it comes back out alive again. 
Okay, so this is a pretty good start to a header. And we'll see you in the next video to continue developing the site.