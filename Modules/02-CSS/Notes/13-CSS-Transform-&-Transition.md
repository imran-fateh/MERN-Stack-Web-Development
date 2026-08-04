#  📘Day 13 - CSS Transition & Transform 

## 📖 What is CSS Transition?

CSS Transition is used to make changes in CSS properties smooth instead of changing instantly. It creates a better user experience by adding animation between the old and new property values.

---

## 📝 Basic Syntax

```css
selector {
  transition: property duration timing-function delay;
}
```

---

## 💡 Example

```html
<div class="box">Hover Me</div>
```

```css
.box {
  width: 150px;
  height: 150px;
  background: #2563eb;
  transition: 0.4s;
}

.box:hover {
  background: #ef4444;
}
```

---

## ⚙️ Transition Properties

| Property                   | Description                     |
| -------------------------- | ------------------------------- |
| transition-property        | Selects the property to animate |
| transition-duration        | Defines animation time          |
| transition-timing-function | Controls animation speed        |
| transition-delay           | Delays the animation            |
| transition                 | Shorthand property              |

---

# 🎨 CSS Transform

## 📖 What is CSS Transform?

CSS Transform changes the position, size, angle, or shape of an element without affecting the page layout.

---

## 📝 Basic Syntax

```css
selector {
  transform: value;
}
```

---

## 🚀 Translate

Moves an element.

```css
transform: translate(30px, 20px);
```

---

## 🔄 Rotate

Rotates an element.

```css
transform: rotate(30deg);
```

---

## 🔍 Scale

Changes the size of an element.

```css
transform: scale(1.2);
```

---

## 📐 Skew

Tilts an element.

```css
transform: skew(15deg);
```

---

## 🔥 Multiple Transforms

```css
transform: translateY(-10px) scale(1.1) rotate(5deg);
```

---

## ✅ Advantages

- Smooth User Experience
- Modern UI Design
- Interactive Components
- Professional Hover Effects
- Better Website Appearance

---

## 💼 Real World Uses

- Navigation Menus
- Buttons
- Cards
- Product Sections
- Image Galleries
- Portfolio Websites
- Landing Pages

---

## 🎯 Key Points

- Transition makes changes smooth.
- Transform changes the element itself.
- Both are commonly used together.
- Hover effects improve user experience.
- These properties are widely used in modern websites.

---

## 📌 Summary

After learning this topic, you can:

- Create smooth hover effects.
- Move elements using Translate.
- Rotate elements.
- Resize elements with Scale.
- Tilt elements with Skew.
- Combine multiple Transform properties.
- Build modern and interactive UI components.

---
