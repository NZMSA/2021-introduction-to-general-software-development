# TypeScript

## Introduction
TypeScript is an open-source language by Microsoft which builds upon the original syntax of JavaScript, often referred to as its subset. It provides unique features such as static type definitions, classes and interfaces which makes it easier for developers to resolve issues, as your application becomes larger.

## Learning Outcomes
- What is TypeScript?
- Benefits during development
    - Advantages over vanilla JavaScript
- Installing TypeScript through NodeJS
- Features provided by TypeScript
    - Datatypes
    - Classes
    - Interfaces
- Case Studies
- Migration Strategies

## Requirements / Prerequisites
- [NodeJS (for npm)](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Contents
1. [What is TypeScript?](#what-is-typescript)
2. [JavaScript (and it's problems)](#javascript-(and-its-problems))
3. [Setting Up TypeScript Environment](#setting-up-typescript-environment)

## What is TypeScript?
TypeScript is an open-source language which builds on JavaScript, developed by Microsoft. It provides many features commonly seen in Object-Oriented languages such as static type definitions, and compiler errors which makes it easier for the developer to resolve problems.

Since TypeScript is a super-set of JavaScript, it is valid for vanilla JavaScript code to be written inside a `.ts` file, but the same is not possible for vice-versa.


## JavaScript (and it's problems)
JavaScript powers most of the websites on the internet these days, providing exciting features like adding event listeners and dynamically manipulating the Document Object Model (DOM) elements through code. This increases the overall interactivity of the application.

However, as the language has evolved through the years, there have been some additions to the language which could lead to issues in larger codebases.

### Example One
In the example below, the `1 < myNumber` predicate inside the if-statement is executed first, which evalutes to `true`. 

Note that in JavaScript, `true` is also represented as `1`. Next up, the predicate `1 < 10` is executed and evaluted to `true`, which means the if-statement is `true` overall.

```javascript
let myNumber = 15;
if (1 < myNumber < 10) {

    // This block is executed.
    console.log("Boolean was true!");
}
```

### Example Two
When performing simple arithmetic between a string and a number, JavaScript behaves very differently. 

During addition, the integer `1` is converted to a string, and then concatenated to the end of `"3"`. While performing subtraction, the string `"3"` is converted to an integer, and then the calculation is performed normally. 

```javascript
console.log("3" - 1); // Evaluates to 2.
console.log("3" + 1); // Evaluates to '31'.
```

### Example Three
`NaN` in JavaScript represents an output which is "Not A Number". This makes sense for the first execution where we try to multiply an integer with a string.

However later, when we try to find the datatype of `NaN`, JavaScript tells us that it is an integer, but which is very confusing.

```javascript
console.log("Shrey" * 17); // Evaluates to NaN.
console.log(typeof NaN); // Evaluates to integer.
```

## Setting Up TypeScript Environment
1. **Install the TypeScript package globally**
    - The –g flag is indicating that you are installing the Node package globally, and it’s not associated to any specific project.
    - This package will help compile your TypeScript code into JavaScript.
    - Note that you can install TypeScript on a project-level, but here it’s done globally.

    ```javascript
    npm install -g typescript
    ```

2. **Initialize a Node project**
    - Create an empty folder and initialize it as an empty Node project.
    - Step through the creation wizard by entering the information required.

    ```javascript
    npm init
    ```

3. **Compiling Process**
    - To convert your TypeScript code into JavaScript, run the following command.

    ```javascript
    /* Compile all .ts files in the directory */
    tsc *.ts

    /* Compile particular .ts file */
    tsc myFile.ts

    /* Compile particular .ts files */
    tsc myFile.ts anotherFile.ts
    ```