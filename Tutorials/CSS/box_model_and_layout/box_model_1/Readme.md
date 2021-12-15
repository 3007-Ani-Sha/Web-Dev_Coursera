Box model-1:
In HTML every element is considered a box. However, there's more to that box than just the content that the element wraps around. 
Let's take a quick look at a simple diagram we can see in the lecture slides or open a chrome dev tools for any of aour html documents by right click and insect to see the diagram.

In HTML document, besides their content, each box consists of padding, border as well as margins. 
The box model refers to the components that make up an HTML box as well as the rules that govern how these box components affect the layout as well as how width and height of the box are calculated.

So now we look at the file 
box-model-before.html in same directory.
Since div is a block level element, it tries to fill in the entire parent in terms of width. 
So it's trying to fill up the entire width here in the browser. But there's something strange going on if we take a look. 
There's some space that's gone in here right before Lorem and here at the end of our content beginning and there's spacing going on.
Right click on the page and press inspect to open the chrome dev tools and analyse by first choosing the box element we see there are no component other than content, 
then we choose the body tag and see that there is margin of 8px all around the body as well, which must be default by the browser.
It's coming from the user agent style sheet, which means it's the browser itself. 
It's the default browser styles. So that's actually pretty common that the browsers do stuff like that. 
In order for it not to affect what we're doing, we're going to reset it. And it actually resets on the web out there, plenty of resources on the web how to reset default browser setting. 
But we'll go ahead and do margin 0 and we'll also do padding 0 so we won't be affected by any of that.
We see that now our content is flush with the actual borders of the browser window.
And we can see the context is green. 
And we're not seeing the background of the box the content is actually sitting in because we would have seen something blue in the background but always see green. 
And that is because the inner box, the inner content div is covering up the outer one completely because they are the same size. 
They both try to fill up their parent which is in this case the body tag. And since one div basically sit on top or inside of other, it's covering up the blue background. 
Let's do padding, and we'll do 10px top. 10px right, 10px bottom, and 10px left. 
If we only write 10px hen it will take all 4 sides as 10px, otherwise we will specify for four sides in order top, right, bottom and left.
And what the padding is doing is basically giving some padding around our content and our content being the div tag with the content text, is the one that's being kind of squeezed all around and the padding is showing up all around and now you can see the blue because that's the background color of our box. 
Okay so next, let's give our box some border. Let's go ahead and say border, and we'll give that border that's going to be 5px thick, solid and black.

let's constraint the width of the box to be 300px.
Since we didn't restrain our height, it went ahead and wrapped around the text. 
And basically the height will adjust unless we restrain it manually by specifying the height, it will adjust to however much it needs to fit. 
So if we make width a little bit small, let's make it let's say 100 pixels,we'll see the height will become a little bit bigger.
But let's put it back to 300 and proceed.
If we wanted our box to be of 300px wide not the content box, as we have specified width in the box tag.
Actually box right-now is 330 px wide.
And changing the dimension of border or padding also changes the dimensions of the box according to them.

So even though we said I want the width of the box to be 300, it turns out that we aren't really setting the width of the box, we're actually setting the width of the content. 
And it turns out for layouts, and just in general sanity this is kind of annoying. 
We really want to change that and CSS3 actually did change that, it turns out that by default, the box sizing is actually a property of every HTML element and by default it's actually set to content box, which means when we specify it's height and width, we're specifying the height and width of the content box, not the entire thing. 
Well CSS 3 came out with a new value for that property, and that's called border-box. 
Let's go ahead and set that here. We'll say box-sizing, and we'll say border-box.
Now we could see that the total width of the box is actually 300px.
If we change it back to content-box it will jump back to original sizing.
But the truth of the matter is, all the modern frameworks like Bootstrap and others use border box as its sizing mode, 
and as you plan and work with your layouts this is the same choice to make. 
So, make sure we always stay with a box sizing of border box.