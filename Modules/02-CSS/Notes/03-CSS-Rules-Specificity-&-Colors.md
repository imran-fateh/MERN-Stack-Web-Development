# 🎨Day 03 - CSS Rules, Specificity & Colors

Master the core concepts of CSS styling by learning how rules are applied, how specificity resolves conflicts, and how different color systems are used in modern web development.

---

## 📖 What are CSS Rules?

A CSS Rule defines **how an HTML element should look**. Every rule contains a **selector** and one or more **declarations**.

### 📝 Syntax

```css
selector {
  property: value;
}
```

### 💻 Example

```css
h1 {
  color: blue;
}
```

### 🌍 Common Uses

- Change text color
- Set fonts
- Add spacing
- Create layouts
- Style buttons and cards

---

# 🔄 Last Rule Wins

When multiple rules have the **same specificity**, the browser applies the **last declared rule**.

### 💻 Example

```css
h1 {
  color: red;
}

h1 {
  color: blue;
}

h1 {
  color: green;
}
```

### ✅ Result

```text
Green Color Applied
```

### 💡 Remember

When priority is equal, **the last CSS rule wins.**

---

# 🎯 CSS Specificity

Specificity decides **which CSS rule has the highest priority** when multiple rules target the same element.

### 💻 HTML

```html
<h1 id="title" class="heading">CSS Rules</h1>
```

### 💻 CSS

```css
h1 {
  color: blue;
}

.heading {
  color: purple;
}

#title {
  color: green;
}
```

### ✅ Result

```text
Green Color Applied
```

---

# 🏆 CSS Priority Order

From Lowest to Highest

```text
Element Selector

↓

Class Selector

↓

ID Selector

↓

!important
```

---

# ⚡ !important

The **!important** keyword gives a CSS property the highest priority.

### 💻 Example

```css
h1 {
  color: wheat !important;
}
```

### ⚠ Best Practice

- Use only when necessary.
- Avoid overusing it.
- Prefer solving specificity naturally.

---

# 🎨 CSS Colors

## 📖 What are CSS Colors?

CSS Colors are used to style the appearance of web pages by changing text, backgrounds, borders, and other UI elements.

---

# 🌈 Color Types

## 🎨 Foreground Color

Changes text color.

```css
p {
  color: red;
}
```

---

## 🖼 Background Color

Changes element background.

```css
div {
  background-color: lightyellow;
}
```

---

## #️⃣ HEX Colors

```css
color: #ee3e80;
```

- Starts with `#`
- Most common in UI design

---

## 🔴 RGB Colors

```css
color: rgb(255, 0, 0);
```

- Red
- Green
- Blue

Each value ranges from **0–255**.

---

## 🌈 RGBA Colors

```css
color: rgba(255, 0, 0, 0.5);
```

The **Alpha** value controls transparency.

| Alpha | Result            |
| ----- | ----------------- |
| 0     | Fully Transparent |
| 0.5   | 50% Visible       |
| 1     | Fully Visible     |

---

# 👻 Opacity

Changes the transparency of the **entire element**.

```css
.box {
  opacity: 0.5;
}
```

Opacity affects:

- Text
- Images
- Borders
- Background

---

# 🎯 Alpha Channel

Makes **only the selected color transparent**.

```css
background-color: rgba(0, 128, 0, 0.5);
```

Unlike Opacity, it does **not** affect child elements.

---

# 🔗 Inherit Property

Allows a child element to inherit a property from its parent.

```css
.parent {
  border: 2px solid green;
}

.child {
  border: inherit;
}
```

---

# 🌍 Real-World Applications

These concepts are used in:

- Navigation Bars
- Hero Sections
- Cards
- Buttons
- Forms
- Dashboards
- Responsive Websites

---

# 📚 Key Takeaways

- CSS Rules define element styles.
- Last Rule Wins when specificity is equal.
- Specificity resolves style conflicts.
- `!important` has the highest priority.
- CSS supports HEX, RGB, and RGBA colors.
- Opacity affects the whole element.
- Alpha affects only a specific color.
- `inherit` copies a property from the parent element.
