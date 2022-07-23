There is one more issue that you should really be aware of when it comes to using a certain for loop with arrays. Let's go ahead and comment all this out, and I'll go ahead and copy my array one more time. And I'll just call it something else, I'll call it names2 maybe. Let's see, names2, so I have a name2 array, and again it says Yaakov, John, and Joe. Okay, so let's leave the site for now, and let's create an object literal. We'll create obj, let's say myObj and we'll create it as an object literal. We'll put the semicolon there. And we'll say name Yaakov. We'll say another property course: "HTML/CSS/JS" comma, and we'll say platform: "Coursera". Okay, so that's good enough. So now, there's something we actually haven't seen yet that I haven't shown you. And there's a special for loop that you could use to traverse the properties of an object. So this for loop looks like this. It's a for, and you declare it as a var Prop in myObj. So basically it will say, I want to grab every property in my object. This is what this prop is going to be. So it's very convenient for objects, because objects don't really have indices like an array does, it has properties. So let's go ahead and console that out. Console.log prop and we'll say semicolon here, add that in, and we'll add myObj, and we'll give it prop again. And since that notation and the brackets notation are equivalent, I'm allowed to do this, so this just lets us kind of a calculated, in the calculated property. Okay. So if I save that.
Play video starting at :1:57 and follow transcript1:57
And I'll see that it's printing out name, that's the name of the property, and the value, name of the property and the value, name property and the value. Okay that's all great. Now we know that in JavaScript arrays are just objects and the indices are just property names. So technically speaking I could use the same type of four loop on my names2 array as well. So let's go ahead and try that. Let's actually comment this out for a minute, so we don't have it crowd our console, make a little bit more room. Okay. So now let's say, for name in names. It sounds pretty good. So we'll say console.log, and we'll say hi, hello, and we'll say names, and we'll use a computed property notation name. So every time through the loop this name will be equal a different property of their rate. So the first time it will be equal zero, because that's a property name of the array. The second time it will equal one and the third time it will be equal two. So this should work. Let's go ahead and save that. And I messed up something here, names is not defined, of course not. Names2, let's go ahead and save names2 here. Let's save that again. Names2 is still not defined, and that's because I didn't put names2 right here. Okay. So now it will work. So now it says hello Yaakov, hello John, and hello Joe. But the problem with this for loop is that arrays are objects after all. So for example, there's nothing wrong with me saying names2.greeting = "hi". Let's say I want to save a specific greeting that I want to use. So now if I use the same array. We'll go ahead and copy that. And say, afterwards, hi. And now if I use the same array, and let's go ahead and comment that out for a minute and save it, what I'm going to get is hello Yaakov, hello John, hello Joe, hello hi. Now the reason that is, is because the greeting became a property of the array no different than a number zero, or number two, or number one, and so on. Greeting becomes a property of the array, and this for loop loops over the property names of the object. And since again, arrays are just objects in JavaScript, this for loop will loop over properties, even over properties that really have nothing to do with the core data that we want to loop over.