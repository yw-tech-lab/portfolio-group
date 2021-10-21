---
layout: two-column-resources
title: Semantic Tags
nav_order: 7
parent: HTML Resources
permalink: /html-reference/semantic-tags/
---

{:.blockquote-no-margin}
> ## LinkedIn Learning Resources
>
> * <a href="https://www.linkedin.com/learning/html-essential-training-4/structuring-content" target="_blank">Structuring Content (main, header, footer, article, aside, section)</a> (4:14)
>
> ## W3Schools Reference
> * [http://www.w3schools.com/html/html5_semantic_elements.asp](http://www.w3schools.com/html/html5_semantic_elements.asp)
> * [http://www.w3schools.com/html/html_layout.asp](http://www.w3schools.com/html/html_layout.asp)

Semantic elements clearly describe the purpose of the tag in the tag itself, and are new in HTML5. &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;, &lt;aside&gt;, etc. are examples of semantic tags. Semantic tags are useful for grouping your page into logical sections that are easy for a screen reader or web crawler to interpret.

## Example 1: Simple
```
|---------------------------------|
|             <header>            |
|-----------|---------------------|
| <nav>     | <section>           |
|-----------|---------------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/zBYeRm/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

## Example 2: More Complicated
```
|---------------------------------|
|             <header>            |
|---------------------------------|
|               <nav>             |
|-----------------|---------------|
| <section>       |               |
|-----------------| <aside>       |
| <article>       |               |
|-----------------|---------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/rLNPoq/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>
