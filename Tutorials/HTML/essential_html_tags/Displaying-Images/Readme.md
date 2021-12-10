Displaying Images:
Image tag is used to display image  in HTML using this img tag which is just short for image. And the src attribute of the img tag is a URL that points to some image file.
Now this URL is no different than the href that you've seen with the regular link A tag. It could be a relative URL, or it can be an absolute URL, even one that contains an external link. Next, we specifiy the width and the height of the image. While not absolutely required, it's a really good idea to always specify the width and the height. 
And also the alt tag which is used by screen readers that help people with visual impairment. 

The interesting part here is that image appears as if it's another character within our text, which should right away tell us that an img tag is an inline element.

It's very often the case that you use images as sort of these anchors within your visual layout of your page. 
And if this images take time to load, the page might appear jumpy. So this is actually the primary reason why you would want to use the width and the height of the image. 
We want to tell the browser to reserve this space and to visually partition your page such that it knows that there should be something going on in there even if it takes time to load it. 
So let's simulate what would happen to our layout if we removed the width and the height from this image. 
Let's go ahead and save it, go to our webpage. And instead of just reloading it, since our Internet is pretty fast , We simulate Internet being very slow. And we'll see how the fact that the paragraph's being visually separated by image is not necessarily going to happen right away. 
And we'll see some jumping. But the way we're going to accomplish that is by bringing up the Chrome developer tools.
Press Shift + Alt + I. And we go to  the Network tab. Here, there is a throttling setting, And it says No throttling. We change that to, the lowest possible setting. And now We go ahead and reload the page. And watch what happens in terms of this space between the Theodore Roosevelt and the actual quote.

There appears a jump of image in space not available before as the browser did not k ow how much space will image need so it leaves no space at first then covers it with image.

Even worse if you're relying on the image to give some sort of a visual layout to your page and for some reason the image did not load, for example the URL could be broken.

And if URL is broken, then no space just a image icon(small) appears and no space between two paragraphs. 

If we relied on a specific amount of space between the quote and the footer of this page, well then the space is reserved for image even if it does not appear so as preserving the desired page layout we made.
Hence, even though the image is not loading, the visual spacing and the visual layout remains correct as we intended it to be.