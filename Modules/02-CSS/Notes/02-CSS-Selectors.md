🎯 CSS Selectors

📖 What is a CSS Selector?

CSS Selectors are used to select HTML elements and apply styles to them.

---

🌍 1. Universal Selector

📌 Definition

The Universal Selector selects all HTML elements on a webpage.

🛠 Syntax

- {
  property: value;
  }

💻 Example

- {
  color: blue;
  }

⚡ Important Notes

- Uses the "\*" symbol.
- Applies styles to every element.
- Useful for resetting margin and padding.

❌ Common Mistakes

- Applying too many styles globally.
- Overriding element-specific styles unintentionally.

📝 Summary

The Universal Selector affects all HTML elements.

---

🏷️ 2. Type Selector

📌 Definition

The Type Selector selects elements based on their HTML tag name.

🛠 Syntax

tag-name {
property: value;
}

💻 Example

p {
color: red;
}

⚡ Important Notes

- Targets all elements of the same type.
- Simple and commonly used.

❌ Common Mistakes

- Forgetting that all matching tags will be affected.

📝 Summary

Type Selectors target elements by tag name.

---

🎨 3. Class Selector

📌 Definition

The Class Selector selects elements using the class attribute.

🛠 Syntax

.class-name {
property: value;
}

💻 Example

.highlight {
color: green;
}

⚡ Important Notes

- Starts with a dot (".").
- Can be reused on multiple elements.
- Most commonly used selector in web development.

❌ Common Mistakes

- Forgetting the dot (".") before the class name.

📝 Summary

Class Selectors are reusable and flexible.

---

🆔 4. ID Selector

📌 Definition

The ID Selector selects a unique HTML element using its ID.

🛠 Syntax

#id-name {
property: value;
}

💻 Example

#header {
color: blue;
}

⚡ Important Notes

- Starts with a hash ("#").
- Should be unique within a page.
- Has higher specificity than Class Selectors.

❌ Common Mistakes

- Using the same ID multiple times.

📝 Summary

ID Selectors target one unique element.

---

🌳 5. Descendant Selector

📌 Definition

The Descendant Selector selects all matching elements inside a specified parent element.

🛠 Syntax

parent child {
property: value;
}

💻 Example

.container p {
color: blue;
}

⚡ Important Notes

- Selects direct and nested descendants.
- Frequently used in layouts and components.

❌ Common Mistakes

- Confusing it with Child Selector.

📝 Summary

Descendant Selectors target all matching elements inside a parent.

---

👨‍👩‍👧 6. Child Selector

📌 Definition

The Child Selector selects only direct child elements of a parent.

🛠 Syntax

parent > child {
property: value;
}

💻 Example

.container > p {
color: red;
}

⚡ Important Notes

- Uses the ">" symbol.
- Does not select nested children.

❌ Common Mistakes

- Expecting nested elements to be selected.

📝 Summary

Child Selectors only target direct children.

---

➕ 7. Adjacent Sibling Selector

📌 Definition

The Adjacent Sibling Selector selects the first matching sibling immediately after an element.

🛠 Syntax

element1 + element2 {
property: value;
}

💻 Example

h2 + p {
color: green;
}

⚡ Important Notes

- Selects only one sibling.
- The sibling must come immediately after the first element.

❌ Common Mistakes

- Expecting all following siblings to be selected.

🌍 Real World Example

label + input {
border: 2px solid green;
}

Used in forms where an input comes immediately after a label.

📝 Summary

Adjacent Sibling Selectors target the immediate next sibling.

---

🚀 8. General Sibling Selector

📌 Definition

The General Sibling Selector selects all matching sibling elements that come after a specified element.

🛠 Syntax

element1 ~ element2 {
property: value;
}

💻 Example

h2 ~ p {
color: purple;
}

⚡ Important Notes

- Selects all matching siblings after the first element.
- Both elements must share the same parent.

❌ Common Mistakes

- Confusing it with Adjacent Sibling Selector.

📝 Summary

General Sibling Selectors target all matching siblings that appear later.

---

📊 Selector Comparison Table

Selector| Symbol| Selects
Universal| \*| All Elements
Type| tag| Specific Tag
Class| .| Multiple Elements
ID| #| Unique Element
Descendant| Space| All Matching Descendants
Child| >| Direct Children
Adjacent Sibling| +| Immediate Next Sibling
General Sibling| ~| All Following Siblings

---

🎓 Final Summary

In this module, I learned:

✅ Universal Selector

✅ Type Selector

✅ Class Selector

✅ ID Selector

✅ Descendant Selector

✅ Child Selector

✅ Adjacent Sibling Selector

✅ General Sibling Selector

These selectors form the foundation of CSS and are used extensively in professional web development projects.

💡 Mastering Selectors is essential before learning:

- CSS Box Model
- Display Properties
- Flexbox
- Grid
- Responsive Web Design
