# 🚀 Day 18 — Bootstrap

> **CSS Module — Final Day 🔒**

Bootstrap is a front-end CSS framework used to build responsive and modern web interfaces faster.

---

## 🎯 Chapter Goal

Learn how to use Bootstrap for:

- Responsive layouts
- Grid systems
- Utility classes
- UI components
- Forms
- Tables
- Responsive design

---

## 📚 Topics Covered

1. Bootstrap Introduction
2. Bootstrap Setup
3. Containers
4. Grid System
5. Responsive Breakpoints
6. Spacing Utilities
7. Colors
8. Display Utilities
9. Flex Utilities
10. Position Utilities
11. Sizing Utilities
12. Text Utilities
13. Buttons
14. Cards
15. Navbar
16. Alerts
17. Badges
18. Breadcrumb
19. Pagination
20. Forms
21. Input Groups
22. Form Validation
23. Tables
24. Responsive Tables
25. Practical Project

---

# 01. Bootstrap Introduction

### Definition

Bootstrap is a front-end framework that provides ready-made CSS classes, responsive utilities, and UI components.

### Key Features

- Responsive
- Mobile-first
- Grid System
- Utility Classes
- Ready-made Components
- Faster Development

---

# 02. Bootstrap Setup

### Bootstrap CSS

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >

### Bootstrap JavaScript

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    ></script>

---

# 03. Containers

Containers control content width and provide consistent horizontal spacing.

### Container

    <div class="container">
        Content
    </div>

### Full Width Container

    <div class="container-fluid">
        Content
    </div>

> **Important:** Use `.container` when consistent left and right spacing is required.

---

# 04. Grid System

Bootstrap uses a **12-column grid system**.

### Basic Structure

    <div class="container">

        <div class="row">

            <div class="col-6">
                Column 1
            </div>

            <div class="col-6">
                Column 2
            </div>

        </div>

    </div>

### Common Classes

    .row
    .col
    .col-12
    .col-6
    .col-4
    .col-3

---

# 05. Responsive Breakpoints

Bootstrap provides responsive classes for different screen sizes.

| Breakpoint  | Prefix     |
| ----------- | ---------- |
| Extra Small | `col-`     |
| Small       | `col-sm-`  |
| Medium      | `col-md-`  |
| Large       | `col-lg-`  |
| Extra Large | `col-xl-`  |
| XXL         | `col-xxl-` |

### Example

    <div class="col-12 col-md-6 col-lg-4">
        Content
    </div>

### Result

    Mobile  → 1 Column
    Tablet  → 2 Columns
    Desktop → 3 Columns

---

# 06. Spacing Utilities

Bootstrap provides margin and padding utilities.

### Margin

    <div class="m-3">
        Content
    </div>

### Padding

    <div class="p-4">
        Content
    </div>

### Directional Classes

    mt-*  → Margin Top
    mb-*  → Margin Bottom
    ms-*  → Margin Start
    me-*  → Margin End
    mx-*  → Horizontal Margin
    my-*  → Vertical Margin

    pt-*  → Padding Top
    pb-*  → Padding Bottom
    ps-*  → Padding Start
    pe-*  → Padding End
    px-*  → Horizontal Padding
    py-*  → Vertical Padding

---

# 07. Colors

Bootstrap provides predefined color utilities.

### Text

    <p class="text-primary">
        Primary Text
    </p>

    <p class="text-success">
        Success Text
    </p>

### Background

    <div class="bg-primary">
        Content
    </div>

### Common Colors

    primary
    secondary
    success
    danger
    warning
    info
    light
    dark
    white

---

# 08. Display Utilities

Display utilities control how elements are displayed.

    <div class="d-block">
        Block
    </div>

    <div class="d-flex">
        Flex
    </div>

### Responsive Display

    <div class="d-none d-md-block">
        Visible from Medium Screens
    </div>

### Common Classes

    d-none
    d-block
    d-inline
    d-inline-block
    d-flex
    d-grid

---

# 09. Flex Utilities

Bootstrap provides Flexbox utilities.

### Example

    <div class="d-flex justify-content-between align-items-center">
        Content
    </div>

### Common Classes

    d-flex
    flex-row
    flex-column

    justify-content-start
    justify-content-center
    justify-content-end
    justify-content-between

    align-items-start
    align-items-center
    align-items-end

---

# 10. Position Utilities

Bootstrap provides position utility classes.

### Example

    <div class="position-relative">

        <span class="position-absolute">
            Badge
        </span>

    </div>

### Classes

    position-static
    position-relative
    position-absolute
    position-fixed
    position-sticky

---

# 11. Sizing Utilities

Sizing utilities control width and height.

### Width

    <div class="w-100">
        Full Width
    </div>

### Height

    <div class="h-100">
        Full Height
    </div>

### Common Values

    w-25
    w-50
    w-75
    w-100

    h-25
    h-50
    h-75
    h-100

---

# 12. Text Utilities

Bootstrap provides typography utilities.

### Example

    <h1 class="fw-bold">
        Heading
    </h1>

    <p class="text-center">
        Centered Text
    </p>

### Common Classes

    text-start
    text-center
    text-end

    fw-bold
    fw-semibold

    fst-italic

    text-uppercase
    text-lowercase
    text-capitalize

---

# 13. Buttons

Bootstrap provides ready-made button styles.

### Basic Button

    <button class="btn btn-primary">
        Click Me
    </button>

### Variants

    <button class="btn btn-success">
        Success
    </button>

    <button class="btn btn-danger">
        Delete
    </button>

    <button class="btn btn-warning">
        Warning
    </button>

### Outline Button

    <button class="btn btn-outline-primary">
        Learn More
    </button>

---

# 14. Cards

Cards are useful for products, services, profiles, and content.

    <div class="card">

        <div class="card-body">

            <h5 class="card-title">
                Product
            </h5>

            <p class="card-text">
                Product description.
            </p>

            <a href="#" class="btn btn-primary">
                View Details
            </a>

        </div>

    </div>

### Important Classes

    card
    card-body
    card-title
    card-text
    card-header
    card-footer

---

# 15. Navbar

Bootstrap provides responsive navigation.

    <nav class="navbar navbar-expand-lg bg-white">

        <div class="container">

            <a class="navbar-brand" href="#">
                Brand
            </a>

            <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="collapse navbar-collapse"
                id="mainNavbar"
            >

                <ul class="navbar-nav">

                    <li class="nav-item">

                        <a class="nav-link" href="#">
                            Home
                        </a>

                    </li>

                </ul>

            </div>

        </div>

    </nav>

---

# 16. Alerts

Alerts display important messages.

    <div class="alert alert-success">
        Order completed successfully.
    </div>

### Variants

    alert-primary
    alert-success
    alert-danger
    alert-warning
    alert-info

---

# 17. Badges

Badges display small labels and statuses.

    <span class="badge text-bg-success">
        Available
    </span>

### Examples

    <span class="badge text-bg-danger">
        Sale
    </span>

    <span class="badge text-bg-warning">
        New
    </span>

---

# 18. Breadcrumb

Breadcrumbs show the user's current location.

    <nav aria-label="breadcrumb">

        <ol class="breadcrumb">

            <li class="breadcrumb-item">
                <a href="#">
                    Home
                </a>
            </li>

            <li class="breadcrumb-item active">
                Products
            </li>

        </ol>

    </nav>

---

# 19. Pagination

Pagination divides content into multiple pages.

    <nav aria-label="Page navigation">

        <ul class="pagination">

            <li class="page-item">
                <a class="page-link" href="#">
                    Previous
                </a>
            </li>

            <li class="page-item active">
                <a class="page-link" href="#">
                    1
                </a>
            </li>

            <li class="page-item">
                <a class="page-link" href="#">
                    2
                </a>
            </li>

            <li class="page-item">
                <a class="page-link" href="#">
                    Next
                </a>
            </li>

        </ul>

    </nav>

---

# 20. Forms

Bootstrap provides styled form controls.

    <form>

        <label class="form-label">
            Email
        </label>

        <input
            type="email"
            class="form-control"
            placeholder="Enter email"
        >

        <button class="btn btn-primary mt-3">
            Submit
        </button>

    </form>

### Common Classes

    form-label
    form-control
    form-select
    form-check

---

# 21. Input Groups

Input groups combine inputs with text, icons, or buttons.

    <div class="input-group">

        <span class="input-group-text">
            @
        </span>

        <input
            type="text"
            class="form-control"
            placeholder="Username"
        >

    </div>

### Common Uses

- Search
- Username
- Email
- Coupon Code
- Price

---

# 22. Form Validation

Bootstrap supports validation styling.

### HTML

    <form class="needs-validation" novalidate>

        <input
            type="email"
            class="form-control"
            required
        >

        <div class="invalid-feedback">
            Please enter a valid email.
        </div>

    </form>

### JavaScript

    const forms =
        document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {

        form.addEventListener("submit", (event) => {

            if (!form.checkValidity()) {
                event.preventDefault();
            }

            form.classList.add("was-validated");

        });

    });

---

# 23. Tables

Bootstrap provides ready-made table styles.

    <table class="table">

        <thead>

            <tr>
                <th>Food</th>
                <th>Price</th>
            </tr>

        </thead>

        <tbody>

            <tr>
                <td>Burger</td>
                <td>$8</td>
            </tr>

        </tbody>

    </table>

### Common Classes

    table
    table-striped
    table-hover
    table-bordered
    table-dark

---

# 24. Responsive Tables

Wrap the table inside `.table-responsive`.

    <div class="table-responsive">

        <table class="table">
            ...
        </table>

    </div>

> Prevents wide tables from breaking the mobile layout.

---

# 25. Practical Project

## 🍔 QuickBite — Food Ordering Website

For Day 18, I built a practical food discovery and ordering interface using Bootstrap and custom CSS.

### Project Sections

    QuickBite
    │
    ├── Navbar
    ├── Hero
    ├── Food Search
    ├── Food Categories
    ├── Popular Restaurants
    ├── Popular Dishes
    ├── Special Offer
    ├── How It Works
    ├── Order Summary
    ├── Delivery Form
    └── Footer

### Bootstrap Concepts Applied

    Container
    Grid
    Responsive Columns
    Spacing
    Colors
    Display
    Flex
    Position
    Sizing
    Typography
    Buttons
    Cards
    Navbar
    Alerts
    Badges
    Forms
    Input Groups
    Validation
    Tables
    Responsive Tables

---

# 🧠 Quick Revision

| Concept          | Main Class         |
| ---------------- | ------------------ |
| Container        | `container`        |
| Full Width       | `container-fluid`  |
| Grid             | `row`, `col-*`     |
| Spacing          | `m-*`, `p-*`       |
| Display          | `d-*`              |
| Flex             | `d-flex`           |
| Position         | `position-*`       |
| Width            | `w-*`              |
| Height           | `h-*`              |
| Text             | `text-*`           |
| Buttons          | `btn btn-*`        |
| Cards            | `card`             |
| Navbar           | `navbar`           |
| Alerts           | `alert`            |
| Badges           | `badge`            |
| Forms            | `form-control`     |
| Input Group      | `input-group`      |
| Tables           | `table`            |
| Responsive Table | `table-responsive` |
| Pagination       | `pagination`       |

---

# ⚠️ Common Mistakes

### 01. Wrong Grid Structure

❌

    <div class="col-6">
        Content
    </div>

✅

    <div class="row">

        <div class="col-6">
            Content
        </div>

    </div>

### 02. Non-Responsive Table

❌

    <table class="table">

✅

    <div class="table-responsive">

        <table class="table">
            ...
        </table>

    </div>

### 03. Forgetting Bootstrap CSS

Always include the Bootstrap stylesheet before using Bootstrap classes.

### 04. Unnecessary Custom CSS

Use Bootstrap utilities first:

    d-flex
    mt-4
    p-3
    text-center
    fw-bold
    w-100

Then use custom CSS only when Bootstrap does not provide the required design.

---

# 📝 Mini Practice

Build a responsive Bootstrap interface containing:

- Navbar
- Responsive Grid
- Cards
- Buttons
- Alert
- Badge
- Form
- Input Group
- Responsive Table
- Pagination
- Footer

---

# 💡 Key Lesson

> Bootstrap is not about memorizing every class.

The important skill is understanding **which Bootstrap utility or component solves the current UI problem.**

---

# 🔒 CSS MODULE COMPLETE

## CSS Learning Journey

    Day 01 → CSS Fundamentals
    Day 02 → CSS Selectors
    Day 03 → Specificity & Colors
    Day 04 → CSS Backgrounds
    Day 05 → CSS Box Model
    Day 06 → Sizing & Text Properties
    Day 07 → Links & Units
    Day 08 → Fonts, Icons & Display
    Day 09 → Lists, Tables & Forms
    Day 10 → Attribute Selectors & Position
    Day 11 → Z-Index
    Day 12 → Flexbox
    Day 13 → Transform & Transition
    Day 14 → Animation
    Day 15 → CSS Variables & Grid Properties
    Day 16 → CSS Grid Dashboard
    Day 17 → Responsive Design
    Day 18 → Bootstrap

---

# 🏁 Final Status

| Module    | Status       |
| --------- | ------------ |
| HTML      | ✅ Completed |
| CSS       | ✅ Completed |
| Bootstrap | ✅ Completed |

> **CSS Foundation Locked 🔒**
