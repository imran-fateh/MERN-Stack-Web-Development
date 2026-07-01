🖼️ CSS Backgrounds Notes

---

📖 What are CSS Backgrounds?

CSS Backgrounds are used to control the appearance of an element's background.

Backgrounds help:

✅ Improve design
✅ Display images
✅ Make websites attractive
✅ Improve visual presentation

---

💻 Example

div {
background-color: lightblue;

}

The background color of the div becomes light blue.

---

🎨 Background Color

The "background-color" property adds color behind an element.

background-color: lightyellow;

div {
background-color: lightyellow;

}

A light yellow color appears behind the element.

⚠️ Background color affects only the background area.

---

🖼️ Background Image

The "background-image" property places an image behind an element.

background-image: url("image.jpg");

div {
background-image: url("html-image.jpg");

}

The image appears behind the element.

⚠️ Always provide the correct image path.

---

🖼️ Background Properties Diagram

[CSS Background Properties](Resources/images/css-background-properties.jpeg)

This diagram shows the relationship between Background Color, Image, Repeat, Position, Size, and Attachment.

---

🔁 Background Repeat

The "background-repeat" property controls image repetition.

background-repeat: repeat;
background-repeat: no-repeat;

✅ repeat → Repeats the image

✅ no-repeat → Displays the image once

⚠️ Large images usually use "no-repeat".

---

📏 Background Size

The "background-size" property controls image size.

background-size: auto;
background-size: contain;
background-size: cover;

auto

Uses the original image size.

contain

Shows the complete image.

Empty space may remain.

cover

Covers the entire container.

Part of the image may be cropped.

⚠️ "cover" is widely used in modern websites.

---

🖼️ Background Size Comparison

[Background Size](Resources/images/background-size-comparison.jpeg)

This comparison demonstrates the difference between Auto, Contain, and Cover.

---

📌 Background Attachment

The "background-attachment" property controls scrolling behavior.

background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

scroll

Default behavior.

fixed

Background remains fixed during scrolling.

local

Background scrolls with the element content.

⚠️ "fixed" is commonly used for parallax effects.

---

🎯 Background Position

The "background-position" property controls image placement.

background-position: top left;
background-position: center center;
background-position: bottom right;

Common positions:

- top left
- top center
- top right
- center left
- center center
- center right
- bottom left
- bottom center
- bottom right
- 50% 50%

---

⚡ Background Shorthand

The "background" property combines multiple properties in one declaration.

background:
url("html-image.jpg")
red
no-repeat
fixed;

This combines:

✅ Background Image
✅ Background Color
✅ Background Repeat
✅ Background Attachment

⚠️ Shorthand makes code shorter and cleaner.

---

🎓 Topics Covered

✅ Background Color
✅ Background Image
✅ Background Repeat
✅ Background Size
✅ Background Attachment
✅ Background Position
✅ Background Shorthand

---

# 🚀 Final Summary

CSS Backgrounds play an important role in modern web design.

Understanding background images, positioning, sizing, and attachment helps developers create beautiful hero sections, banners, cards, and landing pages.

Mastering Backgrounds is essential before learning:

• CSS Box Model
• Flexbox
• Grid
• Responsive Design
• Modern UI Development
