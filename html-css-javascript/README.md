# Intro to HTML, CSS, and Javascript

## Introduction
This workshop is designed for people who have little or no experience in HTML, CSS and JavaScript. These languages and concepts will help you pickup ReactTS and web development 💻 which is required in every phase 

We will be going through the basics of HTML, CSS and JavaScript to develop a simple webpage.

As always, please do not hesitate to reach out if you are stuck or do not understand the content. :smile:

## Learning Outcomes
By the end, you will be comfortable with the following:

- What is HTML, CSS and JavaScript
- How to create a basic webpage using HTML
- How to style HTML elements using CSS
- How to use media queries in CSS
- How to use dev tools
- How to make HTML interactive using HTML


## Requirements / Prerequisites

- A Browser :globe_with_meridians:
  - Chrome, Firefox, or Microsoft Edge (IE doesn't count :upside_down_face:)

- Text Editor :memo:
  - Recommending [Visual Studio Code](https://code.visualstudio.com/)


## Contents

[Introduction to HTML](#html-intro)
1. [What is HTML](#html-what)
2. [Let's create a HTML file](#html-add)
3. [Basic Syntac for HTML](#html-syntax)
    - 3.1 [Tags](#html-tag)
    - 3.2 [Attributes](#html-attribute)
4. [Add comments](#html-comment)
5. [DevTools - Inspect](#html-inspect)

[Introduction to CSS](#css-intro)
1. [What is CSS](#css-what)
2. [Let's add some CSS](#css-add)
3. [Basic Syntac for CSS](#css-syntax)
    - 3.1 [Selectors](#css-selector)
    - 3.2 [Let's add some more styling](#css-style)
    - 3.3 [Let's add the styles to the actual html](#css-style-html)
4. [Priority and Overriding](#css-priority)
    - 4.1[Specificity](#css-specificity)
    - 4.2[Chaining Mutiple Classes](#css-chain)
5. [Properties](#css-props)
    - 5.1[Property Explaination](#css-explain)
6. [Media Queries](#css-media)

[Introduction to JavaScript](#js-intro)
1. [What is JavaScript](#js-what)
2. [Devtools - Console](#js-console)
3. [Using loading a .JS file](#js-loading)
4. [Retrieving Elements from HTML](#js-element)
    - 4.1 [Interacting with Elements](js-handler)
    - 4.2 [Adding Listeners](js-handler)
    - 4.3 [Changing CSS Classname](js-classname)

## __Introduction to HTML <a name="html-intro"></a>__
----
HTML is a very evolving markup language and has evolved with various versions updating. The version we are using now is HTML 5 which was published in the year 2012 :black_nib:.

### __1. What is HTML <a name="html-what"></a>__
HTML is the standard markup language for creating Web pages. A HTML file describes the structure of a Web page and consists of a series of elements.

HTML elements tell the browser how to display the content.
An HTML element is defined by a start tag, some content, and an end tag:
```html
<tagname>This is content</tagname>
```
There are also empty elements, e.g. `<br>`, `<img>`, `<meta>`, `<hr>`, etc. 

### __2. Let's create a HTML file <a name="html-add"></a>__

First lets create our HTML file. 

1. File -> New File -> Name As index.html
2. Copy the following template code and paste it into the file.
```html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

</body>
</html>
```
3. Save the file.

### __3. Basic Syntac for HTML <a name="html-syntax"></a>__
Before we have a dive into the tags section, here is something you should know about:
>HTML elements can be nested (elements can contain elements). A nested element, also called a child element, can be a parent element too if other elements are nested within it. HTML tags should be nested in correct order. They must be closed in the inverse order of how they are defined, that means the last tag opened must be closed first. This promotes inheritence where the parent element can give its properties (some) to its children so they don't have to be assigned those properties directly.

#### __3.1 Tags <a name="html-tag"></a>__
In the template code, `<!DOCTYPE html>` is for declaring the doc type. The HTML document itself begins with `<html>` and ends with `</html>`.

##### `<head>` and `<meta>` tag

The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag. HTML metadata is data about the HTML document which will not be displayed.

The meta tag indicates metadata information that won't typically be visible to the viewer unless they view source code in their browser. Meta elements or tags provide descriptive information about the webpage. It is to be noted that the HTML `<meta>` tag comes within the `<head>` tag. Moreover, meta tags get passed in the form of a name-value pair.
Example:
```html
<meta name = "description" content = "HTML Meta Tag - Meta can be called as data about data." >
```
This is used to describe the web page.

##### `<body>` tag

The content between `<body>` and `</body>` tags is the visible part of the html document.

Besides, here are some other tags we have to know about: 
`<h1>` to `<h6>` defines the titles or subtitles of the webpage content.
`<p>` defines a paragraph.
`<a>` defines a hyperlink
`<strong>` defines text with strong importance. The content inside is typically displayed in bold.
`<div>` is used as a container for other HTML elements. The `<div>` element is a block-level element.
`<table>`, `<tr>`, `<td>`, `<th>`
The `<table>` tag defines an HTML table. Each table row is defined with a `<tr>` tag. Each table header is defined with a `<th>` tag. Each table data/cell is defined with a `<td>` tag.
`<br>` defines a line break, and is an empty element without a closing tag.
`<title>` defines the title of the document.

>Practice: write your HTML document with the mentioned tags. Open the file using any browser. (Google chrome is recommanded)

#### __3.2 Attributes <a name="html-attribute"></a>__

- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

Example:
```html
<a href="https://nzmsa.netlify.app/">MSA Website</a>
```
`href` is an attribute of the element.

More attributes will be introduced in the following workshop.

### __4. Add comments<a name="html-comment"></a>__

HTML comments are not displayed in the browser, but they can help document your HTML source code.

You can add comments to your HTML source by using the following syntax:
```html
<!-- This is how you add comments -->
```

### __5. DevTools - Inspect<a name="html-inspect"></a>__

1. **press F12** or **CTRL + SHIFT + I** or **Right-Click Inspect** in the broswer.
2. You can see the source code on inspect mode, if not, click **Elements** tab to see the code.
![alt text](./images/html-inspect.png)

Now you can manipulate the source code. For example, add an extra `<p>` element with some content. Then check out the changes of the webpage. Remenber this change on the source code will not change the original file, once you refresh the page, it will be gone.

## __Introduction to CSS <a name="css-intro"></a>__
----
> We'll be introducing some basic CSS to get you up to spend with how we change our website's look.

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

## __Introduction to JavaScript <a name="js-intro"></a>__
----
> Lets introduce some interactivity to our webpage using JavaScript!

### __1. What is JavaScript <a name="js-what"></a>__

JavaScript is a high level programming and scripting language that allows you to implement complex features on web pages and make web pages interactive :smile:.

### __2. Devtools - Console <a name="js-console"></a>__

We are going to add our first line of JavaScript to our code by adding to the header section of the HTML.

```js
<script>
  console.log("Hello World");
</script>
```

We can also display output to the console
After typing this, click on the "console" button on the buttom-left part of the screen to see the output.

![console](./images/console.png)

You can also **press F12** or **CTRL + SHIFT + I** or **Right-Click Inspect**,  and then click on the "Console" tab to open the console.

### __3. Using loading a .JS file <a name="js-loading"></a>__

We are going to create a `index.js` file within our root directory. This is where we are going to store all our JS code. Just like CSS seperating it from the html file improves readability.

To load this file we are going to change our ```<script>...</script>``` into 
```js
<script src="index.js"></script>
```

Notice that when we move `console.log("Hello World");` into `index.js` the same response is shown in the console.

### __4. Learn JavaScript <a name="js-loading"></a>__

Lets learn some basic JavaScript and its properties

#### __4.1 Variables <a name="js-variable"></a>__

A variable in JavaScript can be anything.

```js
// Lets define a variable
let myVariable = "anything"; // a string
console.log(myVariable);

myVariable = 12;             // a number
console.log(myVariable);

myVariable = true;           // a boolean
console.log(myVariable);

let empty;                   // undefined
console.log(empty);
```

If you haven't noticed, I am placing semicolons after each line. But they are optional and are more to do with styling.

#### __4.1 Functions <a name="js-function"></a>__

Lets define a function
```js
function myFunction() {
  console.log("myFunction");
}

myFunction();   // Call my function multiple times
myFunction();
```

A function is actually a variable
```js
console.log(myFunction);
```

We can also define functions using arrow functions
```js
const myArrowFunction = () => {
  console.log("myArrowFunction");
}
```

### __5. Retrieving Elements from HTML <a name="js-element"></a>__

To create interactivity in JS, we must first get the correct elements we want the user to be able to interact with. e.g. a button.

Add this to your `index.js` file
```js
const btn = document.getElementById("btn");
console.log(btn);
```

These two lines gets the Element with the id of `btn` which is defined on the button by the attribute `id="btn"`
```html
<button id="btn">Click me</button>
```

However, when we check console we will find `null`. So what does this mean? This means the element we retrieved is `null` aka empty. This is not what we want as we wanted to log out the button.

So HTML and JS is an interpreted language which means that the browser interprets the your code line by line from the top to the bottom. In this case we are loading the element with `id="btn"` before the button is defined which results to `null`.

To fix this we can move our `<script src="index.js"></script>` after the definition of the button. It should print out the element for the button:
```html
<button id="btn" style="color: red;">Red</button>
```

This fix is hacky, we can do better by keeping the script in the html header and just wrap our JS code using:
```js
window.onload = () => {
  const btn = document.getElementById("btn");
  console.log(btn)
}
```

#### __5.1 Interacting with Elements <a name="js-handler"></a>__

We can change the innerHTML of the button. We can change the button to red by applying changes using JS.

```js
const btn = document.getElementById("btn");
btn.innerHTML = "Red";
btn.style = "color: red";
```

#### __5.2 Adding Listeners <a name="js-listen"></a>__

To create interactivity in JS, we must first get the correct elements we want the user to be able to interact with. e.g. a button.

```js
const handleClick = () => {
  console.log("I clicked my btn");
}

btn.onclick = handleClick;
```

This is practically the same as
```html
<button id="btn" onclick="handleClick">Red</button>
```
However, just like how we separated HTML and CSS, we want to separate HTML and JS. It is bad practice to have HTML and JS in the same file.

#### __5.3 Adding State <a name="js-listen"></a>__

We change create a true or false state for the button using a bool and changing the button based on the state.

Here we are defining a boolean variable called `blue` and using a `if` statement to check the condition

```js
let blue = false;

const handleClick = () => {
  console.log("I clicked my btn");
  if (blue) {
    // If currently blue change to red
    btn.innerHTML = "Red";
    btn.style = "color: red";
  } else {
    // If currently not blue change to blue
    btn.innerHTML = "Blue";
    btn.style = "color: blue";
  }
  console.log("my current colour is blue:", blue);
  blue = !blue;
  console.log("my new colour is blue:", blue);
};
```

#### __5.4 Changing CSS Classname <a name="js-classname"></a>__

Lets try integrate HTML, CSS and JavaScript together.

To do this we want to change a HTML element's list of classnames. To do this we are going to get some help from the [documentations here](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

```js
const example = document.getElementById("id-example-1");

// We can remove classnames using
example.classList.remove("class-example-1");

// We can also add classnames using
example.classList.add("new-background");
```

As a developer we want to make use of classList as we can see that styling using `example.style` increases the logic required in our JavaScript code. We can simpify our code using predefined classnames.