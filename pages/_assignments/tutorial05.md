---
layout: module
title: |
    JavaScript & the DOM: Part 2
type: tutorial
abbreviation: Tutorial 5
draft: 0
due_date: 2021-05-07
num: 5
points: 2
description:
    - Functions and Event Handlers
---

<img class="module-image" src="{{site.baseurl}}/assets/images/tutorials/tutorial05_dom.png" /> This week in tutorial, we will be doing a walkthrough of [homework 3](../assignments/hw3) in order to: (1) introduce and discuss some additional DOM properties (e.g. accessing sibling elements), and (2) introduce you to how you might want to use a variable to track the state of your program. Regarding item (2): in order for your browser to show you your next photo, you have to track what photo they're currently viewing, and this requires using a variable. 

Before you begin homework 3, please review the concepts below, and complete the exercises:

## Step 1: Review the DOM Rules

### What element do you want to target?
Use a `document.querySelector("your_selector")`, where the selector goes inside of the parenthesis. Recall: use a class selector, a tag selector, or an id selector

### Do you want to change its style?
Then use this pattern:
```js
document.querySelector("your_selector").style.some_property = some_value;
```

Note that you would replace `your_selector`, `some_property` and `some_value` with valid values. Refer to the cheatsheet from [Tutorial 4](10tutorial) to see a list of some of the style properties.

### Do you want to change its attribute?
Then use this pattern:
```js
document.querySelector("your_selector").some_attribute = some_value;
```

Note that you would replace `your_selector`, `some_attribute` and `some_value` with valid values. Refer to the cheatsheet from [Tutorial 4](10tutorial) to see a list of some common attributes.

### Get familiar with some new DOM-related vocabulary
* nextElementSibling (<a href="https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling" target="_blank">docs</a>)
* previousElementSibling (<a href="https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling" target="_blank">docs</a>)

## Step 2: Complete the DOM exercises
1. Open your JavaScript console
2. Select the first `h1` tag for this page. 
    * modify its innerHTML
    * modify its font color
3. Select the first img tag for this page.
    * modify its `src` attribute to point to another image (copy any image url that you find online).
    * update the `innerHTML` of the img element's `previousElementSibling`
    * update the `innerHTML` of the img element's `nextElementSibling`



## Step 2: Start Homework 3
WHen you're done from the above, please download and begin [homework 3](../assignments/hw3).


