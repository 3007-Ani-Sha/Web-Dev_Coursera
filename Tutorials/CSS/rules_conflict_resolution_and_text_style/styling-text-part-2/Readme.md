styling text:
We will focus here on font-sizing:
We will open the styling-text file in this folder. Now there are two units of measurements that are relative that we're going to talk about and that is percent and ems.
Say we style the body tag with font size 120% that means whatever the size of the text was to be in body it will be now 120% of it now.
So 120% of 16 would a little bit over 19 pixels(as 16px is the default size for most browsers).

Let's now target the very first text here that says 2em text. 
So lets go ahead and actually use an inline style since we're just testing and specify the font size to be 2em.
And is a unit of measurement that is equivalent to the width of the letter m in this particular font that we're using. 
It sounds a little bit confusing at first, but the bottom line is it's a relative size.

And for this div where it says 2em text, what this is saying is it's relative to whatever the font size is at the moment we're applying it. 
Since we set the font size to 120% in the entire body, this div also received at 120% and when you combine this font size with 2em, this basically says we want to increase the font two times of whatever a 120% was.
So if we take a look at this text this 2em should really increase twice as large as this word regular text.

Didn't we just override the font size and say it's 2em? Why is 120% playing together with 2em instead of having 2em override the 120%, and that's kind of where the game of the relative sizing. 
When you specify them on subsequent elements, they don't have an overriding effect, they have a cumulative effect instead. 
Because what we're saying here is whatever the size of this div is, we want you to increase it. 
Or we want you to make 2ems out of it, meaning, make it twice as large. So how do we make this 4em text actually 4em? If we specify style and say font-size, Should we put 4em? Well that would be a mistake. 
If we put 4em it will really be the 2em that it's already applying to this times 4em, which would make it 8em, right. 
But what we actually need to do is put 4em. In order to do that, we just specify 2em, again. So, it means that this 4em text will be twice as large as the 2em text right here.

so how we make it 2em again? Well, the answer is, we don't overwrite it, we just decrease it. 
So let's go ahead and say style=_"font-size: and in order to get back to 2em we need to half the size of our text. So in order to do that we'll just say .5em.

A couple of more quick points before we finish up : 
First it's a pretty common practice, that if you want to increase the font-size in the entire document, that you specify percentage and you apply it usually to the most parent tag, which is usually the body tag. 
And technically speaking, you could have continued to use percentages even inside the body like 2em really translates to 200% so if we put 200% in place of 2em nothing really changes. 
However it's more common to use ems when you're talking about relative sizes within the documents itself. 
But one thing you should know is that even though you could use percentages here it is highly recommend we don't mix and match the percentage, ems and certainly not the absolute value units all over the place. It could get very confusing and it'll become a mess. 
So it's better to keep things consistent. 

Point number two is, even though we increase the font size here to 120, using CSS rule, a user of your website can do the same thing just by increasing the zoom. Like, Say we zoom all the way to 200% zoom, and now we see the value of having relative units of measurement for font size. 
You could see that the visual size relationship between these different divs remains the same, even though they're all now very big.