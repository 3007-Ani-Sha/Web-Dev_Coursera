# Media Queries:
Media queries allow us to group the styles together and target them to devices based on some criteria.
For example, we can target a device by its width, its height, or orientation like landscape or portrait. 
Of course one of the most obvious differences between viewing a website on a desktop browser and your cell phone is the screen size. 
We can use CSS to generate different webpage layouts from same HTML.
So, it only makes sense then, that the most common way to adjust the styling and layout of your page is to provide different styles for different screen sizes of the user's devices. 
This is why it's crucial to learn at least the basics of how to utilize media queries.

## Syntax:
A media query starts with a keyword @media, and then it is followed by a media feature, and followed by curly braces. Within those curly braces we have our styles, it's basically like a style sheet within a style sheet. 
Each media feature resolves to either true or false. We can have more than one media features combine together using logical operators. 
If the media features resolve to true, the style within the curly braces apply. 
When writing media queries, make sure to close the curly braces for the media query as a whole and then separately for each styling rule.
like:
@media (max-width: 767px) {
    p {
        color: blue;
    }
}
here media feature is in "()" brackets which is max-width here and the style is in {} brackets which here is targeting p.

## Media Features:
There are quite a bit of these media features that are available. So we can have max-width, min-width, height , we can even target orientation of our device, portrait or landscape, So can target only screens as opposed to targeting only print. 
Again, if any of these things evaluate to true, the styles contained within the curly braces of the media query will be in effect.  
Most common ones are the max-width and the min-width. And again, the fact that they're the most common really is connected to the fact that the most common way of targeting different devices is by the width of the device.

## Combination of features:
The media features can be combined using logical operators. One of the most common logical operators is the and operator. 
As an example we have, 
@media (min-width: 768px) and (max-width: 991px) {...}

here's a code snippet that targets a width range. We're targeting any device that falls within the range of its width being anywhere from 768 pixels until 991 pixels. 
If the devices has a width that is smaller than that or larger than that the styles applied within this media query will not apply.

Another way to combine media features is to place comma in between them which will basically translate into being equivalent to an OR operator. 
Like:
@media (max-width: 767px) , (min-width: 992px) {...}

In this code snippet we're showing that we're targeting any device whose width is no larger than 767 pixels or any device that is at least 992 pixels in width. 

Now, practically speaking, when we approach responsive design and responsive layouts, the most common logical operator is the and operator.
 
## Common writing style:
Now before we jump into a code example. Let's a very common approach how we structure media queries within your style sheet. 
What usually happens is you have a few of these media queries, but you almost always start with some base styles.
Base styles will apply across the board no matter what screen size you actually are viewing the website on. 
Then you go ahead and start targeting a particular screen size by either changing some of the properties of the base styles or adding something else to them or maybe taking something away. 
Like:
p {
    color: blue;/*base styles*/
}
...
@media (min-width: 1200px) {
    ...
}
@media (min-width: 992px) and (max-width: 1199 px) {
    ...
}
...

Now an important point to point out, and especially when you're using widths of screen sizes of the devices is that you have to be very careful not to overlap range boundaries. 
So in above example we will notice that the first query has the minimum width of 1200 pixels and the second query is coming up it's a range again. 
And it comes up, up to max width of 1199 pixels, if we had said 1200 pixels it will mean there always inclusive. 
It will mean that both sets of styles will apply and most probably things will be pretty messy and very hard to maintain. So it's important when you structure these media queries that you have very clean, separate boundaries. 