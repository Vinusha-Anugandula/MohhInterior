# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

frontend/
├─ listing-subdomain/
│  ├─ .env/
│  ├─ public/
│  │  └─ vite.svg
│  ├─ src/
│  │  ├─ assets/
│  │  │  └─ react.svg
│  │  ├─ components/
│  │  ├─ pages/
│  │  │  └─ Listing/
│  │  ├─ services/
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ .gitignore
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  └─ vite.config.js
├─ main-site/
│  ├─ .env/
│  ├─ public/
│  │  ├─ images/
│  │  │  ├─ Hero-section_image1.webp
│  │  │  ├─ Hero-section_image2.webp
│  │  │  ├─ Hero-section_image3.webp
│  │  │  └─ Mohh logo.png
│  │  └─ vite.svg
│  ├─ src/
│  │  ├─ assets/
│  │  │  └─ react.svg
│  │  ├─ components/
│  │  │  ├─ Footer/
│  │  │  │  ├─ Footer.css
│  │  │  │  └─ Footer.jsx
│  │  │  ├─ Header/
│  │  │  │  ├─ Header.css
│  │  │  │  └─ Header.jsx
│  │  │  └─ Hero-section/
│  │  │     ├─ HeroSection.css
│  │  │     └─ HeroSection.jsx
│  │  ├─ context/
│  │  ├─ hooks/
│  │  ├─ pages/
│  │  │  ├─ Blogs/
│  │  │  ├─ Design/
│  │  │  └─ Home/
│  │  │     ├─ Home.css
│  │  │     └─ Home.jsx
│  │  ├─ services/
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ .gitignore
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  └─ vite.config.js
├─ shared/
│  └─ src/
│     ├─ constants/
│     ├─ ui-components/
│     └─ utils/
├─ shop-subdomain/
│  ├─ .env/
│  ├─ public/
│  │  └─ vite.svg
│  ├─ src/
│  │  ├─ assets/
│  │  │  └─ react.svg
│  │  ├─ components/
│  │  ├─ pages/
│  │  │  └─ Shop/
│  │  ├─ services/
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ .gitignore
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  └─ vite.config.js
├─ package-lock.json
└─ package.json
