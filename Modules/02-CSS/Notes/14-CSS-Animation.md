#  📘Day 14 - CSS Animation 

## 📖 What is CSS Animation?

CSS Animation is used to add movement and visual effects to HTML elements without using JavaScript.
Animations can make websites more interactive, attractive, and user-friendly.

---

# ✨ @keyframes

The `@keyframes` rule defines how an animation changes from its starting state to its ending state.

## Syntax

```css
@keyframes animation-name {
  from {
    /* Starting Style */
  }

  to {
    /* Ending Style */
  }
}
```

---

# 🎬 animation-name

The `animation-name` property specifies which keyframe animation will be applied.

## Example

```css
animation-name: fadeIn;
```

---

# ⏱️ animation-duration

The `animation-duration` property defines how long the animation will take to complete.

## Example

```css
animation-duration: 2s;
```

---

# ⌛ animation-delay

The `animation-delay` property specifies how long to wait before starting the animation.

## Example

```css
animation-delay: 1s;
```

---

# 🔁 animation-iteration-count

The `animation-iteration-count` property defines how many times an animation should repeat.

## Example

```css
animation-iteration-count: infinite;
```

---

# 🔄 animation-direction

The `animation-direction` property specifies the direction of the animation.

## Values

- normal
- reverse
- alternate
- alternate-reverse

## Example

```css
animation-direction: alternate;
```

---

# ⚡ animation-timing-function

The `animation-timing-function` property controls the animation speed.

## Common Values

- ease
- linear
- ease-in
- ease-out
- ease-in-out

## Example

```css
animation-timing-function: ease-in-out;
```

---

# 📌 animation-fill-mode

The `animation-fill-mode` property defines how styles are applied before or after an animation.

## Common Values

- none
- forwards
- backwards
- both

## Example

```css
animation-fill-mode: forwards;
```

---

# ⏸️ animation-play-state

The `animation-play-state` property starts or pauses an animation.

## Values

- running
- paused

## Example

```css
animation-play-state: paused;
```

---

# 🚀 animation (Shorthand)

The shorthand property combines multiple animation properties into one line.

## Syntax

```css
animation: name duration timing-function delay iteration-count direction
  fill-mode;
```

## Example

```css
animation: fadeIn 2s ease 0.5s infinite alternate forwards;
```

---

# 💡 Advantages of CSS Animation

- Creates interactive user interfaces.
- Improves user experience.
- Makes websites more engaging.
- Does not require JavaScript for basic animations.
- Easy to maintain and reuse.

---

# 🌍 Real World Uses

- Loading Animations
- Hero Section Animations
- Buttons
- Cards
- Icons
- Navigation Menus
- Image Sliders
- Landing Pages

---

# 📝 Summary

CSS Animation allows developers to create smooth and attractive visual effects using `@keyframes` and animation properties. It helps improve the user experience while keeping the code clean and lightweight.
