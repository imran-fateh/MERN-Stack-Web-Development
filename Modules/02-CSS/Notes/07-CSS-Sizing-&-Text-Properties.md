📘Sizing & Text Properties Notes

📚 Topics Covered

Width
Height
Min Width
Max Width
Min Height
Max Height
Overflow
Text Align
Text Decoration
Text Transform
Letter Spacing
Word Spacing
Line Height
Text Shadow

📏 1. Width

The width property sets the horizontal size of an element.

📝 Syntax

width: 300px;

💻 Example

.box {
width: 300px;

}

⚠️ Important Notes

Controls horizontal size.
Supports px, %, rem, vw, etc.
Commonly used for containers and cards.

📐 2. Height

The height property sets the vertical size of an element.

📝 Syntax

height: 200px;

💻 Example

.box {
height: 200px;

}

⚠️ Important Notes

Controls vertical size.
Small heights may cause overflow.

📉 3. Min Width

The min-width property defines the minimum width of an element.

📝 Syntax

min-width: 300px;

💻 Example

.child {
min-width: 300px;

}

⚠️ Important Notes

Prevents elements from becoming too small.
Useful for responsive layouts.

📈 4. Max Width

The max-width property defines the maximum width of an element.

📝 Syntax

max-width: 600px;

💻 Example

.child {
max-width: 600px;

}

⚠️ Important Notes

Prevents excessive horizontal growth.
Commonly used in responsive design.

📏 5. Min Height

The min-height property sets the minimum height of an element.

📝 Syntax

min-height: 150px;

💻 Example

.box {
min-height: 150px;

}

⚠️ Important Notes

Ensures minimum vertical space.
Content can increase the height.

📐 6. Max Height

The max-height property limits the height of an element.

📝 Syntax

max-height: 300px;

💻 Example

.box {
max-height: 300px;

}

⚠️ Important Notes

Prevents excessive vertical growth.
Often used with overflow.

📦 7. Overflow

The overflow property controls extra content.

📝 Syntax

overflow: auto;

🎯 Values:

overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;

💻 Example

.box {
height: 150px;
overflow: auto;

}

⚠️ Important Notes

visible shows extra content.
hidden hides extra content.
scroll always shows scrollbars.
auto shows scrollbars when needed.

📝 8. Text Align

The text-align property controls text alignment.

🎯 Values:

text-align: left;
text-align: center;
text-align: right;
text-align: justify;

💻 Example

h1 {
text-align: center;

}

⚠️ Important Notes

Used for headings and paragraphs.
Justify aligns both sides.

✏️ 9. Text Decoration

The text-decoration property adds decorative lines.

🎯 Values:

text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
text-decoration: none;

💻 Example

h2 {
text-decoration: underline;

}

🔤 10. Text Transform

The text-transform property changes text casing.

🎯 Values

text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

💻 Example

p {
text-transform: uppercase;

}

🔠 11. Letter Spacing

The letter-spacing property controls the space between letters.

📝 Syntax

letter-spacing: 5px;

💻 Example

p {
letter-spacing: 5px;

}

📝 12. Word Spacing

The word-spacing property controls the space between words.

📝 Syntax

word-spacing: 15px;

💻 Example

p {
word-spacing: 15px;

}

📄 13. Line Height

The line-height property controls space between text lines.

📝 Syntax

line-height: 2;

💻 Example

p {
line-height: 2;

}

🌟 14. Text Shadow

The text-shadow property adds shadow effects.

📝 Syntax

text-shadow: 2px 2px 5px gray;

💻 Example

h1 {
text-shadow: 2px 2px 5px gray;

}

---

📋 Summary

✅ Width controls horizontal size.
✅ Height controls vertical size.
✅ Min-width prevents shrinking.
✅ Max-width prevents excessive growth.
✅ Min-height ensures minimum height.
✅ Max-height limits height.
✅ Overflow controls extra content.
✅ Text-align aligns text.
✅ Text-decoration adds effects.
✅ Text-transform changes case.
✅ Letter-spacing adds character spacing.
✅ Spacing adds spacing between words.
✅ Line-height controls line spacing.
✅ Text-shadow creates visual effects.

---

❌ Common Mistakes

❇️ Using fixed widths everywhere.
❇️ Using height without overflow.
❇️ Confusing width and max-width.
❇️ Applying large text shadows.
❇️ Using excessive letter spacing.
