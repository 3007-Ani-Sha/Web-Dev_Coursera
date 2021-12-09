Basic structure of HTML Document:

Every html document starts with a doctype declaration <!doctype html>
to tell the doctype is html, remember no space between <, ! and 
doctype rest all can have spaces and also the lowercase or uppercase do 
not matter as this is case insensitive.
This tells the browser to render the html for this document otherwise 
browser assumes that you are not using html and things will get 
messed up.

Note: The html TAGS are case insensitive so like title is inpreted
same as Title or TITLE but to keep things simple we may use lowercase prefferably.

Then comes <html> </html> which contain the entire html document.
Than comes the <head> </head> tag which describes the main content of 
the page like what character coding should the browser use for the main 
content. It can contain authors description of page, page title and 
whatever other external resources needed to render the page properly.
or in otherwords it contains metadata of the content of document.
This section we specify meta using
<meta charset = "utf-8">

Let's write our first metatag to specify the character set in coding 
of our webpage. While not absolutely required, it's always a good idea to 
specify the character set that the browser should know how to interpret 
the content of the webpage. The most commonly used character set is 
UTF-8. Also note that the meta tag is a stand alone tag. There is no 
closing meta tag.

<title>Cursera is Cool!</title>

Next we'll specify the title of the page. The title is 
one of the tags that is actually required to be here. Without it, the 
HTML will be invalid. It appears on the tab title.

Then we move out of head tag and come to body tag <body> </body>,
it includes the main content visible on the site to the user, often 
referred to as viewport.

Check by putting the codein vlidator that if the code is valid.

Always remember while using nested loop that before closing a parent 
loop close any nested loop inside otherwise we recieve error.

Browser interprets the code from top to bottom sequentially.