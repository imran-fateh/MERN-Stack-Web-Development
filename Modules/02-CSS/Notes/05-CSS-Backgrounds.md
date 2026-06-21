🖼️ CSS Backgrounds

---

📖 1. What are CSS Backgrounds?

📌 Definition

CSS Backgrounds are used to control the appearance of an element's background.

❓ Why Do We Use Backgrounds?

Backgrounds help:

- 🎨 Improve design
- 🖼️ Display images
- ✨ Make websites attractive
- 📚 Improve visual presentation

💡 Example

div {
background-color: lightblue;
}

🔍 Explanation

The background color of the div becomes light blue.

---

🎨 2. Background Color

📌 Definition

The "background-color" property adds color behind an element.

💻 Syntax

background-color: color;

💻 Example

div {
background-color: lightyellow;
}

🔍 Explanation

A light yellow color appears behind the element.

⚠️ Important Note

Background color affects only the background area.

---

🖼️ 3. Background Image

📌 Definition

The "background-image" property places an image behind an element.

💻 Syntax

background-image: url("image.jpg");

💻 Example

div {
background-image: url("html-image.jpg");
}

🔍 Explanation

The image is displayed as the background of the element.

⚠️ Important Note

Always provide the correct image path.

---

🔁 4. Background Repeat

📌 Definition

The "background-repeat" property controls whether the image repeats.

💻 Example

background-repeat: repeat;

background-repeat: no-repeat;

🔍 Explanation

- "repeat" → repeats the image
- "no-repeat" → displays the image once

⚠️ Important Note

Large images often use "no-repeat".

---

📏 5. Background Size

📌 Definition

The "background-size" property controls the size of a background image.

💻 Example

background-size: auto;
background-size: contain;
background-size: cover;

🔍 Explanation

auto

Uses the original image size.

contain

Shows the complete image.

Empty space may remain.

cover

Covers the entire container.

Part of the image may be cropped.

⚠️ Important Note

"cover" is commonly used in modern websites.

---

📌 6. Background Attachment

📌 Definition

The "background-attachment" property controls scrolling behavior.

💻 Example

background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

🔍 Explanation

scroll

Default behavior.

fixed

Background remains fixed while the page scrolls.

local

Background scrolls with the element content.

⚠️ Important Note

"fixed" is commonly used in parallax-style designs.

---

🎯 7. Background Position

📌 Definition

The "background-position" property controls image placement.

💻 Example

background-position: top left;
background-position: center center;
background-position: bottom right;

🔍 Explanation

The image can be placed at different positions inside the container.

📍 Common Positions

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

⚡ 8. Background Shorthand

📌 Definition

The "background" property combines multiple background properties in a single line.

💻 Example

background:
url("html-image.jpg")
red
no-repeat
fixed;

🔍 Explanation

This single line combines:

- Background Image
- Background Color
- Background Repeat
- Background Attachment

⚠️ Important Note

Shorthand makes code cleaner and shorter.

---

📝 Summary

✅ CSS Backgrounds improve webpage appearance.

✅ Background Color adds color behind elements.

✅ Background Image displays images behind elements.

✅ Background Repeat controls image repetition.

✅ Background Size controls image size.

✅ Background Attachment controls scrolling behavior.

✅ Background Position controls image placement.

✅ Background Shorthand combines multiple properties in one declaration.

✅ Understanding backgrounds is important for modern web design.
