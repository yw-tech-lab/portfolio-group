---
layout: module
title: Installation & Configuration
type: tutorial
draft: 0
points: 2
abbreviation: Tutorial 1
show_schedule: 1
num: 1
description:
  - Installing & configuring VS Code
  - Practice with HTML tags
due_date: 2021-04-02
---

{:.blockquote-no-margin}
> **Assumptions:** This tutorial assumes that you have reviewed the materials and videos assigned in [lecture 1](/spring2021/lectures/lecture01).

## 1. Install Visual Studio Code
Download and install Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>. 

## 2. Organize your files
<a href="/spring2021/course-files/tutorials/tutorial01.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

File management and organization are an essential part of programming and web development. As such, we suggest the following system:
1. Create a course folder called **cs130** somewhere on your computer. Many people store theirs in Documents or on their Desktop.
2. Create a **tutorials** folder inside of your cs130 folder.
3. Download the tutorial01.zip file, unzip it (ask your TA if you’re new to zipping / unzipping files) and move the unzipped tutorial01 folder into the cs130/tutorials folder (see diagram below).


```
cs130
    |-- tutorials
    │   |-- tutorial01
    │   |-- tutorial02
    |   ...
    |
    |-- homework
    │   |-- hw01
    │   |-- hw02
    |   ...
    |
    |-- lessons
        |-- lesson_01
        |-- lesson_02
        ...
```

## 3. Take a look at your files
You will be ***editing*** your files using VS Code (or another code editor of your choice), and ***viewing*** your rendered files in your web browser.

### View file in Visual Studio Code
1. Open VS Code (your code editor).
2. Add your entire cs130 folder to VS Code by 
   * clicking `File >> Add Folder to Workspace...`  
   * and then navigating to your cs130 folder (wherever you saved it)
3. Open your index.html file and take a look at it. You should see a very simple HTML file that looks like this:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
        <!-- stylesheets and metadata go here -->
       <title>Photos</title>       
       <!-- <link rel="stylesheet" href="style.css"> -->
   </head>
   <body>
       <!-- HTML content tags go here -->
        <nav class="navbar">
            <strong>Photos</strong>
            <a href="#">Music</a>
            <a href="#">Videos</a>
        </nav>
        <main>
            <h1>Photos</h1>
            <p>Here is some text for the homepage.</p>

            <section class="photo-section">
                <!-- photos go here-->
            </section>
        </main>
   </body>
</html>
```

### View file in Web Browser 
Once you’ve taken a look at the code in VS Code, go to your file navigator (Windows Explorer for Windows, Finder for Mac), and double-click index.html to preview it in your browser. For this course, we recommend that you use Chrome because it has some really great built-in developer and debugging tools.

It should look something like this:

<img class="frame xsmall" src="/spring2021/assets/images/tutorials/tutorial01a.png" />

## 4. Complete the Exercise
Now that you're set up, your tutorial task for this week involves editing three HTML files:
* `index.html`
* `music.html`
* `videos.html`  
            
Please make the following changes to your **index.html**:

### 1. Connect your style.css stylesheet
Within the `<head></head>` tag, uncomment the following line by removing the `<!--` on one side and the `-->` on the other:

```html
<!-- <link rel="stylesheet" href="style.css"> -->
```

This link tag instructs the browser to style the `index.html` using the `styles.css` stylesheet. When you're done, it should look like this:

```html
<link rel="stylesheet" href="style.css">
```

Test your change by refreshing your web browser. Your page should now look like this (some formatting should be applied):

<img class="frame medium" src="/spring2021/assets/images/tutorials/tutorial01b.png" />


### 2. Link your pages to one another

### 3. Add some images to the index.html file
Add some image tags (src attribute) linking to images that relate to your theme (add at least three):
1. Some of the images should be relative. To make this happen, you need to download some images from the web and save them inside of your tutorial01 folder. The, create an image tage with a **relative link** to your image.
2. Some images should be absolute (linked directly to the webpage you found them on). Refer to the images page on the course website.

{:.blockquote-no-margin}
> **Hint**: Please see the course resources on [images](/spring2021/html-reference/images/) and [absolute and relative links](/spring2021/html-reference/links/).

### 4. Add two videos to the videos.html file
XXX

### 5. Add a Spotify player to music.html

{:.blockquote-no-margin}
> **Hint**: Please see the course resources on [media tags](/spring2021/html-reference/media-tags/).


### 7. Update the Navigation
Modify the navigation section in each of your two pages so it is possible to link to the other page and to an external link with more information about your topic. For example:  Navigation for index.html should look something like this...

``` Home | Page 1 | More information```

...where each word is a link to the appropriate page.

Make sure that the Home and Page 1 links are **relative** links and that the “More Info” link is an **absolute link** to an external page. Moreover, if it’s an external link, make sure the page opens in a new tab (instead of the same tab) using the target attribute.

{:.blockquote-no-margin}
> **Hint**: Please see the course resources on [images](/spring2021/html-reference/images/) and [absolute and relative links](/spring2021/html-reference/links/).

## 5. Optional Enhancements
While we have not yet covered CSS or Web Accessibility ideas, we encourage you to look towards what’s coming next and start getting oriented with CSS and accessibility standards.

### Accessibility enhancements
Note: following accessibility guidelines is good for everyone — people with disabilities, screen readers, and crawlers and machines who are indexing your content so that you are discoverable on the web. Some simple things you can do:

* Alt tags for images [source]
* Add captions and summaries to table [source]
* Validate your HTML using an online validator

### CSS enhancements
Try editing style.css as follows:
* See if you can change the fonts and/or text color of the h1 tag
* Try resizing the images
* See if you can get your iframe to have the same style as your image
* Change the background color of you web page
* See if you can get your hyperlinks to have a hover effect


## 6. What to turn in
Please zip your entire tutorial01 folder (ask your TA if you don’t know how to do this), and submit it to Canvas under **Tutorial 1**.
