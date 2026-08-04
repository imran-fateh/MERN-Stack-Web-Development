# 🟦 Day 15 - CSS Variables & Grid Properties

## 📖 What We Will Learn

In this lesson, we will learn two important CSS concepts:

- CSS Variables
- CSS Grid Layout

CSS Variables help us store and reuse values throughout a stylesheet.
CSS Grid is a two-dimensional layout system used to organize elements into rows and columns.

---

# 🎨 Part 01 - CSS Variables

## 📖 What are CSS Variables?

CSS Variables, also called **Custom Properties**, allow us to store reusable CSS values.
Instead of writing the same color, spacing, font size, or other value repeatedly, we can define it once and reuse it throughout the stylesheet.

---

# 🔹 Declaring CSS Variables

CSS Variables are created using two hyphens `--`.

## Syntax

```css
selector {
  --variable-name: value;
}
```

## Example

```css
:root {
  --primary-color: #2563eb;
  --text-color: #0f172a;
}
```

---

# 🌍 `:root`

The `:root` selector represents the highest-level element of the document.

Variables declared inside `:root` are normally available throughout the entire webpage.

## Example

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #0f172a;
  --spacing: 20px;
}
```

These are commonly called **global CSS variables**.

---

# 🔹 `var()`

The `var()` function is used to access a CSS variable.

## Syntax

```css
property: var(--variable-name);
```

## Example

```css
button {
  background-color: var(--primary-color);
  color: white;
}
```

---

# 🎯 CSS Variable Example

```css
:root {
  --primary-color: #2563eb;
  --card-radius: 12px;
  --spacing: 20px;
}

.card {
  padding: var(--spacing);
  border-radius: var(--card-radius);
  background-color: var(--primary-color);
}
```

If we change `--primary-color`, every element using that variable will automatically use the new value.

---

# 🔄 CSS Variable Fallback Value

The `var()` function can also contain a fallback value.

The fallback is used when the variable does not exist.

## Syntax

```css
property: var(--variable-name, fallback-value);
```

## Example

```css
.title {
  color: var(--heading-color, blue);
}
```

If `--heading-color` is not defined, `blue` will be used.

---

# 📍 Local CSS Variables

CSS Variables do not always need to be declared inside `:root`.

They can also be declared inside a specific selector.

## Example

```css
.card {
  --card-color: #22c55e;

  background-color: var(--card-color);
}
```

Here, `--card-color` belongs to the `.card` scope and its descendants.

---

# 💡 Common Uses of CSS Variables

CSS Variables are commonly used for:

- Colors
- Font sizes
- Spacing
- Border radius
- Shadows
- Container sizes
- Transitions
- Design systems
- Themes

## Example

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #0f172a;

  --font-small: 14px;
  --font-large: 32px;

  --space-sm: 10px;
  --space-md: 20px;
  --space-lg: 40px;

  --radius-md: 12px;

  --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

---

# ⭐ Benefits of CSS Variables

CSS Variables help us:

- Avoid repeated values
- Keep CSS consistent
- Update designs quickly
- Create reusable design systems
- Create light and dark themes
- Maintain large projects more easily

---

# 🟩 Part 02 - CSS Grid

## 📖 What is CSS Grid?

CSS Grid is a **two-dimensional CSS layout system**.

It allows us to control both:

- Rows
- Columns

CSS Grid contains two main parts:

1. Grid Container — Parent
2. Grid Items — Children

---

# 🧱 Grid Container

An element becomes a Grid Container when we apply:

```css
.container {
  display: grid;
}
```

All direct children of the container become **Grid Items**.

---

# 🟦 Grid Parent Properties

Important Grid Container properties include:

- `display`
- `grid-template-columns`
- `grid-template-rows`
- `gap`
- `row-gap`
- `column-gap`
- `justify-items`
- `align-items`
- `place-items`
- `justify-content`
- `align-content`
- `place-content`
- `grid-auto-columns`
- `grid-auto-rows`
- `grid-auto-flow`
- `grid-template-areas`

---

# 🔹 `display: grid`

Creates a block-level Grid Container.

## Example

```css
.container {
  display: grid;
}
```

---

# 🔹 `display: inline-grid`

Creates an inline-level Grid Container.

## Example

```css
.container {
  display: inline-grid;
}
```

---

# 📊 `grid-template-columns`

Defines the number and size of columns.

## Example

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

This creates three columns.

---

# 📏 `grid-template-rows`

Defines the number and size of rows.

## Example

```css
.container {
  display: grid;
  grid-template-rows: 100px 150px;
}
```

This creates two explicit rows.

---

# 🧮 `fr` Unit

`fr` means **fraction of available space**.

## Example

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

The available width is divided equally between three columns.

We can also use different fractions:

```css
.container {
  grid-template-columns: 1fr 2fr 1fr;
}
```

The middle column receives twice as much fractional space.

---

# 🔁 `repeat()`

The `repeat()` function prevents repeated track values.

## Instead of

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

We can write:

```css
grid-template-columns: repeat(4, 1fr);
```

---

# ↔️ `gap`

The `gap` property adds spacing between Grid rows and columns.

## Example

```css
.container {
  display: grid;
  gap: 20px;
}
```

---

# ↕️ `row-gap`

Controls spacing between rows.

```css
.container {
  row-gap: 30px;
}
```

---

# ↔️ `column-gap`

Controls spacing between columns.

```css
.container {
  column-gap: 20px;
}
```

---

# 🔹 Two-Value `gap`

We can control row and column gaps together.

```css
.container {
  gap: 30px 20px;
}
```

The first value controls **row gap**.

The second value controls **column gap**.

---

# 🎯 `justify-items`

Controls the horizontal alignment of Grid Items inside their Grid cells.

Common values:

```css
justify-items: start;
justify-items: end;
justify-items: center;
justify-items: stretch;
```

## Example

```css
.container {
  display: grid;
  justify-items: center;
}
```

---

# ↕️ `align-items`

Controls the vertical alignment of Grid Items inside their Grid cells.

Common values:

```css
align-items: start;
align-items: end;
align-items: center;
align-items: stretch;
```

## Example

```css
.container {
  display: grid;
  align-items: center;
}
```

---

# 🎯 `place-items`

`place-items` is shorthand for:

- `align-items`
- `justify-items`

## Example

```css
.container {
  display: grid;
  place-items: center;
}
```

It is commonly used to center Grid Items both vertically and horizontally.

---

# ↔️ `justify-content`

Controls the horizontal position of the **entire Grid** when extra horizontal space exists inside the container.

Common values:

```css
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

---

# ↕️ `align-content`

Controls the vertical position of the **entire Grid** when extra vertical space exists.

Common values:

```css
align-content: start;
align-content: end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

---

# 🎯 `place-content`

`place-content` is shorthand for:

- `align-content`
- `justify-content`

## Example

```css
.container {
  display: grid;
  place-content: center;
}
```

---

# 🆕 Explicit vs Implicit Grid

Tracks created using:

```css
grid-template-columns
grid-template-rows
```

belong to the **Explicit Grid**.

If Grid needs additional tracks automatically, those tracks become part of the **Implicit Grid**.

---

# 📏 `grid-auto-rows`

Controls the size of automatically created rows.

## Example

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
}
```

---

# 📏 `grid-auto-columns`

Controls the size of automatically created columns.

## Example

```css
.container {
  display: grid;
  grid-auto-columns: 150px;
}
```

---

# 🔄 `grid-auto-flow`

Controls how automatically placed Grid Items are added.

Common values:

```css
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
```

### `row`

Items are placed row by row.

### `column`

Items are placed column by column.

### `dense`

The browser attempts to fill empty spaces using later Grid Items.

---

# 🗺️ `grid-template-areas`

Allows us to create a layout using named areas.

## Example

```css
.container {
  display: grid;

  grid-template-columns: 200px 1fr;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

The children can then be connected to those areas:

```css
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

This is especially useful for page layouts and dashboards.

---

# 🟨 Part 03 - Grid Child Properties

Grid Child Properties are applied to individual Grid Items instead of the parent container.

Important child properties include:

- `grid-column-start`
- `grid-column-end`
- `grid-column`
- `grid-row-start`
- `grid-row-end`
- `grid-row`
- `grid-area`
- `justify-self`
- `align-self`
- `place-self`

---

# ➡️ `grid-column-start`

Specifies the Grid column line where an item starts.

```css
.item {
  grid-column-start: 1;
}
```

---

# ⬅️ `grid-column-end`

Specifies the Grid column line where an item ends.

```css
.item {
  grid-column-end: 3;
}
```

---

# ↔️ `grid-column`

`grid-column` is shorthand for:

- `grid-column-start`
- `grid-column-end`

## Example

```css
.item {
  grid-column: 1 / 3;
}
```

The item starts at column line `1` and ends at column line `3`.

---

# ⬇️ `grid-row-start`

Specifies the row line where an item starts.

```css
.item {
  grid-row-start: 1;
}
```

---

# ⬆️ `grid-row-end`

Specifies the row line where an item ends.

```css
.item {
  grid-row-end: 3;
}
```

---

# ↕️ `grid-row`

`grid-row` is shorthand for:

- `grid-row-start`
- `grid-row-end`

## Example

```css
.item {
  grid-row: 1 / 3;
}
```

---

# 📐 `span`

The `span` keyword tells an item how many Grid tracks it should cover.

## Example

```css
.item {
  grid-column: span 2;
}
```

The item spans two columns.

Another example:

```css
.item {
  grid-row: span 2;
}
```

The item spans two rows.

---

# 🎯 `justify-self`

Controls the horizontal alignment of one individual Grid Item inside its cell.

```css
.item {
  justify-self: center;
}
```

Common values:

```css
start
end
center
stretch
```

---

# ↕️ `align-self`

Controls the vertical alignment of one individual Grid Item inside its cell.

```css
.item {
  align-self: center;
}
```

---

# 🎯 `place-self`

`place-self` is shorthand for:

- `align-self`
- `justify-self`

## Example

```css
.item {
  place-self: center;
}
```

---

# 🗺️ `grid-area`

`grid-area` can assign an element to a named Grid Area.

## Example

```css
.sidebar {
  grid-area: sidebar;
}
```

It can also be used as a shorthand for Grid line placement.

```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

The order is:

```text
row-start / column-start / row-end / column-end
```

---

# 🟪 Part 04 - Powerful Grid Functions

## 📏 `minmax()`

`minmax()` defines a minimum and maximum size for a Grid track.

## Syntax

```css
minmax(minimum, maximum)
```

## Example

```css
.container {
  grid-template-columns: repeat(3, minmax(150px, 1fr));
}
```

Each column can be at least `150px` wide and can grow up to `1fr`.

---

# 🔄 `auto-fit`

`auto-fit` creates as many tracks as can fit inside the available space and allows empty tracks to collapse.

## Example

```css
.container {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

This pattern is extremely useful for responsive card layouts.

---

# 🔄 `auto-fill`

`auto-fill` also creates as many tracks as can fit inside the container.

## Example

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Unlike `auto-fit`, empty generated tracks can remain reserved.

---

# ⚔️ `auto-fit` vs `auto-fill`

| `auto-fit`                  | `auto-fill`                             |
| --------------------------- | --------------------------------------- |
| Empty tracks can collapse   | Empty tracks can remain                 |
| Existing items can expand   | Track structure can remain              |
| Common for responsive cards | Useful when reserved tracks are desired |

---

# 📱 Responsive Grid Pattern

One of the most useful CSS Grid patterns is:

```css
.container {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 20px;
}
```

This allows cards to automatically adjust according to available space.

In many layouts, this reduces the number of media queries we need.

---

# ⚡ Grid Shorthand Properties

CSS Grid provides several shorthand properties.

## `grid-column`

```css
.item {
  grid-column: 1 / 3;
}
```

Replaces:

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

---

## `grid-row`

```css
.item {
  grid-row: 1 / 3;
}
```

Replaces:

```css
.item {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

---

## `place-items`

```css
.container {
  place-items: center;
}
```

Controls:

```text
align-items + justify-items
```

---

## `place-content`

```css
.container {
  place-content: center;
}
```

Controls:

```text
align-content + justify-content
```

---

## `place-self`

```css
.item {
  place-self: center;
}
```

Controls:

```text
align-self + justify-self
```

---

# 🧠 Grid Parent vs Grid Child

A very important distinction:

## 👨‍👩‍👧 Grid Parent

Properties applied to the Grid Container:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
}
```

The parent controls the **overall Grid layout**.

## 👶 Grid Child

Properties applied to individual Grid Items:

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  justify-self: center;
}
```

The child controls its **own placement or alignment** within the Grid.

---

# ⚖️ `items` vs `content` vs `self`

This distinction is important:

### `justify-items` / `align-items`

Controls **all Grid Items inside their cells**.

### `justify-content` / `align-content`

Controls **the entire Grid inside the Grid Container** when extra space exists.

### `justify-self` / `align-self`

Controls **one individual Grid Item inside its own cell**.

---

# 💻 Complete Basic Grid Example

## HTML

```html
<div class="grid-container">
  <div class="grid-item">01</div>
  <div class="grid-item">02</div>
  <div class="grid-item">03</div>
  <div class="grid-item">04</div>
  <div class="grid-item">05</div>
  <div class="grid-item">06</div>
</div>
```

## CSS

```css
:root {
  --primary-color: #2563eb;
  --spacing: 20px;
  --radius: 10px;
}

.grid-container {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: var(--spacing);
}

.grid-item {
  padding: 30px;

  border-radius: var(--radius);

  background-color: var(--primary-color);

  color: white;

  text-align: center;
}
```

This example combines **CSS Variables + CSS Grid**.

---

# 🚫 Common Mistakes

## ❌ Forgetting `display: grid`

Wrong:

```css
.container {
  grid-template-columns: repeat(3, 1fr);
}
```

Correct:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---

## ❌ Applying Parent Properties to Children

Wrong:

```css
.item {
  grid-template-columns: repeat(3, 1fr);
}
```

If `.item` is only a Grid Item and not itself a Grid Container, this does not create columns for its siblings.

Apply Grid Container properties to the correct parent.

---

## ❌ Confusing `justify-items` with `justify-content`

Remember:

```text
justify-items   → items inside cells
justify-content → entire grid inside container
justify-self    → one item inside its cell
```

---

## ❌ Forgetting `var()`

Wrong:

```css
button {
  background: --primary-color;
}
```

Correct:

```css
button {
  background: var(--primary-color);
}
```

---

## ❌ Using a Variable Before Understanding Its Scope

A variable declared inside one component may not be available outside that component.

```css
.card {
  --card-color: blue;
}
```

That variable is scoped to `.card` and its descendants.

---

# 🌍 Real-World Uses

CSS Variables are useful for:

- Design systems
- Theme colors
- Dark mode
- Reusable spacing
- Typography systems
- Component styling

CSS Grid is useful for:

- Dashboards
- Portfolio projects
- Product cards
- Image galleries
- Admin panels
- Page layouts
- Blog layouts
- Responsive card sections

---

# ⚡ Quick Revision

```css
/* CSS Variable */

:root {
  --primary-color: #2563eb;
}

.element {
  color: var(--primary-color);
}

/* Create Grid */

.container {
  display: grid;
}

/* Columns */

.container {
  grid-template-columns: repeat(3, 1fr);
}

/* Rows */

.container {
  grid-template-rows: repeat(2, 100px);
}

/* Gap */

.container {
  gap: 20px;
}

/* Align Items */

.container {
  justify-items: center;
  align-items: center;
}

/* Align Grid */

.container {
  justify-content: center;
  align-content: center;
}

/* Child Placement */

.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

/* Child Alignment */

.item {
  place-self: center;
}

/* Responsive Grid */

.container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

# 📌 Day 15 Summary

Today we learned:

- CSS Variables
- `:root`
- `var()`
- Variable fallback values
- Global and local variables
- CSS Grid
- Grid Container
- Grid Items
- Rows and columns
- `fr`
- `repeat()`
- `gap`
- Grid alignment
- Grid content alignment
- Explicit and implicit Grid
- Auto rows and columns
- Grid auto flow
- Grid template areas
- Grid Child Properties
- Grid line placement
- `span`
- `grid-area`
- Self alignment
- `minmax()`
- `auto-fit`
- `auto-fill`
- Responsive Grid patterns
- Grid shorthand properties

---

# 🧠 Remember

> **CSS Variables control reusable design values.**

> **CSS Grid controls two-dimensional layouts using rows and columns.**

> **Grid Parent controls the layout. Grid Child controls its own position.**

---

## ✅ Day 15 Completed

**CSS Variables + CSS Grid Parent & Child Properties** 🎯
