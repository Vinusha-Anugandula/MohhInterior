import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Living Spaces for Luxurious Experience</h1>
        <p>Professional Blender 3D Models, Archviz Made Easy!</p>
        <div className="hero-buttons">
          <button className="primary-btn">Install Blender Addon</button>
          <button className="secondary-btn">Now Only $17/Month</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
