Background Property:
Up until now, we've been using the background property just to set the background color. 
But the truth is, there's many more properties we could set. Now open the code 
background-property-before.html file.
We style the bg with width 500 and height 500. And make the background colour blue by background-color: blue;.

What if we wanted an image as a background? We can do so by property background-image then entering the url for that image or the relative url 
w.r.t. to our document location directory.  
And if we do that, we could supply a URL with parentheses and inside there and put the image url in quotation marks, we could specify a file also.

NOTE: Notice that the URL that we supply is a relative variable, but it has to be relative to your CSS. 
So if this CSS that we're just writing it inside the style tag, but if we were to put it inside of a subfolder like CSS or styles subfolder, the URL would be different. 
The URL would have to be relative to the CSS file, or actually, to be very technically correct, the URL would have to be relative to the way the CSS file is served in the browser. 

Now, we have our background image. And we can see that it's being repeated, and that's actually yet another property than we can set.
It is background-repeat we have a few options. 
We have no-repeat, repeat, repeat-x, repeat-y. So if we do repeat-x, or was it repeat-y, what all it's going to do is it's just going to repeat it horozontally or vertically resp. 
Or we could just say no-repeat. And no-repeat will just put one image in the top left corner by default.

Also notice that we're using a background-color property and a background-image property at the same time. 
And we can see that image wins on terms of priority. It is on top of the color. We can also specify the position of the image within the element.

We'll say background-position and we'll give it two values. 
First is a horizontal value and then the vertical value. So let's say we want it to be top and right. We type, top right, just with a space in between them. 
Now, specifying only one of these will make the other one default to center. 
like right wil become center right, bottom will become bottom center etc.

So these properties, background-color, background-image, repeat, and so on, they're all individual properties, but the truth is, we can combine them all into one. And let's go ahead and do that now.
Open background property after file, 
If we specify just the background, we can now list these same properties in it without having to specify them one by one. 
We'll specify our background-image, we'll specify that we don't want it to be repeated, no-repeat. 
And we can also specify its location, so let's say we want it to be right and center. 
Now, something strange happened right? Where did the color: blue disappear to? We thought it was both, we could have both the color: blue and at the same time have a background image.
Well, the reason it disappeared is because my background property is being specified after the background-color property. 
And since choose to used the background without the dash for a particular property, it's overriding every single property except the ones that we are actually specifying. 
So if we wanted the background to be coloured still we could also type the colour in the background property. 
So the point is, if we specify background-color specifically and then we go ahead and override it with the background, but we don't specify the color or we don't specify whatever the specific property is, whether it's background-image or background-repeat or background-position and so on. 
If we went ahead then and specified background without any dash subproperty, whatever background properties that are inherited with a dash will be overridden unless we actually call them out directly, straight in the background property.