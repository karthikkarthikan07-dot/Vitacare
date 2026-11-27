
import { useState } from "react";
import "./Home.css";

const services = [
  {
    icon: "🩺",
    title: "Find Doctors",
    description: "Connect with experienced medical professionals.",
    link: "Explore Doctors",
  },
  {
    icon: "🏥",
    title: "Hospitals",
    description: "Discover trusted hospitals and healthcare centers.",
    link: "Explore Hospitals",
  },
  {
    icon: "💊",
    title: "Pharmacy",
    description: "Explore medicines and healthcare essentials.",
    link: "Explore Pharmacy",
  },
  {
    icon: "🧬",
    title: "Lab Tests",
    description: "Access diagnostic and laboratory services.",
    link: "Explore Tests",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="vita-home">

      {/* Background decoration */}
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <div className="ambient ambient-three"></div>

      {/* NAVBAR */}
      <nav className="vita-navbar">

        <a href="/" className="vita-logo">
          <span className="logo-icon">✚</span>
          <span>Vita<span className="logo-highlight">Care</span></span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a href="#services" className="nav-button">
          Get Started <span>↗</span>
        </a>

      </nav>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            YOUR HEALTH, OUR PRIORITY
          </div>

          <h1>
            Healthcare That
            <br />
            Feels <span className="gradient-text">Personal.</span>
            <br />
            Care That Matters.
          </h1>

          <p className="hero-description">
            Experience a smarter approach to healthcare.
            Discover trusted doctors, explore medical services
            and take control of your wellness journey with VitaCare.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-button">
              Explore Healthcare <span>→</span>
            </a>

            <a href="#about" className="secondary-button">
              Discover VitaCare
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>👨🏻‍⚕️</span>
              <span>👩🏻‍⚕️</span>
              <span>🧑🏻‍⚕️</span>
            </div>

            <div>
              <strong>Care begins with trust.</strong>
              <p>Healthcare made more accessible.</p>
            </div>
          </div>

        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="medical-symbol">
            <div className="medical-cross">✚</div>
            <div className="symbol-caption">VITACARE</div>
            <div className="symbol-subcaption">
              YOUR HEALTH PARTNER
            </div>
          </div>

          <div className="floating-card doctor-card">
            <div className="floating-icon">🩺</div>
            <div>
              <strong>Expert Care</strong>
              <p>Trusted professionals</p>
            </div>
            <span className="status-dot"></span>
          </div>

          <div className="floating-card wellness-card">
            <div className="wellness-icon">♡</div>
            <div>
              <strong>Your Wellness</strong>
              <p>Matters every day</p>
            </div>
          </div>

          <div className="visual-label">
            <span>✦</span> A BETTER WAY TO HEALTH
          </div>

        </div>

      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div>
          <strong>01</strong>
          <span>Personalized Care</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Trusted Professionals</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Smarter Healthcare</span>
        </div>
        <div>
          <strong>04</strong>
          <span>Better Experience</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">

        <div className="section-heading">
          <span className="section-eyebrow">DISCOVER VITACARE</span>

          <h2>
            Everything You Need.
            <br />
            <span className="gradient-text">One Healthcare Home.</span>
          </h2>

          <p>
            Explore essential healthcare services through one
            connected and convenient platform.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                {service.link} <span>↗</span>
              </a>
            </article>
          ))}
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-decoration">✚</div>

        <div>
          <span className="section-eyebrow">THE VITACARE DIFFERENCE</span>

          <h2>
            More Than Healthcare.
            <br />
            A Commitment to <span className="gradient-text">You.</span>
          </h2>
        </div>

        <p>
          VitaCare brings healthcare services together in one
          accessible digital experience, helping people discover
          care options with greater confidence and convenience.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="vita-footer" id="contact">

        <a href="/" className="vita-logo">
          <span className="logo-icon">✚</span>
          <span>Vita<span className="logo-highlight">Care</span></span>
        </a>

        <p>Smarter Healthcare. Better Living.</p>

        <span>© 2026 VitaCare. All rights reserved.</span>

      </footer>

    </main>
  );
}

export default Home;
