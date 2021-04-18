# Introduction to Git

## Introduction

So, you've written some codes, make a few changes, perhaps you already thoughts of the next 100 features to add to your website. 

However, what if you make a grave mistake but you don't have a history of your changes? What if you need to work with other people? Do you rely on your memory to try and undo your changes? Do we just email our code to our friend so they can also work on it? We need a better solution... 🤨

**Git** is an open-source _"version control system"_. A powerful content-tracker that allows us to document code, track changes and easily collaborate with other developers. **Git** has enabled people across the world to work together and brought countless innovative project to life. Simply put, **git** is an abosolute essential skills for any developers.

In this hands-on tutorial, you'll be learning how to use **git** to track your code changes as you continue building out your web application. 

We'll also be using _GitHub_, Microsoft **git** repositories hosting service to store our projects and start building out your portfolio! 🔥

## Learning Outcomes
By the end, you will be comfortable with the following:
- Basic understanding of Git and GitHub.
- What git repository, commits, branches and pull request are.
- Managing code changes using basic git commands.

## Requirements / Prerequisites
Make sure you have the following tools installed.
- [ ] Install [Visual Studio Code](https://code.visualstudio.com/) - Code editor.
- [ ] Install [Git](https://git-scm.com/) - Version Control system software.
- [ ] Register for a [GitHub Account](https://github.com/) - For hosting & storing our project.

## Contents
1. [Subtopics...](#exampleLink)

# 1. Creating git repository

Now that you have git installed, you can try run `git help git` command in your command prompt or terminal to see what the official manual of git has to say about itself. 🙂

1.1 Head over to GitHub and create a new git repository.

![Create new repository](images/1.png)

1.2 Fill out the basic repository details for your project. You can select **Add a README file**, this will initialize your repository with a markdown file used to describe your project.

![Create new repository](images/2.png)

1.3 This is your git repository (think of it as your project folder and every changes in this folder will be tracked by git). 

Right now as you can see the only file in your repository is a README.md, which is displayed by default when you visit any repositories on GitHub.

# 2. Cloning our remote repository

It wouldn't be ideal to start coding on the browser so let's clone this remote git repository to our local disk first.


2.1 Copy the url of the repository.

![Create new repository](images/3.png)

2.2 Navigate to a folder on your computer where you'd like to store your project. `Shift` + `right click` and open a powershell or command prompt inside the folder. 

2.3 Run `git clone` followed by your copied repository url. e.g. git clone https://github.com/paulvtan/my-awesome-website.git 

```
git clone [repository-url] 
```

This will download our git repository into the current folder.

![Create new repository](images/4.png)

As you can see our 'local' git repository looks just like the remote git repository stored on GitHub. Any changes made to this local repository will be tracked as new changes!

![Create new repository](images/5.png)

*_the hidden .git folder is that specify this directory as a git repository._

# 3. Making our first commit

Making a commit is like taking a snapshot of our current repository, recording changes permanently to the repository history. This allows us to progressively track changes as we develop our website, making it easy to collaborate with others. 

Git preserves a history of all commits allowing us to track what was changed and who made the change. We can even revert back to any specific commit in the history! ⌛

Let's record our first commit to the history.

3.1 Always start with `git status` to understand the current state of your repository.

In your local repository run.

```
git status
```
Here you can see git informing us that our remote and local repository is up-to-date with each other as we haven't made any changes to the repo.

![Create new repository](images/6.png)

3.2 Let's move our project files from previous section into our local repository.    