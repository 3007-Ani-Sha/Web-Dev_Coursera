# Design Overview:
(Check resources for better understanding)
Now, we're going to go through our design overview and this is a combination of work that, the graphic designer did for us. 
And we're going to see how this is going to evolve into a real website. So when we're first starting to design a website, the worst thing we could possibly do is start coding right away. 
We don't want to do that. We don't want to design a website coding it at the same time. 
What we do want to do is we want to have some layout mock ups, that we present to the client that take little to no time to design and to put together and present to the client. 
And once they approve, and we know exactly what we're coding, of what we're trying to strive for then we turn to the code editor and start coding the website. 
So what we're going to do is design the mock ups first. 
So the tool we're going to use is called balsamiq.com. It's a mock up tool, and it lets us put together mock ups for websites for other different UIs very, very quickly and we'll see the cool part about it in a minute. 
So let's go ahead and switch to Balsamiq mock up, The link to them is in the resources. So here's our Balsamiq mock up, we finished the website layout already with the help of the graphic designer. And before we want to actually design let us just say a couple of words about this tool. 
This tool is not free but it's really not that expensive. However, what's really cool about this tool, besides for the fact that it has components for different platforms that we're able to neatly lay them out. 
We also have an integration of components from Bootstrap which is exactly what we're going to use, so it's really convenient. 
But one of the coolest features of this tool for us as coders, is that all these mock ups are based upon a file than is really nothing more than HTML looking like, text file. 
It means that we could check things in into a code repository. And when things get updated, it's just the text that gets updated. 
So unlike images and things that really are impossible to deal with inside repositories, and there's no way to tell what the difference is because it's not text, it's binary. 
This is all text-based, and therefore, we could take and create a difference between what was checked in at the repository yesterday versus today, versus is going to be tomorrow. 
And it's huge, huge advantage when you're working especially within a team, and in a professional environment. 
Okay, so let's take a look at our website here that we, the mock up of the website. So the mock up is, it's going to have a logo with some text underneath, and this is going to be basically our menu. And we're not sure 100% yet If that's what the menu items will be, definitely there will be a menu item. 
And there's the phone number with a little thing, we deliver. Now, this big area, what's planned for this is some kind of a picture of the inside of the restaurant. It's going to be what's called a jumbotron In Bootstrap. So when the user first gets in here, he sees a very nice picture of the restaurant and it's inviting and they want to kind of proceed. 
What's going to be underneath is three giant buttons, Menu, Specials, and a Map. And it's self-explanatory what it stands for and these are kind of the key things that we want the user of this website to see right away. 
Which is they want to see the menu, perhaps specials, and certainly where this is located. At the bottom we're going to have Hours, some budget quotes or a couple of quotes about the restaurant, and we're going to have the actual address of the restaurant as well. 
Now remember, this is going to be a responsive website. So we need to design what the site will look like when the browser page gets a little more narrow. So the first one is going to be a tablet. 
So what happens when we're in a tablet? Well not much happens when we're in a tablet in this particular design. Because we're just going to squeeze different items, as opposed to before that's going to kind of spread out. 
And then we're just going to kind of squeeze them a little bit more and still have the jumbotron and still have the specials. They might be a little bit squeezed in terms of size. And everything else basically stays the same. 
Now, however, when we jump to going to a mobile page, that becomes very different. Now we're not going to have these buttons anymore, we're going to have a kind of a menu that our user can click, and the menu can slide down, which is a very common feature. 
We also notice, that we moved the telephone number in the middle of the page now. Because supposedly on the mobile web page, we would want to, have the phone number just a click away, or a tap away. And we're going to have this phone number tappable, such that they can Make a phone call straight from the page or it will at least trigger their phone to try to call the restaurant. 
And we'll still have the jumbotron but it's going to be much smaller one because we don't want to overwhelm the phone and the cell network. We don't want it to be too slow. And we can see here that now this thing is a little bit rearranged. 
We have the menu and the specials but the map is now on the bottom of those two things. So we're going to have to figure out how to have the map automatically slide underneath of that. And we're still going to have some testimonials about the restaurant, the hours, and the address. 
Now, that's really not all we need to design. We also need to design another page and we know up front we're going to have this menu categories page. 
Well in the menu categories page and this is showing us the full one it is going to basically have a bunch of different things. 
And here it looks like we're going to have six menu categories across. And it's basically going to continue until we run out of these menu categories. 
So that's basically what we're not going to have a jumbotron here, because at this point they're all ready a little bit deeper into the website. 
And the other is a menu list, so we're going to have, supposedly they will click on one of the menu categories and they will see every item inside that menu category, and this is basically what we have. 
So we're going to have a couple of items across with their name, with their description, and we're also going to have a ID for every single item.

Okay, so that's our layout. Next, let's take a look at some design that has already some colors and some more concrete layout. 
So here's what our designer came up with.
We're going to get some kind of a color scheme. Some photography. And here's our menu. 
So this is what we're going for. Designer will typically provide for us the hexa values of colors for different components within our website, and it will also tell us which fonts that they used inside this design. 
Now depending on our budget and if we're trying to do things for free or certainly trying to find free resources, we'll recommend the prompt that you try to stick with Google fonts. 
There's a website Google.com/fonts. And which we'll be using for our website ourselves. So if we could ask our designer to stick to the fonts that are available on that website, it will make our job down the line a little bit easier. 
Now don't worry about making minor mistakes, at least with the color scheme and other things like that. 
For example, we messed up on this site by not providing the designer the photography up front because we just couldn't. 
We didn't really arrange it that way. We only did the photography after the design was produced. Which was not really under our control, simply because that's the way the schedules worked out. 
But when we started comparing the photos that we were able to get from the food photography realize that the color scheme especially for this color right here, the reddish color, is really the wrong one. 
So we have two choices, we could colorize every single picture that we took with this red, and were able to do something less in Photoshop, or just adjust our color, this particular color, slightly so that it will fit the color scheme that the restaurant actually presents in real life. 
And in this case our color scheme kind of went close together with the color of the napkins in the restaurant. 
Now what tool do we use to design this? Well professional designers usually use Photoshop, Adobe Photoshop to design this, but we don't really have to use something so fancy. 
We can use something as simple as PowerPoint or any drawing tool. Because the idea here isn't to come with a complete 100% design The idea here is really to come up with enough detail so when we code we will know what we are trying to achieve. 
And that is what basically this is about. So we have our mock ups, we have our design with the colors and the fonts. It's time to start programming the website.