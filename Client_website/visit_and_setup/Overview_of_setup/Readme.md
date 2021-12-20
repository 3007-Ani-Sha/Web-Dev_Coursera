# Ground Rules and set-up overview:
Before beginning let's go over some rules and get an overview of our enviornment.
First a few tips:
Remember that the source code is available in the resources for all files.
We are now going to build up the site piece by piece, Let's start the browser-sync by using: 
browser-sync start --server --directory --files "*", where start starts the browser sync and the server makes the browser-sync serve our website from the directory we're in.
--directory basically tells system to list the directory structures instead of trying serve up a file, next is we specify the files we want the browser-sync to watch for modification, so that it reloads those files once modification is done in them, putting star alone means we specify all files.
If we start browser-sync in terminal we get two url's :
localhost:3000 and localhost:3001
first one is the page we are viewing in the browser latter is the UI of teh browser-sync, If we go to it we see a whole configuration UI for our browser.
We may explore it further.

We start with the standard bootstrap page. In the CSS folder we have various files that we don't need here for this page which are not needed, the needed ones are styles.css and bootstrap.min.css so we can delete others, if we want, to prevent space consumption.
First we open the styles.css and use some global styles on body.
We'll give the font size as 16px standard, color as fff which is white colour, background-color which we give as to match the napkins and the different restaurent paraphernalia so we give it to be #61122f.
We are going to use the font family oxygen, but it is not preloaded in the system.
So, we go to the google.com/fonts, search for oxygen font and select which one we want and then select it's type so as to which normal, bold etc. we want to choose to use we choose less if not needed as our page will then have to download less files and site will function better. 
Also we may include sans-serif in order if the oxygen isn't available.
We then get link which we paste in the head section in styles we place the style given just below link in the style.css and get the result.