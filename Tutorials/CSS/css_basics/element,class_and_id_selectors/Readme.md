Elements, Class and ID selectors:

CSS selectors are used to determine which HTML element, or set of elements, to apply the CSS declarations to.
The browser uses its selector API to traverse the DOM or Document Object Model, and pick out the elements matching the selector. 
Also, a lot of Javascript libraries use browser selector API to attach behavior to Elements.
We will discuss 3 different types of selectors:
Elements, Class and id selectors.

First selector is Element selector it is as shown below:
p{
    color : blue;
}
where p is the element name all p tag's content is blue as we have used color blue above.

Next is the class selector it is as shown below:
.blue{
    color : blue;
}
where blue is the class name and no gap is present between '.' and the class name. whatever it targets makes it's color blue.
So the way we apply the selector is different, we have to a new attribute class in elements of body in which we want these properties to be present like:
...
<p class = "blue">...</p>
<p>...<p>
<div class = "blue">...<div>
...
Any other tag even the other p or div tags will remain as it is just the ones with this class attribute will have it's content blue.

Also We do not use '.' in the class name.

Now we will proceed to the id Selector,
it is used as:
#name{
    color : blue;
}
we use the value of an id of an element to use as an selector, like here name is value of an id of an element in the body.
Note : No space should be given between the '#' and the id value, like in above case 'name'.
like in body we have :
...
<p>...</p>
<div id = "name">...</div>
...
So only the element with id value = name get's coloured blue, which is a unique element, rest are default.

Grouping Selectors:

To write efficient Rules CSS allows us to group several selectors into one.
like:
div, .blue{
    color : blue;
}
here we grouped the element and the class selector so they have same properties and their values.
it will be applied as below:
...
<p class = "blue">...</p>
<p>...</p>
<div>...</div>
...
Here the paragraph tag at top is blue as well as the div tag rest all tags are default.

As in the file we have made ALL h2 elements coloured Red and alogned in center. Elements with class highlight propeties mentioned in style.
Elements with id mainpoint font-size 24px, bold, background-color red and opacity 0.7. ALso all p and h1 elements to be blue and centered.
Also in the last div tag only id = "mainpoint" is red as the tag span has id mainpoint.

Of all id selector is the least reusable as can be used an a single element.