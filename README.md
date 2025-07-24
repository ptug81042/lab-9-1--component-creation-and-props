# 🧱 Reusable Component Library – Lab 9.1

A small component library built with React and TypeScript, showcasing how to build flexible, reusable UI components with props, composition, and event handling.

---

## Components Overview

### UserProfileCard

Displays user details such as name, email, and role. It supports optional visibility toggles for email and role, and includes an Edit button that triggers a callback with the user’s ID.

---

### ProductDisplay

Renders a product’s name, price, description, and stock status. It includes an Add to Cart button that is disabled when the product is out of stock. Supports conditional display of description and stock info.

---

### AlertBox

Shows styled alert messages for different types like info, success, and error. Accepts an optional close handler and can display additional child content.

---

## Component Composition

The app demonstrates how to:

- Pass props between components (like user or product objects)
- Nest components inside each other (e.g., children inside `AlertBox`)
- Communicate from child to parent using callback functions (e.g., onEdit, onAddToCart)
- Dynamically render UI based on prop values (e.g., conditional rendering)

---

## Design Reflections

- **Handling Optional Props**: Used default values and conditional logic to safely render optional content.
- **Interface Design**: Focused on clarity, reusability, and real-world flexibility when defining TypeScript interfaces for props.
- **Type Safety**: Enforced strict typing across components, ensuring props and handlers match expected shapes.
- **Component Composition**: Carefully structured to keep components isolated but interoperable, using props and children as primary tools.

---

## Testing

- Used Jest and React Testing Library
- Validated that elements render properly and react to user interactions
- Ensured accessibility by querying with roles and labels

---

## Tech Stack

- React (with functional components)
- TypeScript
- Vite (for fast development)
- Jest & React Testing Library (for unit testing)

---

**Made by Parsa Emran**