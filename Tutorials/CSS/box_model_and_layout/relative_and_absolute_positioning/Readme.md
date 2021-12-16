# Positioning:
Previously we spoke about one type of alternative element positioning and that's floating elements. 
We say alternative because it is alternative to the normal document flow. Now, we're going to learn about a couple more positioning schemes, and that's relative and absolute. 
These positioning schemes allow you to specify precise offsets to move the target element to the different part of the page origin.

## Static Positioning:
Static positioning is basically a different way of saying normal document flow. 
It is actually a default setting for all elements, except html. 
And if we try to apply positioning offsets on elements who's position property is set to static, the offsets are just ignored.

## Relative Positioning:
When we apply position relative on an element. The element is positioned relative to its position in the normal document flow. 
In other words, if we were to apply offsets on that element, there will be offset, from the original normal document flow position of that element. 
So the positioning CSS offset properties are top, bottom, left, and right. So when you position element as relative you're basically creating like an anchor for the offsets. 
So the elements top, bottom, left, and right edges become the boundaries from which you offset the element. 
The important thing to know about relative position is that the element that is set to relative positioning is not taken out of normal document flow. In fact even if it's moved by using the offsets, its original spot is preserved. 
So as far as the rest of the HTML elements and the rest of the HTML page is concerned, that element is still sitting in its original spot even though visually its off somewhere else.
like if we say:
p {
    position: relative;
    top: 50px;
    left: 50px;
}

We apply the offsets, the element moves relatively to its original position in the normal document flow. 
So in this case it's moving top 50 pixels and left 50 pixels. Now these values might be a little bit confusing since we're saying left 50 pixels but yet we're moving the element to the right. 
So the way we could think about these offsets is really not top or left but more like FROM THE top and FROM left. 
So if we take from left 50 pixels, we move 50 pixels to the right, and if we take from top 50 pixels, we're really moving 50 pixels from the top. 
Also note that nothing really changed about the document. And other than this element moving. The original space for that element still remains and the originally laid out elements around that element still remain exactly the same, because they think the element is still sitting in its original spot. 
We can also use negative values for these offsets and which one we use, bottom right or top left. It's really more of a convenience for you. 
like: we can also move like in above case by,
p {
    position: relative;
    bottom: -50px;
    right: -50px;
}
So in this example we achieved the same result by using negative bottom right values as we did by using positive top and left values.

## Absolute positioning:
Idea of absolute positioning is that all offsets, top, bottom, left, right, are all relative to the position of the nearest ancestor which has positioning set on it other than static. 
In other words, some parent, grandparent, on and on and on, ancestor has to have its positioning set other than static, and then the absolute positioning will actually start working. 
By default, HTML element is the only element that has non-static positioning set on it. And it's actually set to relative. 
Unlike relative positioning, the element is taken out out of its normal document flow if it's positioning a set to absolute.

(Check slides)Let's say we have a grey box and it's some kind of a container element and it's position is set to relative. 
Then we have two boxes inside that gray box, we target the number one,and other element that's box number two.
So if we set the position absolute on number one, what's going to happen is, it's going to be first of all, taken out of its normal document flow. And it's going to remain in the place where it was without any other offsets. 
So element two will move up underneath element one since element one is no longer part of the document flow. Element two doesn't think it's even there.

Now if we do some offsets, and in this case we're doing bottom right offsets, we're going to be relative to our container elements, since that container element's position is set to relative. 
And we're going to do from bottom 10 pixels, and then from right 10 pixels over. And that's how we end up with this number 1 box being in the bottom right of our container element.

A really cool feature of this combination is, that if our container element, is itself offset, everything inside of that container is offset with it. 
So we could set our particular layout with a container element. And then move that container element, or offset it all around the screen, without worrying about having to offset particular values, of every element within that container element.

Let's check the code relative-absolute-positioning-before.html 
As we can see here's our four paragraph boxes. They're sitting inside a light bluish container. 
So the first thing we're going to do is we're going to work on this first box right. And what we'll do is set it's position to relative. 
When we do that we see nothing really happened. Well actually, what's going on here is that we've set an anchor so now all offsets of this element are going to be relative to its normal document flow position which still remains right here. 
Let's go ahead and give it some offsets to simulate it going basically down to the second row. 
We'll give it top 65, so it's from the top, 65 pixels down. And then from the left, 65 pixels from the left. 
And here we go so we move this element to second row and as we can see this element is not taken out of document flow, because te rest of the elements are still sitting in their original spots and it's space is still completely unoccupied. 
Well the truth of the matter, the browser is thinking that it's actually occupied by this element that we just moved to second row. 
So, that's the basic run down of relative positioning.

Let's open the code positioning.html, and take the third box which is colored cadet blue, and let's try to set its absolute positioning to move it right back to where the maroon box, used to be. 
So let's go to paragraph three and we'll set it's position to absolute and we'll give it a top of 0 and we'll give it a left of 0 as well. 

We see it was taken out of the regular normal document flow but it's not quite where we wanted it. 
We wanted it right, in the spot where the maroon box used to be, but yet it's flush with the browsers edges. 
Now why is that happening? 
Well let's take a look at our document structure one more time to figure that out.
We remember that absolute positioning needs a relative or an absolute parent as an ancestor. 
Well, it goes up the chain to div and says does it has it's position set to either absolute or relative? And the answer is no. 
So it keeps going and it goes up to the body element. And asks if this element have an absolute or a relative position set on it? And the answer is no again. 
So it jumps all the way to the html element which has its position set to relative by default. 
And that's how we end up with the box going all the way up top. 
So how do we fix it? Well, simple, we just need to anchor the ancestor or the container of our paragraph tag with the position relative. 
And any element contained within that container element will then be positioned relative to its edges. 
In our case, since we want p3 box to be relative to the containing div element, we need to set the containing div element's position to relative.
We'll say position relative, it should jump right here where the maroon box used to be. And exactly, so it does.

Last but not least, let's try to move the entire container element down a few pixels and see if all the containing elements will move exactly in the same position down with it. 
In order to do that let's go ahead and go to our div container and we'll give it a top value of 60 pixels. 
And the entire container moved down together with all its containing elements and they're all positioned exactly the same as we positioned them before.

# Summary:
In summary, static positioning is default for all elements, except html. Html actually has it's positioning set to relative.

Relative positioning offsets the element relative to it's normal document flow position. And the normal document flow is not affected what so ever, by moving or offsetting the relative position element.

Absolute positioning is relative to it's closest ancestor which has positioning set to a non-static value, which is either absolute or relative. 
The important thing to remember about absolute positioning is that the element is taken out out of it's normal document flow. 
And the rest of the elements basically behave as if that element doesn't exist.

Also we saw, offsetting the relative container element offsets its contents as well, which gives you great flexibility to move around a whole set of elements and not just one.