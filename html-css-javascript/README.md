# [Topic heading] i.e. Intro to HTML, CSS, and Javascript

## Introduction
Some intro text on what the session is about

## Learning Outcomes
- Some learning outcomes of the session

## Requirements / Prerequisites
- Required software, prelearnings, or prerequisites needed to do this session

## Contents
1. [Subtopics...](#exampleLink)

[Introduction to CSS](#css-intro)
1. [What is CSS](#css-what)
2. [Let's add some CSS](#css-add)
3. [Basic Syntac for CSS](#css-syntax)
    - 3.1 [Selectors](#css-selector)
    - 3.2 [Let's add some more styling](#css-style)
    - 3.3 [Let's add the styles to the actual html](#css-style-html)
4. [Priority and Overriding](#css-priority)
    - 4.1[Specificity](#css-specificity)
    - 4.1[Chaining Mutiple Classes](#css-chain)
5. [Properties](#css-props)
    - 5.1[Property Explaination](#css-explain)
6. [Media Queries](#css-media)
### 1. Subtopics... <a name="exampleLink"></a>
This will either contain info on the specific subtopic, or if its going through a demo/example, then it will contain code snipets/images etc for students to follow.

## __Introduction to CSS <a name="css-intro"></a>__
----
> We'll be intoducing some basic CSS to get you up to spend with how we change our website's look.

### __1. What is CSS <a name="css-what"></a>__
CSS stands for __Cascading Style Sheet__ and its is used for styling our HTML. Without it our site is pretty much as basic as it can get.

Think of it link when you style you Word doucments with different Fonts, Font Sizes, Colors, Image, etc.
In fact a bunch of things I'll be going through are similiar to what we would do in word.

### __2. Let's add some CSS <a name="css-add"></a>__

First lets add our CSS file. 

1. File -> New File -> Save As styles.css
2. We need to link our CSS file with our html or else the html won't know where it's sytling is.
3. In our index.html lets add the following line inside our ```<head></head>```
```html
<link rel="stylesheet" href="style.css">
```
The link element has `rel` (relationship) property which allow is to link our CSS as a stylesheet. There are a bunch of other values for `rel` for different applications but we'll stick with "Stylesheet" for now.

`href` is the location of our file, in our case it's in the same folder so we only need to specify the filename. If you had it in another folder you might need to give the full path. The path could also be a URL to a website where the CSS is hosted. 

### __3. Basic Syntac for CSS <a name="css-syntax"></a>__
We've linked our CSS together with our html but we don't have anything in it currently. Before we add anything CSS has to formatted/writen in the format below.

![alt text](./images/css-declaration-small.png)

> __Selector__ - Allows us to select a particular element to style

>__Property__ - The particular sytling we want to apply

>__Property Value__ - The value of the style.

Example in the image is we want __all__ `<p></p>` to be the color red.

So lets add that CSS to our file.
```css 
p {
  color: red;
} 
```

#### __3.1 Selectors <a name="css-selector"></a>__

We have just used one type of  __Selector__ but the ones I'll be going through in this section are
- `*` Global selector
    - Applies styling to all elements in our html
- `.class` Class selector
    - Applies to any element who's class is equal to it.
    - Syntax starts with a `.` to distiquish it as a class
- `#id` Id selector
    - Applies to any element who's Id is equal to it.
    - Syntax starts with a `#` to distiquish it as an Id
- HTML Element selector
     - Applies to any html elements i.e. `<h1>,<p>,<div>,<table>, etc.`

#### __3.2 Let's add some more styling <a name="css-style"></a>__

1. Lets add some styling through our `global selector`
```css 
* {
  font-family: 'Times New Roman', Times, serif;
  font-size:  24px;
}
```
2. Lets add some styling using the `element selector` to our `<h1></h1>` and body `<body></body>` 
```css 
h1 {
  font-size: 32px;
  color: white;
  text-align: center;
}
body {
  background-color: lightblue;
}
```
3. Lets add some styling using the `class selector`
```css 
.class-example-1 {
  color: blue;
}
```
4. Lets add some styling using the `id selector`
```css 
#id-example-1 {
  color: green;
}
```

Now that we've added some CSS we need to select what we want to style in our html, this applies to the `id selector` and `class selector` as the `element selector` already specificies what it wants to style.

#### __3.3 Let's add the styles to the actual html <a name="css-style-html"></a>__
1. Lets add the class `class-example-1` to our first paragraph
```html
    <p class="class-example-1">My <strong>first</strong> paragraph.</p>
```
2. Lets add the id `id-example-1` to our second paragraph
```html
    <p id="id-example-1">My <strong>second</strong> paragraph.</p>
```
3. Lets refresh our site.
![alt text](./images/style-html.png)

You will see that the 2 paragraphs have be styled with the color we specified in our css, but you will also notice that our header `<h1>` did not change color.

### __4. Priority and Overriding <a name="css-priority"></a>__
In CSS there a hierarchical order to which styling get priority over each other.

`Inline > Id > Class > Element > Global`

This is why our `<h1>` did not change color because our inline styling is taking priority and overiding the color property

```html
    <h1 style="color: red">Hello World</h1>
```

Our `font-size` and `text-align` properties will still get applied because there is no overriding of those properties in the inline css.

We can also see priority if we add the id `id-example-1` to our first paragraph together with class

```html
<p id="id-example-1" class="class-example-1">My <strong>first</strong> paragraph.</p>
```

Again if any properties overlap then the styling from the highest priority selector gets applied. Styling from the lower will still get applied if there is none in the higher priorty selector

#### __4.1 Specificity <a name="css-specificity"></a>__
You can actually combine the selector together if you want to have a very specific element styling
```css 
p#id-example-1.class-example-1  {
  color: yellow;
}
```
The example above if we add it to our CSS and refresh our page we can see the text turns yellow. This is because there is CSS has a rule where the more specific you select a element the higher the priority it is.

#### __4.2 Chaining Mutiple Classes <a name="css-chain"></a>__
You can actually use more than one class in an element. Useful for if you have some alternative styling to the regular styling i.e. dark mode button colors or different color for cancel and ok buttons.
```css 
p#id-example-1.class-example-1  {
  color: yellow;
}
```

```css 
.class-example-2 {
  text-align: center;
}
```

```html
<p id="id-example-1" class="class-example-1 class-example-2">My <strong>first</strong> paragraph.</p>
```

### __5. Properties <a name="css-props"></a>__
We're already halfway throught he CSS section and I'm only now going to explain properties and property values. Unfortunately there are way too many properties for my brain to know and understand but I'll go through some of the core properties you'll probably encounter.
- Font-Family
- Font-size
- color
- background-color
- text-align
- border
- width
- height
- padding
- margin
- Float

More can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Lets add some table styling

```css 
table, td {
  border:solid 1px black ;
  text-align: center;
}
```
> you can use the comma as a seperator if you have the same styling on the same selectors

Lets add some properties to our last div
```css 
.div-class {
  background-color: white;
  height: 400px;
  width: 400px;
  padding:15px;
  border: dashed 10px black;
  margin: 20px;
}
```
#### __5.1 Property Explaination <a name="css-explain"></a>__

If you go into your browser and go into the dev console we can see the element styling. Google Chrome will helpfully show you have the content is spaced if you inspect the element. You even change things on the fly.
> You could also do this to all website and check out what color they have used or how they did their styling.

![alt text](./images/margin-padding.png)

- Height: Total height of your content
- Width: Total width of your content
- Padding: Adds space between your border and your content i.e. the start of the text.
- Border: Adds on top of that padding.
- Margin: Adds space between the your element and the next element.

Lets copy and paste our div again.

```html
    <div class="div-class">
        hello world 1
    </div>
    <div class="div-class">
        hello world 2
    </div>
```
As your can see the 2 divs are seperateted by a margin between them.

Lets say we want our divs to be side by side. we can add the property: `float: left;` to our `div-class;`

This is useful if you wanted an image and text to be side by side.

### __6. Media Queries <a name="css-media"></a>__
Media Queries allows us to change the look of our site depending on the screen size. Wether that be support for lower resolution desktop or for mobile devices.

```css 
@media only screen and (max-width: 800PX) {
  body {
      background-color: forestgreen ;
  }
}
```