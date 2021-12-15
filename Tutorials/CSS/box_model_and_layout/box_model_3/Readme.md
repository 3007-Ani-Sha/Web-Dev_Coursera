Box Model part-3:
Let's go ahead and add some more content into our box, and then we'll use the Emmet plugin, E-M-M-E-T, go ahead and look it up.
Then the height of our element adjusts according to the content size.
But what happens if we constrain our element's height as well? Something's going to have to give, right, because there's no space left. So let's adjust a couple of things. 
Okay, so let's go ahead and now give it a height that will clearly not be able to fit all the content of our box, so let's give it a height of, let's say, 50 pixels.
Now, contents spilled over, outside of our box. If we actually place some element right below it, let's go ahead and place another div, and and we'll say again, we could see it's spilling over right over the other content. 
So it's basically spilling over out of the box.
We'll remove another div added by us. Well, there's a couple of ways of dealing with this. 
And there's just a property to help us do that. And the property's called overflow. 
So we are overflowing, at the moment, we are overflowing our content outside of the box.
So what should we do with that overflow? So by default, the overflow is visible. And this is exactly what's going on.
There's a couple more options we could do with overflow. Number one is we could just clip it. 
So in order to clip it, we could go ahead and type hidden, so If it's hidden, then it'll just go ahead and clip it where the box ends. 
However, there's a couple more options we could do. We could say auto. 
Auto means go ahead and put scroll bars wherever they're needed, in order for us to look at the entire content and for content not to spill over. 
And we have a scroll bar, and we can now scroll through our entire content right inside that box.

If we wanted to, we can keep the scroll gutters always visible, no matter whether or not we need them or not, by just saying scroll, as the property value. 
Now we have scroll both ways even though there is nothing to scroll here, but we could still scroll up and down. 

NOTE : Be warned that users absolutely hate double scrolling. Having the scroll bar on the side of the browser plus having to scroll inside some element is something that is not preferred. 
However, there are cases where it's perfectly normal and expected to do. 
For example, if you're looking through, let's say, terms of service, and you just really want to pack in your entire UI into one visible chunk,
yet you want them to be able to scroll through some terms of service or something like that, or some of the content. 
A solution for your overflow being auto is certainly an acceptable one.