Combining Selectors:

Combining Selectors is a very powerful technique that allows you to more precisely target dumb elements.
Element with class selector:
it is described as:
p.big {
    font-size : 20px;
}
it targets only p tag's, in those p tags also it targets only ones which have class big.
Note : There is no space between element name, in our case p, and class name.  
it applies to a code as:
...
<p class = "big">...</p>
<div class = "big">...</div>
...
So only p tag's content changes according to p.big hence making it's font-size as 20px.

Child Selector:
it is written like:
article > p {
    color : blue;
}
it is read from right to left and said as every p is a direct child of article.
the way it works is,
...
<article>...
    <p>...</p>
</article>
...
<p>...</p>
<article>...
    <div><p>...</p></div>
</article>
...
only the first paragraph tag will be coloured blue as only it is a direct child of articlein second there is no article wrapping it.
Also in last it is not a direct child as it has div tag around it then comes article tag.

Descendent selector:
it is declared as below,
article p {
    font-size : 24px;
}
it is read or interpreted as Every p that is inside(at any level) of article.
We target every p element that is inside a article element not necessarily a direct child but it's ancestory must be a article tag for rule to be applicable.
like:
...
<article>...
<p>...</p>
</article>
...
<p>...</p>
...
<article>...
<div><p>...</p></div>
</article>
in first p tag it is a direct child so will be included in rule, in second it is not a descendent so rule does not apply, while in third the rule applies since the paragraph tag is covered at some stage by the article tag.

The combination is not lmited to element selectors also we can have various combinations like:

.colored p{
    color : blue;
}
meaning every p that is inside a element that has a class colored will have this rule applied to.

or

article > .colored {
    color : blye;
}
meaning every element with class colored that is a direct child of article to that this rule will be applied.

NOTE : The div in the document given in this folder has two classes applied it.
The way we apply more than one classes is by giving a space in between of the name like:
class = "mainpoint highlight", this has two classes mainpoint and highlight.
To declare it we use:
.mainpoint.highlight{
    color : blue;
}
classes can be in any order.

Summary:
Combining selector:
1.Element with class selector(selector.class)
2.Child (direct) selector (selector > selector)
3.Descendent selector(selector selector)

We didn't cover:
1.Adjacent sibling selector(selector + selector)
2.General sibling selector(selector ~ selector)

In Element-before-class:
First we target everything with class highlight and make text colour green.
Next, we'll look at all p elements with class highlight to turn them to italic.
Next, we'll combine two class elements. In this case, we want all the elements with class highlight, as well as with class mainpoint. If both of those classes get applied to the same element, we want that element to turn red, and its background color to turn black. So the way we could specify that, it's just to say,
.highlight.mainpoint, that is to say that an element that has highlight class and also has a mainpoint class assigned to it should be colored red and background black. 

Next let's take a look at the file called child selector before that HTML.
We target any article element which is a direct child of a section element.
So we make the declaration as 
section > article to the rule and get desired properties.
The next target is, any h2 element which is a direct child of a section element so again we use section > h2 and then properties can be applied.
And since subheading one is a direct child of the section element.

Next we come to the descendent-selector file:
We target all Li elements that are inside of a section element. That is, no matter how deep they are in the element tree underneath the section element, we want the style of color green applied to it.
We say section space and li, and as we can see, this selector combination should target this first list.