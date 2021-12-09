First install a text editor like VS Code, Git, Node.js and browser sync.
Then we have to go to Github and create a repo -> then got to settings -> Github Pages -> select the 
branch you want to create your website on as all things on that branch will only appear on your site ->
So select the branch then if you want, select the theme of the site.


Then create site, then an html document for your site and generally all of the server on net take 
index.html to be the default html website document so you can use the address till the site/ folder only 
if your document is index.html otherwise add /site/name_of_the_file.html to go to ypur website.

Fisrt go to the directory we want to run browser-sync with like in our first case it is site/ then Run
your Browser sync using, browser-sync start --server --directory --files "*" ,in this snippet 
browser-sync is the snippet instructing the system to work with browser-sync, --server leads to the server 
mode working, --directory gives the list of the files in the directory we are working in, --files tells to 
reload the files right away without we manually reloading it. Also we have to add files to be keeping
track of add and we used "*" meaning that we want all the 
files to be reloaded.
Note: these changes are in the local system as we are not pushing changes to the github just making 
changes and saving files creates these changes in the local system not the link we used to open our site! 
So it helps us in seeing what changes our code make in our local system to ensure fast and correct push to
the repository, by syncing our editor and local site rather than commiting and pushing and reloading
everytime.

Press Ctrl + c to finish or enf browser-sync.