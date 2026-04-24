# 🏆 Professional Portfolio: Jair Lastre - Adidas Originals Style

This project represents the evolution of my personal portfolio, where I have applied advanced concepts of **responsive design, code optimization, and dynamic interactivity**. The aesthetic is inspired by the Adidas brand, using a minimalist color palette and sporty typography.

---

## 🛠️ Technical Specifications (Project Achievements)

### 1. Responsive Design Architecture (Task 2 & 3)
The site has been rebuilt under the *Mobile First* philosophy, ensuring it is fully functional on any device:
*   **Mobile (< 600px):** The navigation menu transforms into a vertical column and projects are stacked in a single row to improve readability.
*   **Tablets (600px - 1024px):** Implementation of 2-column grids for projects and 3 columns for the pet gallery.
*   **Desktop (> 1024px):** Advanced layout using `CSS Grid` with specific areas to highlight the main project.
*   **Scalability:** Pixels (px) were replaced by relative units (`rem` and `%`), allowing the design to "breathe" and adapt to the user's font size.

### 2. CSS Engineering and Optimization (Task 4)
Industry standards were applied to achieve clean, high-performance code:
*   **:root Variables:** Centralization of the visual identity (Adidas Blue #0087D1, Black, and White), allowing global changes in seconds.
*   **DRY (Don't Repeat Yourself):** Grouping of common rules for cards (`.card-adidas`) and buttons, reducing the weight of the original file.
*   **Efficient Selectors:** Removal of long and complex selectors, replacing them with simple classes that improve browser rendering speed.
*   **Minification:** Delivery of a `style.min.css` file where spaces and comments were removed to maximize loading speed.

### 3. JavaScript Interactivity (Task 5)
Use of Vanilla JS to improve the user experience (UX):
*   **DOM Management:** The "Show more" button performs three simultaneous actions: it displays hidden content, changes its own text to "Show less," and updates the message of the main paragraph in real-time.
*   **Global Events:** Implementation of a dynamic welcome message using `window.onload`.

---

## 📂 Repository Structure
```text
├── index.html                 # Main home page and portfolio
├── script.js                  # Interactivity logic and events
├── README.md                  # Project documentation (this page)
└── src/
    ├── css/
    │   ├── styles.css         # Source style code (commented)
    │   └── style.min.css      # Optimized version for production
    ├── views/
    │   └── mascotas.html      # Secondary gallery section
    └── img/                   # Visual resources and assets
```

---

## ✒️ Author
*   **Jair Lastre** - *Development and Design* - [YourGitHubUser](https://github.com)

---
© 2026 Formative Project - Jair Lastre. All rights reserved.


