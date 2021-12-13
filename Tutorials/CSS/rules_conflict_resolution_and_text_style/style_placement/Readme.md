Style Placement:
Your choice for placing styles in one versus another place doesn't only affect how reusable the styles are, but it also affects which style declarations override other style declarations.
We have specified that every h2 in our HTML document should have the text color maroon.
However there are other places we could specify the style.
like :
Directly specifying the element by providing a style attribute and giving the style as like,
<p style = "color : blue; text-align = center">
Here we do not provide a target as the element to act is already known(inside which we write the attribute) also like above we can put more than one style by seperating via semi-colons.
This is called inline styling, and as you might have guessed, this is the least reusable way of styling elements there is. Hence the least preffered when practically writing the code.

If we have multiple pages and we Want them to look consistent.
Specifying the styles inside the head tag over one particular HTML page is really not going to help me with the others.
So it will be good if we used some external style sheet which links it to the html pages like we used in the style-placement file.
We do this via a link tag, we tell the browser that it's the style sheet and its location using the familiar href attribute.
We have used the relative url as the style.css is in he same directory.
External style sheets are just styles with lists of CSS rules. There's no particular tags that have to surround any of this. In our case we have made the background colour gray, this came from style.css.

While we will continue to use the style tag inside the head tag so it's a little more convenient to showcase the styles, in a real-world website, you almost always want all your styles to be external to your HTML page.

Summary:
Use the inline styling just for quick testing.
In Real World almost always try to use external css file. It makes consistent view also externalizing our CSS styling into one file, leads to each subsequent page in your website will not have to redownload the CSS styles over and over again.
While we use the head styles for just demonstration purposes, in the real world, they're usually used to override some external ones, however, even that practice is a little bit questionable. If we are trying to overwrite styles that are external to your HTML page and you have no control over, it's better to create your own external CSS file, and then specify it below the external CSS file that you have no control over.