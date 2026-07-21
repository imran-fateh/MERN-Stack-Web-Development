# 📘 CSS Day 11. Z-Index Notes

## 📖 Definition

The **CSS Z-Index** property controls the stacking order of positioned elements. An element with a higher `z-index` value appears above an element with a lower value.

> **Important:** `z-index` only works on positioned elements.

---

## 💡 Why Do We Use It?

- Display one element above another.
- Create image overlays.
- Show notification badges.
- Build floating cards.
- Create modal popups.
- Design dropdown menus.
- Build professional UI layouts.

---

## ⚙️ Syntax

```css
.box {
  position: relative;
  z-index: 2;
}
```

---

## 📌 Position Values That Support Z-Index

- `position: relative`
- `position: absolute`
- `position: fixed`
- `position: sticky`

❌ Does **not** work with:

```css
position: static;
```

---

## 📝 Example

### HTML

```html
<div class="box-one"></div>
<div class="box-two"></div>
```

### CSS

```css
.box-one {
  position: absolute;
  z-index: 1;
}

.box-two {
  position: absolute;
  z-index: 2;
}
```

### Output

`box-two` appears above `box-one`.

---

## 🌍 Real-World Uses

- Hero Sections
- Image Overlays
- Play Buttons
- NEW Badges
- Notification Icons
- Floating Cards
- Login Popups
- Dropdown Menus
- Mobile Navigation

---

## ⚠️ Common Mistakes

### ❌ Wrong

```css
.box {
  z-index: 5;
}
```

### ✅ Correct

```css
.box {
  position: relative;
  z-index: 5;
}
```

---

## 💎 Best Practices

- Use small values like `1`, `2`, `3`, `4`.
- Keep layer order organized.
- Avoid unnecessary large values.
- Apply `z-index` only when elements overlap.

---

## 🚀 Projects Built

### 🧑‍🏫 Class Work

**Mini Landing Page Layer Demo**

- Header
- Hero Section
- Background Circle
- Hero Image
- NEW Badge
- Floating Card

### 💻 Daily Practice

**Course Promotion Card**

- Course Image
- NEW Ribbon
- Play Button
- Rating Badge
- Student Card
- Enroll Button

---

## ⚡ Quick Revision

- `z-index` controls stacking order.
- Higher value = Higher layer.
- Lower value = Behind.
- Works only on positioned elements.
- Used in modern UI designs.

---
