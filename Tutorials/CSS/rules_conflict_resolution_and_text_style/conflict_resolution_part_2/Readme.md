Conflict Resolution part-2:

Specificity:

Specificity also has a pretty simple rule, and that is most specific selector combination wins. While this is a pretty simple sounding rule, remember that forgetting about the concept of specificity and how its simple method in CSS, is what trips up developers most often.

There is a pretty straightforward technique that will let you figure out which selector combinations are most specific than others. You can think of specificity of your selectors as keeping a score. The selectors with the highest score win. 
In other words, the selectors with the higher score would be considered the most specific. 
It's easier to calculate the score if you arrange the types of things that affect the score from left to right, with the left being the highest value of specificity. 
Then simply take your CSS rule and fill in the number of times you see a particular type of selector being used in it's proper location. The number that's created is your final score.

The type arrangement(in order) are:
style-> id-> class, pseudo-class, attribute -> numbers of elements.
like:
<h2 style = "color : green;">
style = 1 rest all three zero
so number is 1000 as in selector we have only style nothing else as this selector has no other element as directly applied.

div p {
    color : green;
}
score : 0002
It's not defined inside of a style attribute so that gets a 0. There's no ID selector so that gets a 0. There's no class definition selector either so that gets a 0. But there's two elements, here we're using a descendant combination of selectors, div and p. So, therefore, the number of elements that we have is two. That's why the last box gets the number 2.

which will win:
div #myParag {
    color: blue;
}
score : 0101

div.big p{
    color: green;
}
score: 0012
so first win.

Now we go to specificity-before.html file and see that have two selectors with, 
upper selector score: 0012
lower selector score: 0011
so upper wins and color is blue.

but when we go to specificity-after we see that we have added another style with a !important keyword in the color property. 
This important means that whatever else there is present the html document will only apply this value to this property of the target i.e. we override all other same target and property selectors.

Be Cautious about using this !important. While very tempting to skip understanding all these cascading rules and specificity rules and just slap important everywhere whenever things don't work out, this will very quickly on a real world project become a maintenance nightmare where you'll be overriding one important declaration with another important declaration and you'll basically start working out your own system where gigantic mess will be your most important rule. 
So avoid using important unless you absolutely have to.