import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            Turn Ordinary Items Into <span className="highlight">Memorable Brands</span>
          </h1>
          <p className="hero-description">
          At Think Kre8tiv Media, we specialize in creative branding, general printing, souvenirs, and digitized embroidery. With cutting-edge equipment and a passion for excellence, we deliver high-quality, fast-turnaround solutions that bring your brand to life.

Trusted by top brands like Zenith Bank, Jibu Water, USAID, and more, we're your go-to partner for impactful and reliable print and branding services.

We don't just print—we Kre8t!
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/23324468139"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us
            </a>
            <a href="/services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </section>
      <section className="features-section">
  <div className="features-container">
    <div className="feature-box">
      <h3 className="feature-title">Custom Design</h3>
      <p className="feature-text">
        Professional design services to create unique branded souvenirs that represent your brand identity.
      </p>
    </div>
    <div className="feature-box">
      <h3 className="feature-title">Premium Production</h3>
      <p className="feature-text">
        High-quality production ensures your branded items are durable and impressive.
      </p>
    </div>
    
  </div>
</section>

    </div>
  );
};

export default Home;
