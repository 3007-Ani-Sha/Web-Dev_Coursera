Conflict Resolution Part-1:
Cascading is a fundamental feature of CSS. It's an algorithm defining how to combine properties values originating from different sources.
The cascade combine the importance, origin, specificity and source order of the applicable style declarations  to determine exactly which declaration should be applied to any given element. And if there's a conflict, how to resolve that conflict. In other words, how to tell which CSS rule wins.
There are many terminology and concepts surrounding cascading algorithm but to get a working knowledge we should understand these four concepts :
1. origin
2. merge
3. inheritance
4. specificity

Origin(when in conflict):
When two declarations are in conflict, in other words they specify the same property for the same target, origin precedence rule kicks in, and it's a very simple rule. And the rule is, the last declaration wins.
NOTE : HTML is processed sequencely from top to battom so the declaration lower on the document has a higher precedence.
And also for precedence, think of external CSS as declared at the spot where it's linked to.
And to find the precedence, just imagine the entire external stylesheet to be present at the spot where it is declared in the head(as it is generally declared in the head). 

Origin precedence(when no conflict):

When different CSS declarations do not conflict, that is, they still target the same element, but the CSS properties with which they target that element are different, there's even a simpler rule. And that is that declarations merge.
So a declaration for, for example, font size, and a declaration for color, since they're two different properties, when they're targeted to the same element, even if they're targeted from two different origins, they will merge into one.
And the element will get both the font size and the color.

Now we go to origin.html file, it has link to external.css that specifies that every p, every paragraph tag, should have font size increased to 130%, the background will be gray, and the color of the text will be white.
but we also have another rule in head that makes colour maroon and it at bottom of above so the p tag has it's content colour blue as it overwrites the p element.
So, the first paragraph has colour of text as maroon but after that colour changes as the second paragraph below has inline styling which is after or below the above ones and hence overrides the maroon colour to black.
Rest properties of p tag do not conflict like the text size and background colour so they merge.

Next concept we look at is inheritance.

The basic idea is that you have the document object model tree. And if you specify some CSS property on some element, all the children and grandchildren and so on and so on of that element will also inherit that property without you having to specify the property for each and every element.
Like if we specify one property on the body tag, every element that is a child of a body tag, or even a child of a child of a body tag and so on, will inherit that property. 
Similarly, if we specify a property on some element within our HTML page, every child and grandchild and so on of that element will also inherit that property. But obviously, no parents of that element will inherit that property and therefore will be completely unaffected by it.

Now we look at ineriatnce.html file,
It's a very common practice to specify some declarations for the body tag and the reason is obvious. 
Body is the top element in our HTML as far as the view port is concerned. In it, we can specify some rules for the entire HTML document and then using our cascade origin precedence, overwrite some specific rules a little bit lower down the line, while keeping everything else very consistent.
So first we specify that any text appearing in our document should be color: red. 
And we also specified that everything should be align: center and, which is very common, to specify one font that will be consistent throughout the entire HTML document, in this case, Helvetica. 
Then we specified a particular color of the text just for paragraphs. And even though each paragraph will inherit color: red, we're here to override that with color: blue. 
Last, in the second H2 tag a little bit lower to the bottom, we are using again the origin precedence rules to over write the text color to green for this particular subheading too.

So the other rules like text-align are followed by every element in body tag as there are no conflicts.