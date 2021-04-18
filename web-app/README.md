# Introduction to React with Typescript

## Introduction

React is a powerful library and when combined with Typescript provides developers
a safe haven to work on user interfaces. This section aims to introduce you to simple concepts in React, how to use them and the benefits of using them.

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

And if you have time, have a look at the [React documentation](#https://reactjs.org/)

## Contents

1. [Getting Started](#getting-started)
3. [Changing the Counter](#functions)
4. [Component State]()
5. [Component Lifecycle]()
6. [Functions]()
7. [Interfaces and Props]()
8. [Conditional Rendering]()

## Getting Started <a name="getting-started"></a>
To start the project, click terminal at the top of the VS Code window, and click new terminal. In the terminal, enter:
```
    npm install
```

This will install all the required bits of code that the project depends upon to run correctly. After this, enter:
```
    npm start
```

This will run the project, and display the output to a browser.

## Coding a Function <a name="functions"></a>
Let's start by programming a function for adding one to a value. In the react-example folder, under src/components, open up Counter.tsx. Inside the counter, add this snippet of code:
```
    let count = 5;
    const increment = () => {
        count += 1;
    }
```

The code above does two things. Firstly, it defines a variable called count that stores a number value. This is the `let count = 5;` part of the code. The next bit of code:
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
After hitting run again, you might notice that when you click the buttons, still, nothing is happening! Why is this the case? In the ` increment ` function body:
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

## Component Lifecycle & State
Components in React have what's known as a state. They will only re-render themselves if their state has been updated, and will otherwise be ignored when the rendering engine (AKA the React DOM) comes and redraws the component.

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
        
    }
```

# Useful links

## General

- [React](#https://reactjs.org/)
- [Create-react-app](#https://create-react-app.dev/)

## React UI frameworks

- [Material-UI](#https://material-ui.com/)
- [SASS](#https://sass-lang.com/)

## Extra for experts

- [Redux](#https://redux.js.org/)
- [GraphQL](#https://graphql.org/learn/)
