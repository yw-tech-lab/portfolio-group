---
layout: assignment-two-column
title: |
   CSS & Visual Design
abbreviation: HW1
type: homework
due_date: 2021-04-24
ordering: 1
draft: 0
points: 10
---
<style>
    .preview-image {
        width: 500px;
        border-radius: 4px;
        border: solid 1px #CCC;
        padding: 5px 10px;
    }
</style>

<a href="/spring2021/course-files/homework/hw01.zip" class="nu-button">Download Homework Files <i class="fas fa-download"></i></a>

In this exercise, you will be using CSS to instantiate some important visual design principles. Please complete the following activities:

## Step 1: Get oriented with the files

{:.spaced}
1. Open the the hw01 folder and take a look at the `christina.html` file in your web browser. This example is taken from Christina Truong's CSS Course (from LinkedIn learning), and reflects her own style choices. Note that the `css/christina.css` file controls the styling for this page.
1.  Next, open `index.html` in your web browser. This is the file that *you* will be editing. It's a basic portfolio site. Feel free to edit the content to reflect your own story...or not. Up to you. The more you customize, the more you learn, so feel free to play around with it. Note that the `css/style.css` file controls the styling for this page.

## Step 2: Complete the following tasks

{:.spaced}
1. Select 3 values from the <a href="https://docs.google.com/document/d/1Vv5tPZ8UjqJNYO9pCp_PQhxHT8qoGY09deKX6uygUFA/edit" target="_blank">values list</a> to guide your visual design choices.
1. Update the fonts: select (and apply) a header and a body copy font from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>. Here is some <a href="https://codepen.io/vanwars/pen/gOpryzO?editors=0100" target="_blank">sample code</a> of how to use Google Fonts. Ensure that your fonts are complementary and that they match the values / theme of the website.
1. Instantiate the principles of **proximity** and **alignment** to visually group the different sections of the portfolio. Cluster similar things, apply spacing to things that are different. Be very intentional about aligning and organizing your content.
1. Use the principle of **contrast** to (a) make some of the most important content stand out, and (b) de-emphasize some of the finer-grained details (so that the content is easier to skim and discern key takeaways). Recall that there are many ways to produce contrast (color, size, asymmetry, and so forth).
1. When you're done, commit your files to GitHub.

## Tips & Notes
* Feel free to play around with this <a href="https://codepen.io/vanwars/pen/rNVjYBd?editors=1000" target="_blank">"style tile" template</a> to try out ideas.
* Feel free to edit any of the HTML or CSS to achieve the goals of the assignment.
* Feel free to refer to christina.html / christina.css to get implementation ideas, but you need to write your own code for the `styles.css` stylesheet. In other words, copying `christina.css` and changing some of the fonts and colors is not sufficient. But, borrowing a few lines of code to replicate a particular spacing / margin technique is totally fine.
* Use a grid. Note: this doesn't mean that you have to use "CSS Grid." It just means that there should be implicit vertical and horizontal lines that guide your layout.
* Use whitespace liberally.
* Play around with different font weights (and choose a font that supports many weights).
* Try not to use any borders (or only a few). Let the whitespace shape the sections.
* Decide what is foreground and what is background and design accordingly.
* See lessons 5 & 6 for more details.

## Suggested resources
* [color]({{ site.baseurl }}/css-reference/color/)
* [box model]({{ site.baseurl }}/css-reference/box-model/)
* [fonts]({{ site.baseurl }}/css-reference/fonts/)

## What to turn in
To submit this week's homework assignment: 

1. Save all of your files in a folder called `hw01`
2. Add your `hw01` folder to your git repository, commit them, and push them to github. Your commands should look something like this:

```shell
$ git add hw01
$ git commit -am "Checking in my hw01 folder"
$ git push
```

When you're done, paste a link to your hw01 GitHub pages on Canvas under the Homework 1 assignment.