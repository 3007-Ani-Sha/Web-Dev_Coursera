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