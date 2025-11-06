import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/Mohh logo.png" alt="MOHH Interiors Logo" />
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Listing</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </nav>

        <div className="cta-btn">
          <button>Get in Touch</button>
        </div>
      </div>
    </header>
  );
}

export default Header;


// for adding header scrolling effect to change to black color when scrolling
// import React, { useEffect } from "react";
// import "./Header.css";

// function Header() {
//   // 👇 Add scroll effect logic here
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector(".header");
//       if (window.scrollY > 50) {
//         header.classList.add("scrolled");
//       } else {
//         header.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 👇 Regular header JSX
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <img src="/images/Mohh logo.png" alt="MOHH Interiors Logo" />
//         </div>

//         <nav className="navbar">
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Design</a></li>
//             <li><a href="#">Listing</a></li>
//             <li><a href="#">Shop</a></li>
//             <li><a href="#">Blogs</a></li>
//           </ul>
//         </nav>

//         <div className="cta-btn">
//           <button>Get in Touch</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

