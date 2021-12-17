# Responsive Design part-2:
So we look at the file responsive-design.html located in the same directory.
First we are going to style paragraph tag as we are going to use it like our visual kind of anchor where elements fall. 
We have used this little trick, to center our paragraph tag inside a block level element, which is going to be a div. 
And the way to center it is to make sure the width is specified, and then to give it margin right auto, and margin left auto.

After styling paragragraph tag comes our framework starting with row class
It's going to be pretty simple but pretty effective as well. So, here first we define our row and all that it's just saying that it's going to be 100% and wherever we put the row, it's going to try to take up 100% of that space.

And then we're going to start having some media queries, so the first one is min width is 1200 pixels. 
Which means that if the display, the device display, is larger than 1200 pixels, all these styles will apply.
And notice that what we're doing is we're defining these columns and we are marking them with lg for large and one, two, three, four and so on. 
And what we're saying is every single column they should float left, so, basically, we're going to have a float based layout. Also gave each and one of them a border, that's just so we could see it on the screen.

And what we're doing is, if it's a 12 column layout that means each column is 100% divided by 12 so, that becomes a 8.33%. 
Well the two columns is 100 divided by 12 times two, and that's 16.66% and so on and so on until we get to column lenght 12 and that's going to take up 100% of the entire grid and these are the styles we have defined for large screen devices. 

## Mdeium sized-Devices:
What we're going to do, is we're going to have a range and we picked the lower part of the range to be 950 pixels which is not exactly the standard, bootstrap has a different number that it uses, but we just picked this for a demo purposes. 
And again we're listing all these classes as in large screen devices and again are going to be floating left, and again giving a border. 
And this time we're doing the same thing except, we're now calling this md for medium, in-place for lg for large. 
And, since these classes don't really exist outside of these media queries, it means that we can specify for different devices, different layouts depending on device size. 
So for a smaller device, for example, specify layout expressed in md, in medium devices columns, or medium devices classes and for a larger device we could express the same thing. 
With lg, larger devices, so we could give the same element two different classes and we know we're guaranteed that only one of them will apply at times since our media queries don't overlap. 
So both classes will never really be existing at the same time. And we could define more of these media queries, but for demonstration purposes, let's stop here and let's take a look at our HTML. 

And here we have one single row, and a single row contains eight divs, it can contain eight items, eight divs. Each one has a paragraph that says item 1, 2, 3, 4 all the way to 8. 
And notice the classes that We're assigning to each one. What we're trying to tell the browser is that when it is a large device,we want only the classes with lg to apply. And it will happen automatically since the classes with md don't exist according to the browser, when the browser is larger in width then 1200 pixels. 
And since we know that floating elements just flow to the next line when they can't fit, we could very easily set up three, three, three, and three. 
So that's right there at 12 columns but I could keep going because it's just going to flow to the next line.
It's three, three, three, three again.  
Three, three and three, and three, that's four columns across, however, when the browser size, or the device size becomes smaller, and it becomes less than 1200 pixels, or 1199 pixels and lower, we want the layout to switch to medium classes. 
And these classes are specifying that, they should really each item, each one of these things should take half the screen. 
So six columns plus six columns will take up the entire width of the screen. And again another couple of six columns will take the entire width of the screen and so on. 
So as we squeeze the browser and make it narrower, we should see that our four column lay-out, as we squeeze the browser and make it narrower, should become a two column layout, because we're now specifying in a smaller device size six and six instead of three, three, three and three. 
Now when the browser size gets to less than 950 pixels, none of these classes will exist as far as the browser will concern. And what's going to happen then? 
Well our divs will no longer be floated because the floating is only defined inside the media queries which means they will behave just like regular block level elements and they will automatically stack one on top of the other. 
So as the devices get smaller and smaller, we should really have one column with each one of these items stacked one on top of the other. 
The truth be told, we could've specified that media query for that size of the device, but, in this case, it's just a demo, and we knew that the items will stack anyway, we just left it alone this way. 

Okay, so our three, three, three and three layout gives us four items across and it's just spilling over to the next line and gives us another four items across again. We're going to open Chrome Developer Tools. So as we squeeze browser we'll see the pixel size of the view port. 
And as we start squeezing the browser we see it jumps to two. As it gets closer and closer to 1200, once it gets past 1200 pixels, it becomes now 6 and 6 column layout, which means that now we're taking up half the space of the entire width of the browser. 
And if we squeeze past 950 let's take a look and squeeze it past 950 pixels, right here, boom. The items are now stacking one on top of the other, and obviously as a pull it back apart, or pull it wider, it becomes back to our three, three, and three layout, three, three, three and three lay out, four times, and now we have a four column layout across. 
So that's pretty cool, so it seems we're done, and we could now serve this website to regular mobile phones. So let's take a look at what this site looks like on any phone.