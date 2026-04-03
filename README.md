# FENNJOY FOREST COUNTER

A dynamic and responsive counter application built using React and Vite. This project focuses on React state management with `useState`, immersive visual design, animated forest effects, responsive layouts, and interactive UI updates.

## 🚀 Live Demo

(Insert your live link here, for example Vercel, Netlify, or GitHub Pages)

## 📌 Project Overview

FENNJOY FOREST COUNTER is a modern front-end React project that showcases:

- Dynamic counter updates using the `useState` hook
- A responsive forest-themed interface for mobile, tablet, and desktop
- Animated fireflies moving upward and downward in the background
- Glowing stars and shooting stars across the night sky
- Layered night forest scenery with trees, mist, and ground depth
- A circular counter with animated water-level filling
- Fish animation when the water reaches the maximum visual level

This project demonstrates strong fundamentals in React component structure, state updates, conditional rendering, responsive styling, CSS animation, and engaging UI presentation.

## 🛠 Technologies Used

- React: Component-based UI development
- Vite: Fast development server and project bundling
- JavaScript (ES6+): State handling and interaction logic
- CSS3: Custom styling, responsive layout, gradients, layering, and animations

## ✨ Features

### 🔹 Counter Functionality

- `useState` Counter Logic: The counter is managed using React state.
- Increment Button: Increases the counter value instantly.
- Decrement Button: Decreases the counter value without going below zero.
- Reset Button: Sets the counter value back to zero.
- Live UI Updates: The displayed count changes immediately on every click.

### 🔹 Water Level Animation

- Circular Water Tank: The counter circle behaves like a water container.
- Rising Water: Each increment increases the water level inside the round display.
- Falling Water: Each decrement lowers the water level smoothly.
- Animated Waves: The water surface includes moving wave effects.

### 🔹 Fish Interaction

- Max Level Behavior: When the water reaches the maximum visual level, a fish appears.
- Fish Motion: The fish moves up and down inside the round water area.

### 🔹 Forest Background Scene

- Night Sky Theme: The page uses a cool blue-gray night sky.
- Glowing Stars: Small glowing stars are visible in the sky.
- Shooting Stars: Animated glowing stars move from left to right.
- Fireflies: Multiple fireflies float upward and downward with glowing motion.
- Layered Forest: The bottom area includes mist, ground, and layered forest silhouettes.
- Pine Trees with Wind Motion: Decorative pine trees sway gently like wind is flowing through them.

### 🔹 Responsive UI Design

- Mobile-Friendly Layout: Designed to work smoothly on small screens
- Tablet Support: Spacing and visual elements scale well on tablet view
- Desktop Layout: The forest scene expands nicely on larger screens
- Flexible Buttons: Action buttons wrap and stack properly on narrow screens

## 📱 Responsive Design

- Mobile View: The card adjusts to smaller widths and buttons stack cleanly
- Tablet View: The layout remains centered with balanced spacing and scalable visuals
- PC View: The full forest background, sky animation, and layered depth remain visible

## 🧠 Development Process

- State Management: Used React `useState` to manage the counter value cleanly
- UI Feedback: Added conditional rendering for the minimum limit message
- Visual Design: Built a forest-at-night concept using gradients, layering, and glow effects
- Animation System: Created motion for fireflies, stars, shooting stars, trees, waves, and fish using CSS keyframes
- Responsive Styling: Tuned the layout for mobile, tablet, and desktop screen sizes

## 📂 Project Structure

```text
F001/
│
├── index.html               # Main HTML entry
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment configuration
├── README.md                # Project documentation
└── src/
    ├── App.jsx              # Main app logic, counter behavior, and animated scene markup
    ├── main.jsx             # React root entry point
    └── styles.css           # Global styles, animations, responsive layout, and forest theme
```

## 📚 What I Learned

### React State Management

Improved understanding of how `useState` controls dynamic UI updates through increment, decrement, and reset actions.

### Conditional Rendering

Learned how to show UI feedback such as the minimum limit message and fish animation only when certain conditions are met.

### CSS Animation

Gained practical experience building animated backgrounds, glowing effects, wave motion, and object movement using keyframes.

### Responsive Styling

Built a more polished and adaptable layout that works consistently across mobile, tablet, and desktop screens.

### Visual Layering

Strengthened front-end design skills by combining gradients, depth, shadows, overlays, and animated decorative elements into one interactive page.

## 🚀 How It Can Be Improved

- Add Sound Effects: Play water or nature sounds on button clicks
- Add Level Labels: Show low, medium, and full water states visually
- Add More Fish: Introduce multiple fish when the tank is full
- Add Night/Day Toggle: Let users switch between forest day and forest night themes
- Save Counter State: Persist the counter using localStorage
- Add Custom Max Limit: Allow users to set the maximum water level threshold

## ▶ Running the Project

To run locally:

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🌐 Deployment

This project is ready to deploy on Vercel.

To deploy:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel will automatically detect the Vite setup.
4. Deploy and use the generated live URL.

## ⚠ Notes

- The visual water level is designed around a maximum display level of `10`.
- If the counter goes above `10`, the water remains visually full.
- The fish appears only when the circular water level reaches the maximum visual level.
- For best results, preview responsiveness in browser developer tools for mobile, tablet, and desktop.
