Heading elements(and some new HTML5 semantic comments):

semantic means :"Relating to meaning in language or logic."

semantic html element: Element that implies some meaning to the content.
like it's importance or description etc.

HUman or machine can understand meaning of content surrounded by a semantic element better.
Also it MAY help in search engine ranking, i.e., SEO

Now let's take a look at an example of the first type of semantic tags that we're going to look at, the headings.It has all the heading elements, h1, h2, h3 and all the way to the h6 element, well, basically, all the available heading elements. And what these headings are trying to convey is that the heading content between opening h1 and the closing h1 element is the most important heading in the document, and on, and on, and on. So h6 would be also a heading of the document, but it's the least important one of them all.

We can see that the browser defaulted to styling that basically, visually tells us that this is the main heading. Heading number 2 is a little less important and on and on all the way to Subheading 6, which is the least important of the headings.

Couple of important points to understand about these elements. First, even though their default rendering in the browser appears to give them visual distinction, these should not be used for styling. These elements are only meant to convey structure of your HTML page, nothing more. With CSS, any regular development can be styled to look like any one of these heading tags.So, why not just use a div? Because if we did, we would lose the meaning of what a heading is. Second, something that's marked h1 is obviously the most important and generalized description of the content of this page. And while there are disagreements among the SEO experts about how effective these semantic tags are for helping your search engine rank in general, everyone agrees that when it comes to the heading tags, and specifically the h1 tag, that it is of utmost importance to use it and that it should contain the wording, which truly conveys the central topic of the rest of the content.

Header tag is used in the body, it contains header information about the page like usually company logo, some tagline, sometimes navigation.
The nav tag signifies some content that is used for navigation within our website. Afterwards, we have our familiar h1 tag and you should absolutely always have that. And then we have a couple of set of section tags here. And within each section tag, we have a bunch of article elements. If you look at the HTML5 specification, you'll see that the way the section element is defined and the way the article element is defined is that it's usual or it makes sense that the article should go inside the section element. However, that is not always the case and there's certainly no hard rule about it.

Then we have a aside tag which conatains information about the other posts related to our topic.An aside tag is basically an element that communicates that there's something that is inside of this element that is related to the main content of the page, but not as direct a relationship as the main content. And finally, we have the footer tag, which, just like it sounds, has the footer information in it.

All tags are block level tags so why do we not just use div tags?
We use semantic tags, not div tags as it is easier to rad the code or what is going on structurally in tha page, like we can see that article 1, 2, 3 are somehow related also Article 4, 5, 6 are somehow related and these two sets are segregated into two sections Section-1 and Section-2. 

And remember, semantic elements do allow you for more meaningful expression of the structure of your HTML code, HTML page, but they don't really give you any more functionality than a regular div or regular span would without it.