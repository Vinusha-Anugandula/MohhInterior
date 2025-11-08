MOHH- INTERIORS 
**Mohh Interior Project** is a scalable multi-domain frontend ecosystem that powers:
 **Main Site** – the brand and inspiration hub  
 **Shop Subdomain** – the commerce interface  
 **Listing Subdomain** – curated design listings  

Each subdomain operates independently while sharing UI components, utilities, and constants from a central `shared/` library.  
This design ensures **speed, consistency, and maintainability** across all user experiences.

File Tree Path

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

Tech Stack :
Category                         Technology used
 Frontend Framework :            React 19
 Build Tool         :             Vite
 Language           :            JavaScript (ES Modules)
 Package Manager    :            npm
 Icons              :            React Icons
 Linting            :             ESLint  
 Version Control    :            Git + GitHub 
 Deployment         :            Vercel


Key Highlights
 **Independent Builds**: Each subdomain is a standalone Vite app.  
**Shared Codebase**: Common assets live in `frontend/shared/`.  
 **Fast Iteration**: Vite ensures lightning-fast development cycles.

 Setup:

  Prerequisites:
    Node.js v18+  
    npm  
    Git 

Installation:
Clone the repository:
```bash
git clone <your-repo-url>
cd frontend

Install dependencies:
npm install

Create React + Vite Setup (if needed):
npm create vite@latest
# Choose: React → JavaScript
# Confirm "Yes" for prompts

Add icons:
npm install react-icons

Run the App:
Choose your subdomain directory
cd main-site
npm run dev




