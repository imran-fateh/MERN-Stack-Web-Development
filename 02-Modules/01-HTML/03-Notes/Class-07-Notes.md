## Tables

## Learning Objective

Learn how to organize data in rows and columns using HTML tables.

---

Basic Table Concepts

1. <table>
   Creates a table container.

2. <tr> (Table Row)
   Creates a row inside the table.

3. <th> (Table Heading)
   Creates a heading cell.
   Text inside th is bold and centered by default.

4. <td> (Table Data)
   Creates a normal data cell.

5. <caption>
   Adds a title to the table.

6. <thead>
   Contains table headings.

7. <tbody>
   Contains table data.

---

Example Structure

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>Imran</td>
        </tr>
    </tbody>

</table>

---

Advanced Table Concepts

1. rowspan
   Merges multiple rows vertically.

   Example:

   <td rowspan="3">Computer</td>

   This cell occupies 3 rows.

2. Timetable Layout
   Used to create school, college, or office schedules.

3. Complex Table Structures
   Large tables containing merged rows and columns.

---

Real World Uses

- Student Records
- School Timetables
- Employee Data
- Product Lists
- Attendance Sheets

---

Important Notes

1. table is the parent element.
2. tr creates rows.
3. th creates headings.
4. td stores data.
5. caption gives a table title.
6. thead stores headings.
7. tbody stores data rows.
8. rowspan merges rows vertically.
