## HTML META TAGS & SEO BASICS Notes

==================================================

# LEARNING OBJECTIVE

Learn how to use HTML Meta Tags to provide information about a webpage, improve SEO, control search engine behavior, and make websites mobile-friendly.

==================================================

# TOPICS COVERED

## Basic Meta Tags

- title
- meta charset
- meta viewport

## SEO Meta Tags

- description
- keywords
- author
- robots

## Advanced Meta Tags

- refresh
- googlebot
- google specific tags
- noindex
- nofollow

==================================================

CONCEPT EXPLANATION

# 1) <title>

Defines the title of the webpage.
This title appears in the browser tab and search engine results.

## Example:

<title>My Portfolio Website</title>

---

# 2) <meta charset="UTF-8">

Defines character encoding.

Purpose:
Allows the browser to display special characters, symbols, and different languages correctly.

## Example:

<meta charset="UTF-8">

---

# 3) <meta name="viewport">

Makes websites responsive on mobile devices.

Purpose:
Ensures proper scaling on phones and tablets.

## Example:

<meta
name="viewport"
content="width=device-width, initial-scale=1.0">

---

# 4) Description Meta Tag

Provides a short summary of the webpage.

Purpose:
Search engines may display this description in search results.

## Example:

<meta
name="description"
content="This is a blogging website">

---

# 5) Keywords Meta Tag

Defines important keywords related to the website.

Purpose:
Helps identify website topics.

## Example:

<meta
name="keywords"
content="html, css, javascript, web development">

---

# 6) Author Meta Tag

Defines the author of the webpage.

Purpose:
Specifies who created the webpage.

## Example:

<meta
name="author"
content="Imran Fateh">

---

# 7) Robots Meta Tag

Controls search engine crawling and indexing.

## Common Values:

index
follow
noindex
nofollow

## Example:

<meta
name="robots"
content="index, follow">

---

# 8) Refresh Meta Tag

Automatically refreshes the webpage.

Purpose:
Reloads the page after a specified time.

## Example:

<meta
http-equiv="refresh"
content="30">

Meaning:
Refresh page after 30 seconds.

---

# 9) Googlebot Meta Tag

Provides instructions specifically for Google crawler.

## Example:

<meta
name="googlebot"
content="index, follow">

---

# 10) Google Specific Meta Tags

Prevent specific Google features.

## Examples:

<meta
name="google"
content="nositelinkssearchbox">

Disables Google search box.

---

<meta
name="google"
content="notranslate">

Prevents automatic translation.

---

<meta
name="google"
content="noimageindex">

Prevents image indexing.

==================================================

## COMPLETE PROFESSIONAL STRUCTURE

<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Character Encoding -->
    <meta charset="UTF-8">

    <!-- Responsive Design -->
    <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">

    <!-- Page Title -->
    <title>Blog Website</title>

    <!-- SEO Description -->
    <meta
    name="description"
    content="This is a blogging website">

    <!-- SEO Keywords -->
    <meta
    name="keywords"
    content="html, css, javascript">

    <!-- Author -->
    <meta
    name="author"
    content="Imran Fateh">

    <!-- Search Engine Instructions -->
    <meta
    name="robots"
    content="index, follow">

</head>

<body>

    <h1>Welcome To My Blog</h1>

</body>

</html>

==================================================

## REAL WORLD USAGE

# Portfolio Website

- title
- description
- author
- viewport

# Blog Website

- title
- description
- keywords
- robots

# Business Website

- title
- description
- author
- robots
- viewport

==================================================

## IMPORTANT NOTES

1. Meta tags are always written inside the <head> section.

2. Every professional website should have:
   - title
   - charset
   - viewport
   - description

3. UTF-8 is the most commonly used character encoding.

4. Viewport is essential for responsive websites.

5. Description improves search engine appearance.

6. Robots controls search engine behavior.

7. Refresh tag automatically reloads a webpage.

8. Meta tags are invisible to users but extremely important for browsers and search engines.

9. SEO starts with proper title and description tags.

10. Professional developers always optimize meta tags before publishing websites.

==================================================

## SUMMARY

Meta Tags provide information about a webpage.
They help browsers understand the page and help search engines rank and display the page correctly.

## Most Important Tags:

- title
- charset
- viewport
- description
- robots

# These tags are used in almost every professional website.
