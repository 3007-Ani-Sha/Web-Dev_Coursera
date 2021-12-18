# Bootstrap Grid system:
Probably one of the most central components of Bootstrap that allows developers to easily create responsive layouts is the grid system. 

Pretty much any Bootstrap grid layout is going to have this components as part of it, which is:

<div class = "container">
    <div class = "row">
        <div class = "col-md-4">Col 1
        </div>
    </div>
</div>

And, we could see that it does impose a bit of a structure into your HTML code but most of the time it would probably come up with this type of structure anyway. 
## Structure:
### Container class:
First of all, your Bootstrap grid always has to be inside of a container wrapper. There are a couple of choices for that: 
One, We could use the container class or we could use the container-fluid class. 
The container fluid class stretches our layout to the full width of the browser and provides consistent padding around your grid and other content. 
NOTE: There's other content that could go into the container, not just the grid. It's just that the grid requires that it should be inside a container wrapper. 
So that's container-fluid. 
Regular container class has predetermined fixed width that is still responsive based on the width of the browser. In other words, it has certain width till one break point, a different width till other different break point and so on. 
Remember that break points are the media range boundaries.

### Row class:
The row class creates horizontal groups of columns which means that the columns collapse and interact with each other as a group but independently from columns in another row. 
The row class also creates a negative margin, to counteract the padding that the container class sets up. Now why is that done? 
Well, each column already has its own padding because we want to visually separate columns from each other. If negative margin wasn't applied to the row, the padding of the container would then be in addition to the padding of the edge column. 
So the content of the column will no longer align nicely with the rest of the content outside of the grid. Now the Bootstrap documentation actually talks about this and explains it. 
So let us put together a quick diagram so we will visually see what we're talking about.(Look at the picture in slides)

Okay, so obviously We're going to start with the browser and then we're going to visually build up what our grid layout is going to look like. 
So the first thing that the documentation says is that we need to have an element whose class is equal container. Well our element is in white. 
Then we're going to have another element inside of that, and that is a row, at least has a class row. Except this time, just for demonstration purposes, we're not going to give it a row, we're going to give it a row-no-negative-margin. 
Meaning, it's going to be the same row but we're not going to give it a negative margin just for these illustration purposes. 
And we can see outside of our grid, but yet still within the container we have some regular content that is basically right against the edge of the container. 
And then we're going to place our columns. Each column, as we can see, has some padding around it so it can separate itself from the other columns. 
And If we look as to where the line of the column content starts and where the line of the regular content starts, we'll see that they don't match. 
Now, having consistently aligned edges of different content structures within your page is actually a pretty basic design principle. 
And Bootstrap implements that basic design principle for us so we don't trip up. So let's go ahead and visually now fix this problem. 
So what we're going to is we're going to again start with a browser in a container element with some regular content, and then we're going to add our real Bootstrap class row element. 
And what it does is, again, it stretches itself beyond the container. It negates the container's padding of actually 15 pixels, to be exact, and it adds a negative 15 pixel margin. 
So what that does for our content, in the columns, is that it pushes it out, outwards. So what does that do? 
Well what it does is now that our column content aligns perfectly with the regular content that is outside of our grid but is still inside the container wrapper. Now the concept of aligning the different edges of content blogs to each other is nothing new and any good website actually does that. 
Let's take a quick look at the webpage facebook.com/CourseraWebDev. And we just took one little piece of that page (check slides)and, if we take a look, this concept of aligning different blocks of content is alive and well here. 
As we can see, the picture, the text and even the buttons below, very well aligned together and it's very pleasing to the eye, it's easy to read and there's certainly plenty of studies about the fact that this is the way that the human eye actually follows a web page.

### Column class:
We've seen this type of column class definition. So in terms of how Bootstrap defines it, let's go ahead and take it apart.

So every Bootstrap column class is defined using the template below:

col-SIZE-SPAN 
,Where SIZE is the screen width identifier and columns below that width will collapse(i.e. stack) below that width, unless another rule applies.

It's col, for column, dash SIZE and then dash SPAN. And let's go over the components of this, of the two components of this template. 
First of all the size. Well the size is screen width range identifier and it's something like MD for medium, LG for large, and so on. 
And we can look up what that means in the Bootstrap documentation. So, for example, LG is defined as 1200 pixels and above. 
So minimum of 1,200 pixels. And what that means is that columns will collapse, in other words they'll stack one upon each other, below that width. 
So if the screen width is 1,200 pixels and above for, let's say a large size, it will go ahead and honor whatever you specify in this column-SIZE-SPAN. 
But if the screen width is below 1200 pixels this class will no longer apply. 
And basically that will mean that the columns in our row will collapse on each other, meaning they will stack one on top of the other. 
Which basically means that if we had several columns before, now we'll just have one column because everything is going to just stack one upon the other. 
And that is all unless there's another rule that applies. This is assuming there's no other rules that apply. 

So, like for LG, large, we specified one column span and then for a medium size we specified another column span, well when we squeeze the browser and make the browser less wide and you cross that threshold of 1200 pixels, this, the large column span, will no longer apply. 
But if we have specified a md or medium, medium size of the screen, that then will kick in, and that will apply. 
And the span, is really how many columns the element should span. So the values are from 1 to 12. 
And we've mentioned many times that Bootstrap is a 12 column grid layout. And what that means is the second the columns will adapt to 12, so if we specify let's say, 4, 4, and 4 then it will load up to 12. 
If we start specifying more than 12 columns within the row, well they'll do what other floats do, is that they will wrap to the next row. But it won't be a row within Bootstrap, it will just basically wrap itself automatically. So the point is, if you're specifying a whole bunch of columns, the element that pushes the total sum of the spans above 12 will automatically wrap to the next line. And this process can keep going every 12 columns. Lastly, there's nothing really magical about using DIVs. We're free to use whatever makes sense to us in our design. 
In this example below, we're using the header and nav elements to define container and row components. 
<header class = "container">
    <nav class = "row">
        <div class = "col-md-4">Col 1
        </div>
    </div>
</div>