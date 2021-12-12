Creating links:
There are different types of links and how we could create them in our webpage.
The first type we are looking at are internal links 

Now the way you create links is by specifying an a element with an attribute href.
And href stands for hypertext reference. The value of href can either be a relative or an absolute URL.
In our case here, since we're discussing internal links which are links that point to internal web pages of the where application, the links we're showing are all relative URL links. 
However we could still have an even absolute URL links as long as they point, again, to the same web application that we're in. 
Since we're providing no directory information, the browser will assume that same-directory.html is a file that lives in the same directory as links-internal.html. It's also a very good idea to always specify a title attribute for the a tag. 
The title attribute is used by the screen readers that help the visually impaired people get through the web page. The content in between the opening and closing a tags is the content you're going to see in the web page, when it is served and on which you're going to be able to click to go to the href that the a tag is configured with. 
Note the second example of our a tag. In this example, we're surrounding a div tag with our anchor tag. In other words, this div tag is going to be the content over our link on which were going to be able to click. 

What's interesting to note here is that the first link, linking to a file in the same directory, is clearly an inline tag since it's not forcing itself to go to a new line. But yet in the second case, div linking to a file in the same directory, we're surrounding the div tag with our a tag. So what's going on here? Are we using block level element, the div, inside an inline element? Well, turns out things are little bit more interesting. Let's take a look at the a tag as defined in the W3C specification. If you take a look closely, the a tag is both a flow content and a phrasing content. In other words, to map it back to the HTML four days, the a tag in the HTML5 is both an inline element and a block level element at the same time. And this is what allows us to take the a tag and surround a div tag inside of it. The authors of the HTML5 specification realized that there are a lot of times where you would like to be able to click on a whole region. And a most common occurrence of that is on when you have a logo or some sort of a company name in the top left corner for example, of your webpage. People expect to be able to click on that and be able to go to the front page of the company. Prior to HTML5, people had to use all kinds of tricks in order to achieve that effect because the a tag was only an inline tag, and you weren't really able to wrap the a tag around the div tag.

External Links:
The href value usually starts with http:// because it's usually the case that external links are hosted on a different domain name than your website. However, there's one feature of the a element that I would like to demonstrate that is quite often used in conjunction with external links. And that is the target attribute. Target attribute, when it's set to the value _blank, forces the browser to open this page in a new tab or a new window.

Another type of link that is extremely important to know about is a fragment identifier.

And as you could see, the links that have set up here all have a very specific format in the href attribute. It's a # followed by some name like section1, section2, and so on. Now what these links are pointing to is a section of our page. Now you could identify a section a couple of different ways. You can have in ANY TAG any tag that has an id with that section name,but we use the a tag generally as we use it for links only and also can use block-level elements inside it but if required also any other ta with id attribute.

Notice that the section name does not contain the # sign. Only the link to that section contains the # sign. That's one way to identify a section within the page. Another way is, if we scroll down all the way to the bottom of the page, is to create an anchor tag with a name attribute and name the section very similarly to the way you name a section id. The way you refer to these sections is exactly the same, you put a # in front of the name of the section and stick that value in the href attribute of an anchor tag.

NOTE: a functions both inline and block-level element only as far as inclusion of elements is concerned but default displayed as an inline element.

If we scroll all the way down, we even have a back to the top link which basically points to all the way to the top. Now, the top is right here, and if you look at the code and scroll all the way up, we have an h1 tag that has an id with top which allows us to scroll all the way to the bottom of the page, see that link, and jump right back to the top.

What's really neat about fragment identifiers is if you click on one and you have them in URL, you could copy and paste this URL and send it to a friend as a bookmark. And when they paste it into their browser, they will be taken to this page and jump straight to the section that was pointed to by the fragment identifier.