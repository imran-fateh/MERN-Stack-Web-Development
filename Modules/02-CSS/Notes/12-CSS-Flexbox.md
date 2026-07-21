# 📘 CSS Flexbox Notes

## 📖 What is Flexbox?

Flexbox (Flexible Box Layout) is a one-dimensional CSS layout system used to align, distribute, and organize elements efficiently inside a container.

---

# Basic Syntax

```css
.container {
  display: flex;
}
```

---

### Example

```html
<div class="container">
  <div>HTML</div>
  <div>CSS</div>
  <div>JavaScript</div>
</div>
```

```css
.container {
  display: flex;
}
```

---

### Output / How it Works

Without Flexbox, elements follow the normal document flow.

After applying:

```css
display: flex;
```

all direct child elements become **Flex Items** and are arranged in a row by default.

```
Before

HTML
CSS
JavaScript


After

HTML   CSS   JavaScript
```

---

# Parent (Flex Container) Properties

## 1. display

Turns a normal container into a flex container.

```css
display: flex;
```

---

## 2. flex-direction

Controls the direction of flex items.

```css
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

| Value          | Description            |
| -------------- | ---------------------- |
| row            | Left → Right (Default) |
| row-reverse    | Right → Left           |
| column         | Top → Bottom           |
| column-reverse | Bottom → Top           |

---

## 3. justify-content

Aligns items on the Main Axis.

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

---

## 4. align-items

Aligns items on the Cross Axis.

```css
align-items: flex-start;
align-items: center;
align-items: flex-end;
align-items: stretch;
align-items: baseline;
```

---

## 5. flex-wrap

Controls whether items wrap onto multiple lines.

```css
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

---

## 6. gap

Adds space between flex items.

```css
gap: 20px;
```

---

## 7. align-content

Aligns multiple rows inside a wrapped flex container.

```css
align-content: flex-start;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

> Works only when `flex-wrap: wrap;` is enabled.

---

# Child (Flex Item) Properties

## 1. flex-grow

Defines how much an item grows.

```css
flex-grow: 1;
```

---

## 2. flex-shrink

Defines how much an item shrinks.

```css
flex-shrink: 1;
```

---

## 3. flex-basis

Sets the initial size of an item.

```css
flex-basis: 300px;
```

---

## 4. flex

Shorthand property.

```css
flex: 1 1 300px;
```

Equivalent to:

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 300px;
```

---

## 5. order

Changes the visual order.

```css
order: 2;
```

---

## 6. align-self

Aligns a single flex item.

```css
align-self: flex-start;
align-self: center;
align-self: flex-end;
```

---

# Real World Uses

- Navigation Bars
- Pricing Cards
- Hero Sections
- Feature Sections
- Team Cards
- Dashboards
- Footers
- Responsive Layouts

---

# Common Mistakes

❌ Applying `display:flex` to child elements instead of the parent.

❌ Forgetting that only direct children become Flex Items.

❌ Using margins everywhere instead of gap.

❌ Expecting every alignment property to work the same way.

---

# Important Notes

- `display:flex` creates a Flex Container.
- `justify-content` works on the Main Axis.
- `align-items` works on the Cross Axis.
- `gap` adds spacing without margins.
- `flex-wrap` makes layouts responsive.
- `flex` is the shorthand of `grow`, `shrink`, and `basis`.

---

# Quick Revision

- `display` → Enable Flexbox
- `flex-direction` → Direction
- `justify-content` → Main Axis
- `align-items` → Cross Axis
- `flex-wrap` → Wrap Items
- `gap` → Space Between Items
- `flex-grow` → Grow Item
- `flex-shrink` → Shrink Item
- `flex-basis` → Initial Size
- `flex` → Shorthand
- `order` → Change Order
- `align-self` → One Item Alignment
