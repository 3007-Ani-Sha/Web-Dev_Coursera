Styling Text part-1:
There are ton of CSS properties that effect the way text is displayed. 
We will not cover all but look at a few that illustrate the concepts behind their styling.
We have a class style on the second paragraph, we will sytle it to see difference in from default styling on first paragraph.

The first thing we want to do usually is specify font-family. So font-family is the property name. And the value for font-family could vary. 
And in fact, we have a link right straight in the HTML page, and we'll go ahead and click that link. 
It basically gives you commonly used font combinations. So what we usually put in the font-family is the value is combinations of fonts. 
And the reason we put a few fonts is because when we specify font-family in this way, we're relying on the user's computer to have that font installed. And it's possible that a particular font will not be installed on the user's computer, so you want to provide some options, and at the very least, you want to provide whether you want a serif type of font, or sans-serif type of font. 
Because every computer will have some sort of a default serif or sans-serif font. 
The difference between serif and Sans-Serif is that Serifs are the fonts that not only have the lines, but also have a bit of an embellishment at the end of each line. So there are little squigglies at the end of each line. As opposed to Sans-Serif, they're just very straight lines.
Use any combination.

Next change the color, while it is probably okay to use predefined colour like red, blue, green etc. in testing websites, We would want to use a hexadecimal value for a particular colour.
The hexadecimal color value is written by using # first then typing the hexadecimal value with no gap in hexadecimal and '#'.
And the way this color is specified is, the first two numbers is red, second two numbers is green, and the last two numbers is blue, ff being the highest blue value. 
So, basically it's the same RGB specification that a lot of colors are specified as, except it's expressed in hexadecimal.
There are various shortcuts for specifying colors, we mqy look them up ourselves, but needless to say, if we specify a six digit hexadecimal color, it's certainly good enough.

The property font-style is the one that specifies whether or not you want something to be italic or normal etc. 
And we'll give it an italic to just change it a little bit.

Next thing is font-weight. Now font-weight can be specified from basically normal to bold. And we can also specify it using numbers. So we can specify it all the way to 800, 900, and bold. Well 900 will be pretty bold, but in practice people just use the word bold as a predefined keyword so that's also good enough and about equals 900 anyway. 

Next we'll specify font size. And we'll give it 24 pixels. And this will obviously give it a little bit of a bigger font size than it is right now. 
About every browser has a default font size of 16 pixels. 
And that should give you an idea as to what an on-style text would look like and by on-styled we mean the one that has the browser default styling applied to it.
Pixels are what's considered absolute unit of measurement for size. 
However, they do have a bit of a relative component to them. Pixels are relative to the viewing device. For low DPI or low dots per inch devices, one pixel is one device pixel dot of the display.
For printers and high-resolution screens, one pixels implies multiple device pixels. Point is, higher DPI devices will give you sharper text, because for every pixel that it's drawing, it's actually drawing multiple pixels on the device. With all that said, pixels is still considered an absolute unit of measurement.

We will look at a couple of more text properties that you might want to know about. 
There's another one called text transform and it allows us to basically control how our text looks.
Capitalize it, lowercase. If we capitalize, for example, we could see that every word now gets capitalized.
There's lowercasing. we could have the entire text get lowercased. Or we could get the entire text get uppercased.
Another useful property is text-align. And what it allows us to do, it allows us to either center, right, justify, left the text within its block level element.