# CSS Day 08 — Fonts, Icons & Display Property

Day 08 covers CSS fonts, external web fonts, icons, and the CSS display property. These concepts are used to control text appearance, add visual icons, and manage how elements behave in a webpage layout.

---

## 1. CSS Fonts

CSS font properties are used to control the appearance, size, style, and weight of text.

### Common Font Properties

- `font-family` — Defines the typeface of text.
- `font-size` — Controls the size of text.
- `font-weight` — Controls how light or bold the text appears.
- `font-style` — Applies styles such as normal or italic.

### Example

```css
p {
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
}
```

### Font Fallback

Multiple fonts can be provided in `font-family`. If the first font is unavailable, the browser tries the next font in the list.

```css
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
```

---

## 2. Google Fonts

Google Fonts provides web fonts that can be imported and used in CSS.

### Import Method

```css
@import url("GOOGLE_FONT_URL");
```

After importing the font, apply its font family:

```css
p {
  font-family: "Font Name", sans-serif;
}
```

### Important Note

The imported font must be loaded before it is used in CSS. A fallback font should also be included in case the external font fails to load.

---

## 3. CSS Icons

Icons are small visual symbols used to improve navigation and make interface actions easier to understand.

Icons are commonly used in:

- Navigation links
- Buttons
- Contact information
- Social links
- Cards and interface sections

Icons can be added through icon libraries such as Font Awesome.

---

## 4. Font Awesome Icons

Font Awesome is an icon library that provides ready-to-use icons for web pages.

After connecting the Font Awesome stylesheet, icons can be added using the `<i>` element with the required classes.

### Example

```html
<i class="fa-solid fa-house"></i>
<i class="fa-solid fa-phone"></i>
<i class="fa-solid fa-circle-info"></i>
```

Icons can also be styled with CSS:

```css
i {
  font-size: 1.6rem;
  margin-right: 0.5rem;
}
```

---

## 5. CSS Display Property

The `display` property controls how an element behaves and participates in the page layout.

### `display: none`

The element is completely removed from the page layout and does not occupy space.

```css
.element {
  display: none;
}
```

### `display: inline`

The element stays in the normal text flow and only uses the space required by its content.

```css
.element {
  display: inline;
}
```

Width and height generally do not behave like they do on block-level elements.

### `display: block`

The element starts on a new line and normally takes the available horizontal space.

```css
.element {
  display: block;
}
```

Width, height, margin, and padding can be controlled.

### `display: inline-block`

The element remains on the same line with other elements while allowing width, height, margin, and padding control.

```css
.element {
  display: inline-block;
}
```

It combines useful behavior from both inline and block elements.

### `display: flex`

Creates a flexible one-dimensional layout for arranging elements in a row or column.

```css
.container {
  display: flex;
}
```

Flexbox is useful for alignment, spacing, navigation bars, cards, and other one-dimensional layouts.

### `display: grid`

Creates a two-dimensional layout system based on rows and columns.

```css
.container {
  display: grid;
}
```

Grid is useful for structured layouts where both rows and columns need to be controlled.

---

## Display Property Summary

| Display Value  | Main Behavior                                 |
| -------------- | --------------------------------------------- |
| `none`         | Removes the element from the layout           |
| `inline`       | Stays in text flow and uses content width     |
| `block`        | Starts on a new line and uses available width |
| `inline-block` | Stays inline while allowing size control      |
| `flex`         | Creates a one-dimensional flexible layout     |
| `grid`         | Creates a row and column-based layout         |

---

© 2026 Imran Fateh. All rights reserved.
