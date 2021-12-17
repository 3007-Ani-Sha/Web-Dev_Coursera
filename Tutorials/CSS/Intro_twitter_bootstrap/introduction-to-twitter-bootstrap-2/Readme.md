# Bootstrap Inroduction:
Let's look at the intro-bootstrap.html file in same directory.
We could see some extra folders in same directory and we get them via download, to be more exact, of Bootstrap. 
## Downloading Bootstrap and other files:
Let's switch to the Bootstrap web page, which can be found at getbootstrap.com, we click on Getting started, the very first section here is Download, and we could choose a whole bunch of different options here, but the simplest one is to choose Bootstrap itself. 
It's already compiled from some sources and we can just click Download. 
When we download this and unzip it, inside that zip file, we'll have two folders, and the two folders will be css and js. 
### CSS Folder:
And if we open up the css folder, we'll see that this is where the bootstrap.css is located, and bootstrap.min.css, it's just the minified version, meaning they removed all the spaces and extra things so that when we download it to our browser, those extra spaces and carriage returns wouldn't be downloaded because they don't really make any difference. 
### js Folder:
And there's the js or JavaScript folder. As Bootstrap does have a JavaScript component, so we're definitely going to need this. And again, there's two different files, there's bootstrap.js and there's bootstrap.min.js. 
Now the min, again, is the minified version, spaces taken out, certain variables are renamed so they're not so long, and so on and so forth. 

#### jQuery:
Now we can also see here that Iwe've downloaded a version of jQuery. Now the reason we did that is because bootstrap.js depends on jQuery.

And in order to get jQuery file, we would go to jQuery.com and let's go back to the front page, jQuery.com, and we'll click on the Download link.

And we'll see that there's the option
'Download the compressed, production jQuery 3.6.0', click on it then right click on the page and use save as option to save the jQuery file. So we download this save that file to your js folder. 

Let's take a look at the main HTML page. Well, the beginning of it is NOTHING that we haven't seen before already. 
And there's the heading tag, or the head tag we should say, declares to be utf-8. 
Next meta tag, we haven't seen, but this is something that Bootstrap recommends we do, and basically just tells some versions of Internet Explorer that they should go ahead and use the latest version, or the latest compatibility version, of its rendering engine. 
There's our familiar meta viewport tag.s. 
And there's the HTML5 shim and Respond.js. And basically this is a way for Internet Explorer 8 to support HTML5 and media queries. Well, hopefully, this is going to be taken out soon as Internet Explorer 8 will become less and less relevant. 

Then we have the title tag and, finally, we have the two link tags. The first one is the bootstrap.min.css, that's the actual Bootstrap CSS framework, and the second one is styles.css and that's really our styles. 
If we take a look at the CSS styles, it's an empty file, we haven't really put any of our custom styles there yet. 
So, all we're doing right now is relying on the Bootstrap framework and we put the styles here already just so we have a placeholder for our styles in the future. 
NOTE: We declared our style after we declared the Bootstrap CSS styles. And the reason that is, because we're going to be customizing whatever Bootstrap gives us and, therefore, we want to be overriding what Bootstrap gives us, not having Bootstrap override what we are trying to style. 

Finally, we get to the body tag and at the very end of the body tag, right before we close it, we declare some JavaScript files or some JavaScript libraries that we're going to depend on. 
First of all, Bootstrap JavaScript depends on jQuery, and that means that we first have to declare jQuery and then we will declare and reference the bootstrap.js. 
And last, we reference our own JavaScript file, which is likely to be using either the jQuery or the Bootstrap JavaScript files. And again, if we go and actually take a look at that script.js, it's really just an empty file at this point. It's just a placeholder for our future script. 

Well, our page looks just like there's absolutely nothing here, and that makes sense since we really didn't put any content in. 
Let's go ahead and put some content in right now. Let's go just start with h1 and say Hello Coursera! We save that and we go back to our browser and we see Hello Coursera shows up and clearly something's different than we would expect before. 
The font family clearly is not the default one and the color is a little bit different as well. So it looks like some Bootstrap styling is being applied. 
Well, to verify that, let's go ahead and right-click on it and go to Inspect Element. Yes, indeed, there's some styles that are being applied from the bootstrap.css. 
Another important thing to take a look at is the console because if you misspell something or you reference the wrong JavaScript file or something like that, there would've been some errors showing up right here. 
And since we don't see any errors, looks like we're in good shape. So this is the basic and the base Bootstrap starter page that we could take and start coding our Bootstrap based web pages. 