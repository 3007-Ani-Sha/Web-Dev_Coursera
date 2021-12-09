HTML content models:

Content model refers to the full behaviour browser applies to the 
elements belonging to that content model, and to the nesting rules of 
those elements.

All the elements are either block level or inline elements in earlier models but in HTML5 it is divided into 7 categories.
Block level elements render to begin on the new line by default.
So what that means is every time you specify a block-level element in HTML, the browser will automatically place that element on a new line in the flow of the document. Block-level elements are allowed to contain inline or other block-level elements within them. This is in contrast to inline elements, which render on the same line by default. 
Which means if you put a whole bunch of inline elements next to each other, they will all be going on o the same line, as if there is no new line character present.

Inline elements can only contain other inline elements. In other words, an inline element cannot have as part of its content a block level element.

Even though HTML5 came up with new content model names and new sub categories, and just new way to break them down. At the end of the day, you could still look at all of these, as far as your coding is concerned, as block-level elements and inline elements. And just to be kind of complete, block-level elements roughly translate into the new HTML5 category of flow content, and inline elements roughly translate into the HTML5 category of phrasing content.

div is an block level element while span is an inline element.
span 1 comes to next line even if it is an inline element as the div takes one line and pushes the inline element to next line.
also div 3 is in next line to span as it is a block level element.

also indentation in the document making it look as if on site has nothing to do with it even if you place them without any space it will give you same output.

Now the spin two tag is sitting inside the div three and since it's an inline element it doesn't cause any more formatting And it just sits right here inside the DIV 3 without requiring a new line.

check your code in the validator also.

The W3C kinds of content section, where it basically lists the seven types of content that HTML5 defines. What's cool about this page is that you could roll over different parts of this graphic and you could see all the different elements that belong to this particular HTML5 content model category. 

