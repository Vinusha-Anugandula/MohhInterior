**MOHH INTERIORS **

A modern, multi-domain web application for **interior design and lifestyle inspiration**, built with **React + Vite**.  
The project powers three subdomains — **Main Site**, **Listing**, and **Shop** — all sharing common UI components and utilities.

** Overview**

**Mohh Interior Project** delivers an elegant digital experience for discovering, showcasing, and shopping curated interior design inspirations.  
It’s architected as a **modular multi-app frontend** setup to allow scalability, reusability, and seamless domain-specific deployments.

**Key Features**

 Multi-domain architecture (Main, Listing, Shop)
 Powered by React 19 + Vite for ultra-fast builds
 Shared components, constants, and utils for code consistency
 Modular design system using reusable UI components
 Clean routing and maintainable folder

**File/Folder Structure**

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
│  ├─ .vite/
│  │  └─ deps/
│  │     ├─ _metadata.json
│  │     └─ package.json
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


** Tech Stack**

 Category                         Technology 

 Frontend Framework   :            React 19
 Build Tool           :           Vite
 Package Manager      :           npm 
 Language             :            JavaScript (ES Modules) 
 Linting              :            ESLint 
 Icons                :            react-icons 
 Version Control      :            Git & GitHub 

 **Setup Instructions**
 
1️⃣ Prerequisites
    Install **Node.js** (v18+ recommended)
    Git installed and configured

 2️⃣ Clone the Repository
```bash
git clone https://github.com/Vinusha-Anugandula/MohhInterior.git
cd frontend

3️⃣ Install Dependencies(IMP)
npm install 

4️⃣ Setup Project
Create project using React + Vite (JavaScript variant):
npm create vite@latest
# Choose:
# - Framework: React
# - Variant: JavaScript
# Answer "Yes" to setup prompts

**nstall React Icons (Imp):**
npm install react-icons

5️⃣ Run the Application 
First make sure you are on main-site
if not then cd main-site and next run below command
npm run dev

Access it locally at:
http://localhost:5173





