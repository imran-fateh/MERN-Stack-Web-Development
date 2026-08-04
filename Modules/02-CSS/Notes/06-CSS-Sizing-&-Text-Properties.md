# 📘 Day 06 - Sizing & Text Properties

This lesson covers CSS sizing properties and text formatting properties used to control the dimensions of elements and improve text presentation.

---

## 📚 Topics Covered

- Width
- Height
- Min Width
- Max Width
- Min Height
- Max Height
- Overflow
- Text Align
- Text Decoration
- Text Transform
- Letter Spacing
- Word Spacing
- Line Height
- Text Shadow

---

# 📏 1. Width

The `width` property sets the horizontal size of an element.

## 📝 Syntax

```css
width: 300px;
```

## 💻 Example

```css
.box {
  width: 300px;
}
```

### ⚠️ Important Notes

- Controls horizontal size.
- Supports `px`, `%`, `rem`, `vw`, and other units.
- Commonly used for containers and cards.

---

# 📐 2. Height

The `height` property sets the vertical size of an element.

## 📝 Syntax

```css
height: 200px;
```

## 💻 Example

```css
.box {
  height: 200px;
}
```

### ⚠️ Important Notes

- Controls vertical size.
- Small heights may cause overflow.

---

# 📉 3. Min Width

The `min-width` property defines the minimum width of an element.

## 📝 Syntax

```css
min-width: 300px;
```

## 💻 Example

```css
.child {
  min-width: 300px;
}
```

### ⚠️ Important Notes

- Prevents elements from becoming too small.
- Useful for responsive layouts.

---

# 📈 4. Max Width

The `max-width` property defines the maximum width of an element.

## 📝 Syntax

```css
max-width: 600px;
```

## 💻 Example

```css
.child {
  max-width: 600px;
}
```

### ⚠️ Important Notes

- Prevents excessive horizontal growth.
- Commonly used in responsive design.

---

# 📏 5. Min Height

The `min-height` property sets the minimum height of an element.

## 📝 Syntax

```css
min-height: 150px;
```

## 💻 Example

```css
.box {
  min-height: 150px;
}
```

### ⚠️ Important Notes

- Ensures minimum vertical space.
- Content can increase the height.

---

# 📐 6. Max Height

The `max-height` property limits the height of an element.

## 📝 Syntax

```css
max-height: 300px;
```

## 💻 Example

```css
.box {
  max-height: 300px;
}
```

### ⚠️ Important Notes

- Prevents excessive vertical growth.
- Often used with the `overflow` property.

---

# 📦 7. Overflow

The `overflow` property controls extra content that exceeds an element's size.

## 📝 Syntax

```css
overflow: auto;
```

## 🎯 Values

```css
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
```

## 💻 Example

```css
.box {
  height: 150px;
  overflow: auto;
}
```

### ⚠️ Important Notes

- `visible` shows extra content.
- `hidden` hides extra content.
- `scroll` always shows scrollbars.
- `auto` shows scrollbars only when needed.

---

# 📝 8. Text Align

The `text-align` property controls text alignment.

## 🎯 Values

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

## 💻 Example

```css
h1 {
  text-align: center;
}
```

### ⚠️ Important Notes

- Used for headings and paragraphs.
- `justify` aligns both left and right sides.

---

# ✏️ 9. Text Decoration

The `text-decoration` property adds decorative lines to text.

## 🎯 Values

```css
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
text-decoration: none;
```

## 💻 Example

```css
h2 {
  text-decoration: underline;
}
```

---

# 🔤 10. Text Transform

The `text-transform` property changes the letter casing of text.

## 🎯 Values

```css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

## 💻 Example

```css
p {
  text-transform: uppercase;
}
```

---

# 🔠 11. Letter Spacing

The `letter-spacing` property controls the space between letters.

## 📝 Syntax

```css
letter-spacing: 5px;
```

## 💻 Example

```css
p {
  letter-spacing: 5px;
}
```

---

# 📝 12. Word Spacing

The `word-spacing` property controls the space between words.

## 📝 Syntax

```css
word-spacing: 15px;
```

## 💻 Example

```css
p {
  word-spacing: 15px;
}
```

---

# 📄 13. Line Height

The `line-height` property controls the spacing between lines of text.

## 📝 Syntax

```css
line-height: 2;
```

## 💻 Example

```css
p {
  line-height: 2;
}
```

---

# 🌟 14. Text Shadow

The `text-shadow` property adds shadow effects to text.

## 📝 Syntax

```css
text-shadow: 2px 2px 5px gray;
```

## 💻 Example

```css
h1 {
  text-shadow: 2px 2px 5px gray;
}
```

---

# 📋 Summary

- ✅ Width controls horizontal size.

- ✅ Height controls vertical size.

- ✅ Min-width prevents shrinking.

- ✅ Max-width prevents excessive growth.

- ✅ Min-height ensures minimum height.

- ✅ Max-height limits height.

- ✅ Overflow controls extra content.

- ✅ Text-align aligns text.

- ✅ Text-decoration adds decorative effects.

- ✅ Text-transform changes text case.

- ✅ Letter-spacing controls spacing between letters.

- ✅ Word-spacing controls spacing between words.

- ✅ Line-height controls spacing between text lines.

- ✅ Text-shadow creates visual effects.

---

# ❌ Common Mistakes

- Using fixed widths everywhere.

- Using height without overflow.

- Confusing `width` and `max-width`.

- Applying large text shadows.

- Using excessive letter spacing.
