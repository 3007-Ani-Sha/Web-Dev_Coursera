HTML character entity references:
Now we have to differentiate between the characters we sue as syntax in html and that which we use as content like <, >, & characters so that they don't lead to an error somewhere in the code.

So instead of <, use &lt; in code
instead of >, use &gt; in code
and instead of & use &amp; in code.

If something is written in the two brackets < and > it may be skipped even due to browser not able to understand which tag it is.

In reality, HTML contains a whole ton of different HTML entity references. And obviously we're not going to be able to go through most of them. However, one particularly common one is the copyright symbol. And the main reason why we use an HTML entity reference for it is because it's not really very readily found on any keyboards out there. However, we could very easily put that in. So let's go ahead and put it right here after the year. And the copyright entity reference is just &copy;.

There's another HTML entity reference that is very commonly used and unfortunately, a lot of time misused as well. It is &nbsp;
Let's say we wanted the words victory nor defeat never to wrap, but always stay the same. So, what do I mean by that? Let me pull the browser and make it a little bit less wide. And as you can see, the word victory nor defeat is split up into different lines. If i don't wnat that meaning I want that, victory nor defeat, these three words always appear in same line irrespective of how less wide is the window.
to do that instead of spaces in between we type &nbsp; in between them which is non breaking space.

But be cautious about misuse of this entity reference. A lot of people use this entity reference if they want to make a space between, let's say the word critic and the word who, and they will put a few spaces using &nbsp;. And if we now refresh the browser, I see now got a few spaces between the word critic and the word who. And that's a total misuse of this entity reference. If you ever wanted to have spaces, or extra spaces, between some words in the text, what we would do is we would probably wrap around some text in a span tag and then apply some margin, in this case left margin, to the span tag to remove it the further from the word critic. But you should never use the non-breaking space HTML and the reference For that purpose.

If the encoding of viewing the page or reading the html mail is old hence providing limited character encoding, then some character in the paragraph may be disturbed like quotes to solve this we use the 
&quot; to input a quote. Maybe they are not the same type of curly quotes as before, but they're quotes nevertheless.

