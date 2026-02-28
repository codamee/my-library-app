# MyLibrary App

A dynamic book-tracking dashboard built with Object-Oriented JavaScript. This project focuses on **Data Structures**, **ES6 Classes**, and advanced **DOM Manipulation** using data-attributes.

<p>
  <img src="./screenshot.png" alt="Library App Preview" width="500">
</p>

## 🚀 Live Demo
[Explore MyLibrary Here](https://codamee.github.io/MyLibrary/)

## 🎨 Key Features
* **Object-Oriented Logic:** Built using ES6 Classes to manage book data.
* **Smart Identification:** Implemented `crypto.randomUUID()` to generate stable, unique identifiers for every book, preventing errors during removal or status updates.
* **Interactive Book Cards:** Users can toggle "Read" status (Red/Green visual feedback) and remove books instantly through event-driven UI updates.
* **Streamlined Form Handling:** Leverages the `FormData` API and `Object.fromEntries` to process user input cleanly without manual selector chains.

## 🛠️ Technical Skills
* **Class & Prototypes:** Utilized a `Book` class to encapsulate core data and a prototype method for `toggleReadStatus` logic.
* **Event Delegation:** Optimized performance by using a single event listener on the main container to handle clicks for all dynamically generated cards.
* **Immutability Patterns:** Managed the library state using modern array methods like `.filter()` for deletions and `.forEach()` for rendering.
* **CSS Grid Layout:** Created a responsive card-based display with an auto-scrolling container for a seamless user experience.

---
*Built as part of The Odin Project JavaScript Path.*
