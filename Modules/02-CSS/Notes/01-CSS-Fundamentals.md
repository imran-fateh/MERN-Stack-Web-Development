# CSS Fundamentals

## 1. What is CSS?

CSS (Cascading Style Sheets) is used to style and design web pages.

## With CSS, we can:

- Change text colors
- Change font sizes
- Add backgrounds
- Add borders
- Create layouts
- Build responsive websites

---

## 2. CSS Syntax

selector {
property: value;
}

# Example

h1 {
color: red;
font-size: 30px;
}

## Parts of CSS

Part: Description
h1: Selector
color: Property
red: Value
{}: Declaration Block

---

## 3. Types of CSS

CSS can be applied in three different ways.

# 1. Inline CSS

Inline CSS is applied directly inside an HTML element using the style attribute.

# Example

<h1 style="color: blue;">
    Inline CSS
</h1>

# Advantages

- Quick styling

# Disadvantages

- Difficult to maintain
- Not reusable

---

## 2. Internal CSS

Internal CSS is written inside the style tag within the head section.

# Example

<style>
h1 {
    color: red;
}
</style>

# Advantages

- Styles a single page easily

# Disadvantages

- Not reusable across multiple pages

---

## 3. External CSS

External CSS is written in a separate CSS file and linked to the HTML document.

# Example

# HTML File:

<link rel="stylesheet" href="styles.css">

# CSS File:

h1 {
color: red;
}

# Advantages

- Reusable
- Professional approach
- Easy maintenance

# Disadvantages

- Requires an additional file

---

## 4. Common CSS Properties

Color

Used to change the text color.

color: red;

---

# Font Size

Used to change the size of text.

font-size: 30px;

---

# Text Align

Used to align text.

text-align: center;

# Possible values:

left
center
right
justify

---

# Background Color

Used to change the background color.

background-color: yellow;

---

# Border

Used to add a border around an element.

border: 2px solid red;

Border Structure

border: width style color;

# Example:

border: 1px solid black;

---

## 5. RGB Colors

CSS also supports RGB colors.

# Example

color: rgb(106, 106, 204);

# RGB Structure

rgb(red, green, blue)

# Range:

0 to 255

---

## 6. Linking External CSS

To connect an external CSS file:

<link rel="stylesheet" href="styles.css">

rel Attribute

Defines the relationship between the HTML file and the linked file.

rel="stylesheet"

---

## 7. CSS Priority

When all three CSS types are used together, the priority order is:

1. Inline CSS
2. Internal CSS
3. External CSS

---

## Today's Class Summary

✔ CSS Introduction

✔ CSS Syntax

✔ Selector

✔ Property

✔ Value

✔ Declaration Block

✔ Inline CSS

✔ Internal CSS

✔ External CSS

✔ Color

✔ RGB Color

✔ Font Size

✔ Text Align

✔ Background Color

✔ Border

✔ Linking CSS File

## Folder Structure

02-CSS
│
├── Class-Works
│ ├── 01-CSS-Introduction
│ └── 02-CSS-Selectors
│
├── Daily-Practices
│ ├── 01-CSS-Introduction
│ └── 02-CSS-Selectors
│
├── Notes
│ ├── 01-CSS-Fundamentals.md
│ └── 02-CSS-Selectors.md
│
├── Mini-Projects
│
├── Resources
│ ├── Images
│ ├── PDFs
│ ├── UI-Inspirations
│ └── Icons
│
└── README.md
