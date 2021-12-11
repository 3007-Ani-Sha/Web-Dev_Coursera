CSS Rules:
CSS works by associating rules with HTML elements. These rules govern how the content of specified elements should be displayed.

like: p {
        color : blue;
    }

A CSS rule consists of selector, in this case it's a p, the paragraph tag, which is basically saying that whatever rules we are about to give should apply to the content of every single paragraph tag in the entire HTML page. The selector is followed by open and close curly braces. Inside of those braces, we have CSS declaration. And it consist of two parts, the property and the value. Property name is something that's predefined by CSS specification like color in above case, and for every property there is a set number of pre-defined values, like blue in our case. Or in the case of numerical values, set number of type of numerical values that is pre-defined. Now, every property and the value is separated by a colon, and is terminated by a semicolon. Now, technically speaking, a semicolon is not a requirement, but it's a best practice, and we should always use it.

A CSS rule can consist of several declarations. like
p{
    color : blue;
    font-size : 20px;
    width : 200px; 
}
Here declared color, font-size and width we can declare more, according to need.

Now when we do this rule for other elements also like heading h1, h1 etc.
The collection is called style sheet.
like:

p{
    color : blue;
    font-size : 30px
}

h1{
    color : green;
    text-align : center;
}

The style sheet is placed in the head section of the document. For Real-World Website the style sheet may be placed elsewhere but for now just simply put it in Head section.

Size 200px means it will covr an area of screen that is 200px wide.

We specified the paragraph tag once but all paragraph tags are styled.
Other properties and elements are default specified by the browser.