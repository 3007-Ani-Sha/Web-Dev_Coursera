Pseudo class selector:
Pseudo-class selectors address targeting only the structures that can be targeted by simple combinations of regular selectors, or targeting the ability to style based on user interaction with the page. Like, we would want the styling of an element to change if the user hovers or moves their mouse over that element.

Syntax is:
selector:pseudo-class {
...
}
NOTE : leave no gap in selector,":" and the pseudo-class.

Many Pseudo class selectors exist,
We will cover :
1. :link
2. :visited
3. :hover
4. :active
5. :nth-child(...)

First four are basic and common while the last nth-child can be comlex and is powerful.

In the file Pseudo-selector.html:
First thing we'd like to do is we would like to style this unordered list as a menu. It's a pretty common practice to take an unordered list and style it as a menu.
So We're going to do this is by using our descendant selector by saying header li, and we'll turn off the bullet points by saying list-style: none.
The next task is to style the links that are sitting inside the li elements and to make them look like buttons.

However styling links is not exactly as straight forward as styling a regular element, and that's because links have states. 
And these states can be expressed using pseudo-classes.
So we target two states. One is a being a link that it is. And another one a visited. And it is very often that we link these two.
And what basically that means is well link is at the way it is link when it is unclicked, and visited means HTML allows that after you click a particular link that a different style can be applied to that link than an unclicked link.
But we don't want to differentiate between the two. So we group them giving them the same properties.

Okay, so let's start by removing the underline that is the default styling for every link, we do so by using text-decoration : none;

We'll set the background color to green. Border, one pixel with solid, meaning solid versus dash or something like that, and blue. And we'll set the color of the text inside these links to black.
As far as this default display, a is actually displayed as an inline element. 
Well we don't want that for our buttons, we want them to block level element. Well we can change that very quickly by just saying display: block.
And once we say display: block and refresh you can see that the block level elements do what they always do, try to fill up all the space as they possibly can within that line. 
So I'm going to have to constrain it a little bit. Let's go ahead and give it a width of 200 pixels. We don't want our button to be that wide, and we want our line and menu items to be center. And we'll also separate the different menu buttons from each other by giving it a margin bottom of one pixel.

However we're not done because what we would like to do is on the user hovering over these buttons, besides changing the cursor to a pointer, we'd like to have some sort of interaction in the style and kind of show the user that they're hovering over these buttons.
So in order to do that we have to define two more states of the link. One is a hover and the other a active.

Now hover is exactly what it sounds like. So when the user hovers over the element, in this case the a element.
An active is that state when the user actually clicks on the element but hasn't yet released his click. So he pressed the mouse button down but hasn't yet released the button.
We don't want to differentiate go we group them. We set background color to light sky blue and color of text to black.

nth-child: 
In it's simplest form, the nth child pseudo-selector allows you to target a particular element within a list. 
For example we'd like to target this Facebook fan page link and we'd like to make it bigger just so you remember to click on it and like the page.
As it is at 3rd in list, So we could go over to style and can say that we want to target the LI ELEMENT that is inside the header element. 
And we want it to be nth-child(3), so that's the third link. And now I can target it and say for example, font-size to be 24 pixels, so I'll make it a little larger. 
You'll see that only the third link, the third menu button, became bigger.

But nth child pseudo selector can do much more fun stuff than that.Like, we have a list of DIVs here that looks pretty dull. We would like to make it look like a list and what I want is that every odd member of this list should get its background color to be gray. 
So the way I could achieve that is by targeting the div inside the section and we'll specify the nth child again. And instead of specifying the numbers one, three, and so on, I could specify odd. 
And if I do that and say background color gray and refresh my page, all of a sudden I have a list that's looking much, much easier to read than before. 
And by the way, JUST LIKE REGULAR SELECTORS CAN BE COMBINED, pseudo-selectors can be combined as well. 
Like, if we would like to have the fourth element in this list have a different hover behavior, since right now nothing really changes when we hover over the fourth element on the list, we would like to have that changed. 
So let's go ahead and target again, section div, and target the nth child. This time we want the fourth child to be targeted, but we want to specify that its hover behavior should be different, so we'm going to target the hover behavior part. 
And we going to change this background color to green and its cursor to pointer. And now when we hover over number four, the cursor turns into the pointer and the background of that element turns green. I'm sure by now you see how powerful selectors can be, especially using the pseudo-class selectors. 

One quick word of warning though, make sure your selector is still readable. These things can get very complicated very quickly. 
And if you make it such that other developers, and you in a month or so can't really understand fairly easily what you're targeting, this can become kind of a maintenance nightmare. 
So simple and readable is definitely preferred to complicated and tricky. You might be able to impress people with it, but it's certainly not good coding practice to make this super complicated.