1. Name of your project
   =>Technology Stack Builder

2. A little description
   => Technology Stack Builder is a React-based web application that allows users to explore different technologies and build their own technology stack by selecting the technologies they like.

3. Technology that you use
   => React
   TypeScript
   Tailwind CSS
   React Icons
   React Toastify
   Vite

4. features about your project
   => Explore Technologies — Browse different technologies and their details.
   Build Your Stack — Add technologies to your personal stack.
   Manage Your Stack — Remove individual technologies or clear the entire stack.

// Answer the question:-

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from parent to child component.
**State** is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in a React component.
I used it to manage the **selected technologies/stack** in this project.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in React, such as fetching data.
I used it to load the JSON data when the component was rendered.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and efficiently update the UI when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

Example:
{selectedTechnologies.length === 0
? "Your stack is empty"
: "Your Stack"}

### 7. How do you pass data from a parent component to a child component?

We pass data from parent to child using **props**.

Example:
<YourStack selectedTechnologies={selectedTechnologies} />
