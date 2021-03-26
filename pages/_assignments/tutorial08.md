---
layout: two-column
title: Tutorial 8
type: tutorial
abbreviation: Tutorial 8
draft: 1
num: 8
points: 2
due_date: 2021-05-21
description:
    - GET, POST, PUT, and DELETE
---

## Schedule

| Date | Session | Topic |
|--|--|--|
| Th, 5/28: 4-5PM | Tutorial with Anna | Setting up your own domain name |
| Fr, 5/29: 3-4PM | Tutorial with Sarah | Parallax & Animations |
| Fr, 5/29: 4-5PM | Tutorial with Sarah | Faking JSON Data w/Fetch |

## Sessions

### I.  Custom Domain Names (Th, 4-5PM)
From Anna: Here's a couple links to help you host your project on a custom domain! Again, it's really easy to purchase a domain through GoDaddy or Google Domains, and it's pretty cheap (usually around $12/year, automatically renewing until you cancel).

* <a href="https://medium.com/@hossainkhan/using-custom-domain-for-github-pages-86b303d3918a" target="_blank">https://medium.com/@hossainkhan/using-custom-domain-for-github-pages-86b303d3918a</a>
* <a href="https://medium.com/@hossainkhan/using-custom-domain-for-github-pages-86b303d3918a" target="_blank">https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site</a>

I recommend following the first one since it's a lot simpler/more straight forward, but the second one is more thorough incase you get stuck somewhere.

### II. Animations (Fr, 3-4PM)

<a href="/spring2021/course-files/tutorials/tutorial08.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 

For the Animations tutorial, I was thinking of just showing you some options and talking through how you might approach incorporating some of these florishes into your website. First, let me show you a few links I found online:

#### Parallax
* <a href="https://github.com/dixonandmoe/rellax" target="_blank">https://github.com/dixonandmoe/rellax</a>
* <a href="https://alexfox.dev/lax.js/" target="_blank">https://alexfox.dev/lax.js/</a>
* <a href="https://github.com/electerious/basicScroll#demos" target="_blank">https://github.com/electerious/basicScroll#demos</a>
* <a href="https://bashooka.com/coding/parallax-animation-javascript" target="_blank">https://bashooka.com/coding/parallax-animation-javascript-libraries-2019/</a>
* <a href="https://chriscavs.github.io/rallax-demo/" target="_blank">https://chriscavs.github.io/rallax-demo/</a>
* <a href="https://github.com/geosigno/simpleParallax.js" target="_blank">https://github.com/geosigno/simpleParallax.js</a>

#### Other Animation Libraries and Tutorials
* <a href="https://github.com/juliangarnier/anime#getting-started" target="_blank">AnimeJS</a>
* Some interesting <a href="https://www.linkedin.com/learning/css-shorts/welcome?u=75814418" target="_blank">CSS Shorts</a> on LinkedIn learning, which deconstruct various design techniques / florishes.

In order to access the LinkedIn content, please sign in with your NU account.

<a class="nu-button" href="https://www.linkedin.com/checkpoint/enterprise/login/75814418?application=learning" target="blank">
    Sign into LinkedIn Learning <i class="fas fa-external-link-alt" aria-hidden="true"></i>
</a>



### III. Custom Data + Templates (Fr, 4-5PM)
<a href="https://northwestern.zoom.us/rec/share/x-BIFrHa1FxIbqvj8V7PZqQxXaj6T6a81igf_PsFy0iIDW9SKREzT3i-oDgeRZsz?startTime=1590786049000" target="_blank">Video from today</a>

In order to "fake" a database interaction, you have to create one or more JSON files that your interact with using fetch. However, there is one security trick: when you're testing on you local computer, you have to run a local server so that you don't get a security error. To do this:

1. Open your Terminal or commmand prompt
2. Navigate to your project directory
3. Run the built-in python server module (depending on whether Python 2 or 3 is installed on your machine):
   * python2: `python -m SimpleHTTPServer 8000`
   * python3: `python -m http.server 8000`

After you've run this command, open your web browser and navigate to <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>

When you're done with this step, please download the exercise files.

<a href="/spring2021/course-files/tutorials/tutorial08.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 