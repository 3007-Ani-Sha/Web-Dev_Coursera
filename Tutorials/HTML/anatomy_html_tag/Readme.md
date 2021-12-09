Usually html tags have opening and closing tags and they surround information to be in the site.
like <p>:opening tag, </p> : closing tag, here p is the element name and toegther with thebrackets is called a tag, closing tag generally is same as opening tag just with a 
we write information in between these both tags. like above p tag signifies a paragraph.

Most of the html tag may have a closing and opening tag but not all like <br> for breaking line and <hr> for horizontal rule.

Every HTML element can have 
predefined attributes. like 
<p id = "myId"></p> here id is the attribute and attribute value is myId.

Tag Attributes: It is a name value pair that is kind of meta data about the element itself that it's being 
applied to.

Note: Each attribute has its own rules for the meaning of its value. So for example, id attribute, being 
assigned as an example, has to be unique within the scope of the 
entire HTML document. In other words, no other element of any kind 
in the webpage is allowed to have its id attribute equal to the string 
myID. If there's another element with the same value for id that 
would mean that the webpage contains invalid HTML which can potentially 
break some style lingo, even functionality of the page.

Some Rules of Spacing:
No space between opening bracket and the element of opening or closing tag.
Also, there must be a space between the element and the attributes and the attributes can only be specified
on opening bracket not closing!

In HTML5, enclosing the value of the attribute in quotes is technically, actually not required in all
circumstances. But never the less, it's best practice to always 
surround the value of the attribute in either single or double quotes

Values in quotes not necessary to use double we can also use single 
quotes, A more interesting case arises when the value of the 
attribute itself contains quotes. So the actual value has quotes as part 
of its value. In this type of situation, the only thing you have 
to watch out for is making sure you close the quote in opposite order of 
opening them. 

like <p onclick = "alert('hi')"></p>
here you can see we have inner quptes and outer quotes as well but in order.

So if the last quote was a single quote, it must be 
closed first. Which quotes you start with doesn't make any difference. 
You could start with double quotes, as we have in the example above, or 
you could start with single quotes. You could also nest these as many 
times as you want as long as you close them, obviously in the proper 
order, but in practice it's kind of very rare that you have to have more 
than two levels of quotes. Any more than that, and your code just 
becomes messy and hard to read.

For tags which contain no content we earlier (in XHTML etc.) used <p/>, 
it is a self closing tag, but in HTML5 if there is nothing initially 
there but may be allocated dynamically by our website, then 
that syntax is illegal so it always preffered to use <p></p> instead to 
signify no content at any instant.