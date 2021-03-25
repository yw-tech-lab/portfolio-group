---
layout: assignment-two-column
title: Photo Carousel
abbreviation: HW3
type: homework
due_date: 2021-05-12
ordering: 3
points: 10
draft: 0
---

<a class="nu-button" href="/spring2021/course-files/homework/hw03.zip">
    download starter files 
    <i class="fas fa-download"></i>
</a>

> ## Guidelines:
> 1. No third-party stylesheets
> 2. No jQuery or third-party JavaScript libraries — we’re still working with vanilla JavaScript
> 3. If you are new to programming, make an effort this week to come to office hours, which are posted [here](/spring2021/times-locations/).


In this assignment, we will be building a photo carousel from scratch. While there are a million carousel widgets out there, the goal of this assignment is not to simply ‘build a carousel’ but understanding how to marshal CSS and JavaScript to build any interactive interface that you can imagine. I have provided you with starter code and some starter images. You are welcome to use any image that you want, and to make this exercise your own — the more you customize and explore, the more you will learn!
Please download the hw03 (starter) files and save them to your repo folder. Then, open the entire hw03 folder in Atom. 

## Background & Overview
Before you dive into working with JavaScript, it’s important to first take stock of your HTML and CSS files. 

### A. HTML
Note that the HTML file is pretty simple: it’s section where each child div has a “background-image” style property assigned to it.

```html
<section class="cards">
    <div class="card" style="background-image:url('images/field1.jpg')"></div>
    <div class="card" style="background-image:url('images/purple.jpg')"></div>
    <div class="card" style="background-image:url('images/jar.jpg')"></div>
    ...
</section>
```

As we saw in HW2 (part 2), the advantage of using this image-as-a-background technique (over an image tag) is that you have more control over the size and dimensions of the image. 

There is also a “preview” section, which is currently hidden via the CSS (take a look at the carousel.css file), but will eventually be used to preview any of your images in full-screen mode (as a carousel): you’ll click on an individual image, and the “.preview_box” panel will open on top of your gallery with your  image loaded inside the “.featured_image” div.

```html
<!-- preview panel -->
<section class="preview_box">
    <div class="featured_image" style="background-image:url('images/placeholder.jpg')"></div>
    <button class="close" id="close">&times;</button>
    <button class="prev" id="prev">&lsaquo;</button>
    <button class="next" id="next">&rsaquo;</button>
</section>
<!-- end preview panel -->
```

The HTML file also links to two different CSS stylesheets: carousel.css and gallery.css. Splitting up your CSS can help you stay organized. In addition, at the very bottom of the page — right before the closing body tag — is a link to your JavaScript, which you will be editing.

One last thing to call out (review):

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

This particular “viewport” meta tag (and the attributes therein) is needed to tell your browser to honor your actual device’s dimensions (i.e. that your web page has been optimized for mobile). Otherwise, your browser will try to scale the website to a “virtual window” or “viewport,” which is usually wider than the screen. More on that <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag" target="_blank">here</a> (optional reading). 

### B. CSS
#### gallery.css 
This one’s pretty simple: uses flexbox layout, and each div w/the “card” class is allocated ~25% of the screen. There’s a margin of 20px separating each card  (feel free to modify it as you like). There are also two media queries that resize the “.card” elements as the screen shrinks (test it out). There’s also a :hover pseudoclass that gives the image hover a little pizzazz.
Also note that because each .card element is an empty div, you have to give it a width and a height, or it will be squashed (remove the width and height to see what happens).

```css
.card {
    background-size: cover;
    background-position: center;
    width: calc(25% - 20px);
    height: calc(25% - 20px);
   ...
}
```

#### carousel.css
This one’s pretty simple as well, but of course the trick is to know which properties to use in the right combinations. The .preview_box is the main container of your carousel. While it’s initially set to display: none,  when the “active” class is added to it, it will cover the screen.

```css
.preview_box.active {
   position: absolute;
   top: 0px;
   left: 0px;
   display: flex;
   background: rgba(255, 255, 255, 1);
}
```

As we saw in [Tutorial 4](/spring2021/lectures/10tutorial), using JavaScript to add a class to an element is a common technique for adding interactivity.

#### Practice Exercise
Modify your index.html by adding the active class to the preview_box to see what happens (by viewing index.html in your browser). Then preview your index.html in the web browser. When you’re done w/the experiment, delete the active class.

```html
<section class="preview_box active">
     ...
</section>
```

In addition to the preview_box, there are also css style blocks style the image and the “next,” “previous,” and “close” buttons. Feel free to mess around with the style properties to see what happens.


## Your Task: Making the carousel work using JavaScript
Overview. There are 5 to completing this homework assignment:

{:.checkbox-list}
* Implementing the `showPhoto` function
* Attaching the `showPhoto` button to each card.
* Adding the ability to `close` the full-screen photo.
* Implementing the `next` button functionality.
* Implementing the `previous` button functionality.

### Part 1. Implement the showPhoto function
When the user clicks a photo, a ‘full screen’ version of the photo should appear. For this to happen you will need to make the following changes to the body of the `showPhoto` function:
1. Set the featured_image element's backgroundImage property to the url associated with the background image of the div element that the user just clicked on.
1. Add the active class to the “.preview_box” element so that the full-screen version of the image becomes visible to the user.

When you’re done, test it by clicking the top, left-hand image on the screen. If you did it right, when you click the photo, a carousel will appear in full-screen mode.

### Part 2. Apply onclick handler to all images
Apply the onclick event handler to *all of the images — not just the first one. In order to do this, you’ll have to use the querySelectorAll selector, loop through each element, and attach the event handler to each element. So, please replace this...

```js
document.querySelector('.card').onclick = showPhoto;
```

...with this...

```js
const cards = document.querySelectorAll('.card');
for (card of cards) {
   card.onclick = showPhoto;
}
```

### Part 3. Create the “close carousel” functionality
Now, the issue is that the carousel won’t close. To fix that, you’re going to:

1. Create a `close` function that removes the “active” class from the “.preview_box” element.
1. Attach your newly created `close` function to the onclick event handler of the “.close” button (in the upper right-hand corner).

**HINT**: This uses a technique similar to the "theme switcher" functionality from Tutorial 4.

### Part 4. Create “next photo” functionality
1. Create a `next` function that switches out the “.featured_image” background image to the next image in the list.
2. Attach your newly created `next` function to the onclick event handler of the “.next” button.
3. Also attach your `next` function to the onclick event handler of the “.featured_image” element (so that clicking anywhere on the image will advance it to the next one) — for convenience.

**HINT:** You will need a global variable to store information about the current item being displayed. I have created one for you called `activeCard`. Each time the user clicks the next button, you will update the `activeCard` variable by setting it to the next ".card" element in the DOM. In doing so, you can track which card you're currently on so that you know what the next card will be (i.e. the next sibling).

Some useful element attributes:
* nextElementSibling
* previousElementSibling

### Part 5. Create “previous photo” functionality
1. Create a `previous` function that switches out the “.featured_image” background image to the previous image in the list.
1. Attach your newly created `previous` function to the onclick event handler of the “.prev” button (in the upper right-hand corner).

## Optional Enhancements
* See if you can get the carousel to advance on its own (Google setInterval()).
* When the carousel gets to the end of the list (on either side), program it so that it wraps around to the beginning again.
* Add a set of button options to the top so that the user can select how big they want the gallery thumbnails to be.
* Dynamically generate your images from a JavaScript list (we will be reviewing this in the coming weeks).
* Add the ability for a user to add a new photo to the gallery.

## What to turn in
1. Put all of your homework 3 files in a folder called hw03 (should already be named correctly)
1. Add hw03 to your repo folder (should already be done)
1. Add, commit, and push your hw03 folder to GitHub
1. Make sure you paste a link to your GitHub pages to Canvas!


