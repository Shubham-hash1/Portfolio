# Portfolio Website 🚀

Welcome to the official repository of **Shubham's Developer Portfolio**. This website is a premium, high-performance, and responsive portfolio designed to showcase software development skills, key achievements, academic background, and selected projects. 

Live Link: [Visit Portfolio](https://smart-india-nutrition.vercel.app) *(or configure your deployment link here)*

---

## 🎨 Design & User Experience

The portfolio is designed with a modern, clean, and minimalist aesthetic, focusing on visual hierarchy and premium details:
- **Typography:** Uses the clean, geometric **Inter** font from Google Fonts.
- **Color Palette:** Curated neutral-toned color palette utilizing absolute whites, deep off-blacks (`#171717`), and zinc/neutral gray accents for a sleek, editorial feel.
- **Animations:** Powered by `framer-motion` for smooth, contextual fade-ins, spring animations, hover effects, and slide-up layout transitions.
- **Custom Scrollbar:** Enhanced webkit-scrollbar that fits seamlessly with the dark/light minimalist layout.

---

## 🛠️ Technology Stack

The project is built using a modern frontend stack designed for speed, developer ergonomics, and fluid animations:

### Core Frameworks & Libraries
- **React 19**: Powered by functional components, modern Hooks, and clean component architecture.
- **Vite 8**: Serving as the ultra-fast development server and optimized production builder.
- **Tailwind CSS v3**: Utilized for utility-first responsive styling and customized theme tokens.

### Motion & Interactions
- **Framer Motion 12**: Delivers smooth scroll-triggered entry transitions, responsive mobile menus, and micro-interactions.
- **React Scroll**: Powers high-precision smooth section navigation across the single-page layout.

### Icons & Utilities
- **Lucide React**: Provides beautiful, lightweight SVG icons (Zap, Award, Mail, MapPin, ExternalLink, Menu, X, etc.).
- **clsx & tailwind-merge**: Ensures clean and conflict-free dynamic merging of Tailwind utility classes.

---

## 🌟 Key Features & Components

The application is structured into decoupled, reusable React components:

1. **Header & Navigation (`Navbar.jsx`)**
   - Floating header with glassmorphism backdrop blur on scroll.
   - Smooth-scrolling page links.
   - Fully animated mobile navigation drawer.

2. **Hero Section (`Hero.jsx`)**
   - High-impact layout introducing **Shubham**.
   - Profile image with abstract background styling.
   - Animated entrance hooks to immediately engage visitors.

3. **About Me (`About.jsx`)**
   - Overview of career interests, hobbies, and engineering philosophy.
   - Tech Stack pills dynamically rendered from config arrays.

4. **Timeline Education (`Education.jsx`)**
   - Chronological vertical timeline mapping out degrees, institutions, and core focuses.
   - Adaptive mobile layout with interactive timeline indicators.

5. **Achievements Grid (`Achievements.jsx`)**
   - Award and accomplishment highlights (e.g., National Entrepreneurship Challenge, IBM Panel, IBM Poster Making).
   - Modern cards featuring hover scaling, accent colors, and custom iconography.

6. **Selected Projects (`Projects.jsx`)**
   - High-quality grid displaying featured work.
   - Features active visual card containers, source code references, and live preview actions.

7. **FormSubmit Contact Form (`Contact.jsx`)**
   - Minimalist form with clean styling and transitions.
   - Connected directly to `shubnegi1004@gmail.com` using FormSubmit API (requires zero backend server code).
   - Anti-spam Google reCAPTCHA bypass configuration included.

8. **Footer (`Footer.jsx`)**
   - Simple, editorial footer showing year, copyright, and direct links to social profiles.

---

## 📂 Project Architecture

```
Portfolio/
├── public/                 # Static assets (favicons, profile picture, etc.)
│   ├── favicon.svg
│   ├── icons.svg
│   └── profile.png
├── src/
│   ├── assets/             # Default vectors and React icons
│   ├── components/         # Reusable React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Section.jsx     # Base container wrapper with scroll animation hooks
│   ├── images/             # Local optimized project preview screenshots
│   │   ├── NutriSmart.png
│   │   ├── manager.png
│   │   └── resume.png
│   ├── App.css             # Main styling configurations
│   ├── App.jsx             # Root layout shell mapping page components
│   ├── index.css           # Global custom classes, Tailwind imports, scrollbar settings
│   └── main.jsx            # React client-side entry point
├── tailwind.config.js      # Custom theme extension (Inter font, colors)
├── postcss.config.js       # CSS processing optimization
├── eslint.config.js        # Strict rules for code quality
├── vite.config.js          # Fast React bundler setups
└── package.json            # Scripts and metadata
```

---

## 💻 Highlighted Projects

The portfolio showcases the following key systems:

### 1. Smart India Nutrition (NutriSmart)
- **Overview:** A localized web application that recommends nutritious foods, details regional food values, adapts to user-selected health conditions, and hosts an integrated wellness blog.
- **Tech Stack:** React, Tailwind, Node.js, Express.js, PostgreSQL, JWT Authentication.
- **Source:** [GitHub Code](https://github.com/Shubham-hash1/Smart-India-Nutrition) | [Live Link](https://smart-india-nutrition.vercel.app)

### 2. Live Resume Builder
- **Overview:** A dynamic single-page web app for drafting professional resumes with a real-time reactive preview, customizable sections, built-in light/dark visual templates, and quick PDF export.
- **Tech Stack:** React.js, Local State, CSS.
- **Source:** [GitHub Code](https://github.com/Shubham-hash1/Resume-Builder) | [Live Link](https://resume-builder-two-tan.vercel.app)

### 3. Employee Management System
- **Overview:** A collaborative workflow platform to assign tasks, monitor team responsibilities, and manage employee workloads.
- **Tech Stack:** React, Tailwind CSS.
- **Source:** [GitHub Code](https://github.com/Shubham-hash1/Employee-Management-System)

---

## ⚡ Getting Started Locally

Follow these instructions to set up the project on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shubham-hash1/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server (with HMR):
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173`.

### Quality & Production Build
- **Linting:** To run static code analysis checks:
  ```bash
  npm run lint
  ```
- **Building:** To compile code into optimized production assets (`/dist`):
  ```bash
  npm run build
  ```
- **Previewing:** To test the production build locally:
  ```bash
  npm run preview
  ```

---

## ✉️ Contact
Created by **Shubham** - feel free to reach out via [shubnegi1004@gmail.com](mailto:shubnegi1004@gmail.com)!
