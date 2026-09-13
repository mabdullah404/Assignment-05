# DevStack

DevStack is a modern technology explorer and stack builder for developers who want to discover tools, frameworks, and platforms quickly and compare them side by side before choosing what to learn or use.

## About the Project

DevStack helps developers explore popular technologies and build a personalized technology stack. Users can browse technology cards, view categories and ratings, and add selected technologies into their stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- JSON data files
- HTML
- CSS

## Features

1. Browse technology cards with technology name, description, category, difficulty, and rating.
2. Add or remove technologies from your personal stack sidebar.
3. Responsive navbar, footer, and card UI for desktop and mobile layouts.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React to make UI components easier to read and write.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data stored inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook creates a variable that can store changing data inside a component. In this project, I used it in the navigation component to open and close the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs after a component is rendered. I needed it to load the technology data from the `technology.json` file after the page starts, so the UI can show the data correctly.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A key helps React identify each list item correctly. It allows React to update the UI faster and avoid rendering mistakes when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it in the stack sidebar to show the empty-stack message when the selected stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child sends data back to the parent by calling a function passed through props, such as an `onAdd` function for adding technologies to the stack.
