# Media Queries:
let's look at media-queries.html in this same directory.
In it we have a h1, two paragraphs. First one is ID'd with p1, and the second one is ID'd with p2. 

We have some base styling that we're going to apply to these paragraphs before we even get to the media queries. 
We're not going to pay too much attention to H1. That's just really for our web page to look a little bit more decent. 
So here we're targeting our paragraph and basically just giving it a border of 1 pixel solid black and giving it a bottom margin of 15 pixels. 
And then we're distinguishing each paragraph by using the ID selector. By giving it a particular color in the first paragraph is going to be fairly large. 
It's going to be 300 pixels by 300 pixels. 
And the second one is going to be a different color and it's going to be 50 pixels by 50 pixels. 

If we decrease the width of the browser nothing changes. Now let's make the media queries.

First one is going to target the large devices only. Let's take large devices to be ones with width greater than 1200pixels.
So let's make the query with media feature min-width as 1200px. Now we target our paragraphs. let's start with first paragraph, We'll change it's width to let's 80%. 
It means that paragraph number one at width 1200 pixels or wider will take 80% of our screen. 
As for paragraph number two, we'll make it that it's width is 150 pixels. And, we'll actually change it's height to 150 pixels as well. 
Open our browser at full size now is definitely wider than 1200 pixels, so both of the paragraphs actually were affected. 
Now, how do we know that my browser is wider than 1200 pixels? Well, if we open up Chrome developer tools and start dragging the side of the browser we'll see in the top right corner that it's showing you the actual size. 
And as we go smaller and smaller when it goes to pass 1200 pixels, we see that everything jumps to it's original base sizes. 
And if we make it a little wider again, it would jump again to this styles that the media query width meet with 1200 pixels specified.

Let switch back to our code and write one more media query for medium size devices. 
Medium sized devices is probably something around 992 pixels and 1199 pixels. 
These numbers are from the standard ranges, width ranges, that the Twitter Bootstrap framework defines for its different media device sizes. 
Our media query should be minimum width of 992px and remember that and, and max-width Of 1199 pixels. 
And remember we're trying make sure we don't overlap with the previous media query otherwise we'll basically going to end up applying both style again.

We'll target again Paragraph 1, and we'll go ahead and make it smaller. We'll make its width 50%. 
And paragraph number 2, we'll make it's width to 100 pixels and the height, we'll make it 100 pixels.

If the screen width falls into range of 992 pixels and 1199 pixels. We  we'll make first paragraph 50% of the screen.
And paragraph number two will become 100 by 100. And if we stretch our browser all the way to 1200 pixels and above, the first paragraph will become 80% of the screen and the second paragraph will become 150 pixels large. 
And obviously none of this makes any sense in terms of a nice layout this is really just an example to try it up.

If we go even below 992 pixels. As we get closer and we switch from 992 to 991, We're back to our base style then because we have no media query that is defined for that particular screen size. 
Chrome developer tools has one more thing. We'll see a cell-phone looking icon. If we click that we'll see a whole different view of our page that we're able to use. 
And we see here we can select any device we want and even select between portrait and landscape mode and see what my website looks like on that particular device. 
And we could also go ahead and change the device size right here just by dragging the border of this inner board-sized window.
And one more thing is if we take a look, it actually shows us in our own CSS that we loaded into this page, what are the different ranges in terms of the media queries that exist.
And we can see here we have one that's from 992 to 1199. And the other from 1200 and on. 
And if we go ahead and start selecting some devices let's see what does it look like on the Apple iPad. 
And we can see that we can actually go and see what happens at these break points. 
And the points between one media query and another one, is called break points. 
So we're now going towards our second break point, and when we get there you see that our first box basically made itself 80%, we see the difference. 
That breakpoint, 992 pixels. At 991 pixels, the break points will change. And now we are back to our base styling. 
So Chrome development tools are incredibly useful when you're trying to design and test and basically see and debug a little bit your responsive designs.