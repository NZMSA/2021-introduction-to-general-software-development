# React with Typescript

## Introduction

React is a powerful JavaScript library and when combined with Typescript provides developers
a safe haven to work on user interfaces.

React was developed by Facebook - with the aim of making complex UI's simplier by introducing reusable components, states and efficiently renders changes to the UI by only re-rendering the component thats changed.

It is one of the most popular UI libraries and there is a huge demand for React developers all over the world.

This section aims to introduce you to simple concepts in React, how to use and demonstrate the benefits of using React.

## Learning Outcomes

- What is React and its benefits
- Components and JSX
- States, Event handling and React Functions
- Interfaces and props
- Common Lifecycle methods (Functional Components)
- Logical operands and Conditional Rendering
- Extra for experts (profiler, redux, state management, DOM)

## Requirements / Prerequisites

- Chrome / Edge
- [NodeJS](#https://nodejs.org/en/) (for npm)
- Visual Studio Code

And if you have time, have a look at the [React documentation](https://reactjs.org/)

## Contents

1. [Getting Started](#getting-started)
2. [Changing the Counter](#functions)
3. [Component State](#states)
4. [Component Lifecycle](#lifecycles)
5. [Functions](#functions)
6. [Interfaces and Props](#props)
7. [Conditional Rendering](#conditionalrendering)

## Getting Started <a name="getting-started"></a>

To start the project, click terminal at the top of the VS Code window, and click new terminal.

Ensure that your terminal is inside the react-example folder by using the cd command. Your directory should look something like this: `C:\yourdirectories\2021-introduction-to-general-software-development\web-app\react-example`

In the terminal, run:

```
    npm install
```

This will install all the required bits of code that the project depends upon to run correctly.

After this, run:

```
    npm start
```

This will run the project, and display the output to a browser. Your browser should have opened in `http://local:3000`

## Coding a Function <a name="functions"></a>

Let's start by programming a function that adds one to a value.

In the react-example folder, under src/components, open up Counter.tsx. Inside the counter, add this snippet of code:

```
    let count = 5;
    const increment = () => {
        count += 1;
    }
```

The code above does two things.
Firstly, it defines a variable called count that stores a number value. This is the `let count = 5;` part of the code. The next bit of code:

```
    const increment = () => {
        count += 1;
    }
```

defines a function, which will do what's inside the squiggly brackets when run. In this case, it will increment the count value by 1.

Now try adding a function for decrementing the value by 1!

## Connecting Functions to Buttons

Now, if we run the project as is with our current changes, you'll notice that clicking the buttons still doesn't seem to do anything!

In the HTML/CSS/JS section, we went over adding an event listener to a button to have a function run when the button is pressed. In React, we will need to do the same thing. Replace

```
    <button className="counter-btn">
```

with:

```
    <button className="counter-btn" onClick={ increment }>
```

This change causes the button to trigger the function given to it, in this case `increment`, whenever the button is clicked.

Now try adding the decrement function to the other button in **Counter.tsx**

## Debugging Your Components

After hitting run again, you might notice that when you click the buttons, still, nothing is happening! Why is this the case? In the `increment` function body:

```
    const increment = () => {
        count += 1;
    }
```

try adding another line in, like so:

```
    const increment = () => {
        count += 1;
        alert(`The count value is now: ${count}`);
    }
```

After running the project up again, you'll notice that clicking the increment button now pops an alert up on the screen, showing you what the new count value is being set to. Surprisingly, the value here is set to 6. So why is the counter still displaying 5?

## Component Lifecycle & State <a name="states"></a>

Components in React have what's known as states. They will only re-render themselves if their state has been updated, and will otherwise be ignored when the rendering engine (AKA the React DOM) comes and redraws the component.

This means that to get our counter to diplay the proper number value when we update the count value, we need to tell the React DOM that the count value is a part of the component's state. We can do this by changing the counter variable declaration from:

```
    let count = 5;
```

to:

```
    const [count, setCount] = React.useState(5);
```

Breaking down the above code snippet, the declaration `[count, setCount]` is what is returned by the `useState` hook, which we are calling here. The first bit, `count`, is the same as our count from earlier. It's a variable tracking a number. The only difference being that this count is a constant value, which means that **it can't be changed directly**.

The second bit, the `setCount`, is now how we alter the count value now. by calling `setCount(x)` where x is any number, it set's the new value of the count. If this new value is different from the current value stored in the state, the component re-draws itself! Let's update the `increment` function again to use this new `setCount` function to change the state of `count`:

```
    const increment = () => {
        setCount(count + 1);
    }
```

Try altering the decrement function to also use this to update the count state.

Now, if we run the project, the increment and decrement buttons should now update the counter value correctly on the screen!

## Adding a Title

Now, let's try adding a title to the counter so that we can display what's being counted correctly! In the counter, let's change the following lines:

```
    <div className="counter-label">
        {`Counter Value:  ${count}`}
    </div>
```

to:

```
    <div className="counter-label">
        {`Number of MSA Students:  ${count}`}
    </div>
```

This changes the value of the display in the counter from "Counter Value" to "Number of MSA Students". Now let's add in some more of these counters, so we can start counting multiple things!
In **App.tsx**, replace the following lines:

```
    <div className="App">
        <Counter />
    </div>
```

with:

```
    <div className="App">
        <Counter />
        <Counter />
        <Counter />
    </div>
```

Now, if we run the project, we should see that there are 3 counters. Unforunately, all the counters are all counting the same thing, even though their counter values update independently! This is very misleading, but is something that we can fix.

## Taking in Props <a name="props"></a>

Components can be passed in values, which they can then use to determine what they should be displaying. We call these values "props". Let's add in a new file into components by right clicking the components folder and selecting "New File". Name this new file **CounterProps.ts**. In this folder, let's start by importing the React library using the following line of code:

```
    import React from 'react';
```

This gives us the React library to work with. Following this, let's also add in an interface to define what values our component can actually accept.

Currently, we only want to give it a title string to display what it's counting. This definition should look something like this:

```
interface CounterProps {
    counterTitle: string
}
```

This is a definition for what the "props" values of the counter can be. To make this definition available to the **Counter.tsx** file, let's export it. At the bottom of the file, add the follow line:

```
export default CounterProps;
```

Now that we have some props defined, let's get the Counter component to start accepting them. In **Counter.tsx**, let's change the component definition from:

```
const Counter : React.FC = () => {
    ...
}
```

to:

```
const Counter : React.FC<CounterProps> = ({counterTitle}) => {
    ...
}
```

You'll notice that this get's highlighted red, with the error that CounterProps could not be found. To make the CounterProps available, although we've already exported it from the file that it's in, we'll need to also import it here. At the top of the file, add the following line:

```
import CounterProps from './CounterProps';
```

This will give you access to the CounterProps inside the Counter file.

Now, let's start using the counterTitle that we're accepting to display whatever we get passed in. Replace the following lines:

```
    <div className="counter-label">
        {`Number of MSA Students:  ${count}`}
    </div>
```

with:

```
    <div className="counter-label">
        {`${counterTitle}:  ${count}`}
    </div>
```

This lets the component display the value it gets given in the output display. Let's fix the last errors that prevent the project from building, and then run it. To do so, go to **App.tsx** and replace the following:

```
    <div className="App">
        <Counter />
        <Counter />
        <Counter />
    </div>
```

with:

```
    <div className="App">
        <Counter counterTitle={"Number of MSA Students"}/>
        <Counter counterTitle={"Number of MSPs"}/>
        <Counter counterTitle={"Number of Sheep"}/>
    </div>
```

## Loading images and Conditional Rendering <a name="conditionalrendering"></a>

These counters are kind of boring, only displaying strings and letting you count up or down as far as you would like to go. Let's make them more interesting, and have them display an image instead! Let's start by getting an image displayed with the counter. Add the following lines of code to **Counter.tsx**:

```
    <div className="counter-wrapper">
        ...
        <div className="counter-image">
            <img alt="some string" src={'/super-secret-image.jpg'}/>
        </div>
    </div>
```

After running the project up, you should now see an image being rendered on the screen alongside the counter. Let's make this a bit more interesting, and render the image only if the counter value is over 10. To do this, let's change those lines we just added to this instead:

```
    <div className="counter-wrapper">
        ...
        <div className="counter-image">
            {count > 10 ?? <img alt="some string" src={'/super-secret-image.jpg'}/> : null}
        </div>
    </div>
```

Now if you start this up, you should notice that this time around the image will only display after we increment the counter past 10! Now try adding in an image with a source of `'/DO-NOT-OPEN.png'` to the project that will only draw when the counter value is below 0.

## Lifecycle Components <a name="lifecycles"></a>

If you take a look at the changes made to display a value if the counter value is above 10, and a different image if the value is below 0, you might notice that the return value, or the JSX, is starting to look a little messy. We can tidy this up a little bit by hiding some of our rendering logic inside of a variable. But how do we set the variable value based on the counter value?

Let's take advantage of the following code snippet, and add it into **Counter.tsx**:

```
        React.useEffect(() => {
        if (count >= 10) {
            setImageUrl("/super-secret-image.jpg")
        } else if (count <= 0) {
            setImageUrl("/DO-NOT-OPEN.png")
        } else {
            setImageUrl(null)
        }
    }, [count]);
```

Doesn't that `setImageUrl` function look familiar? It's almost like it's been created via `useState`, and that's because it has. Also add in the following line near the other `useState` function:

```
    const [imageUrl, setImageUrl] = React.useState<string | null>(null);
```

Now that we have the imageUrl, which is either a string or null, try find a way to render the image with a single line!

# Useful links

## General

- [React](https://reactjs.org/)
- [Create-react-app](https://create-react-app.dev/)

## React UI frameworks

- [Material-UI](https://material-ui.com/)
- [SASS](https://sass-lang.com/)

## Extra for experts

- [Redux](https://redux.js.org/)
- [GraphQL](https://graphql.org/learn/)
