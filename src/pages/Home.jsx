import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

export default function Home() {
  // Image paths for public folder assets
  const photo = "/photo.jpeg";
  const githubLogo = "/github.png";
  const linkedinLogo = "/linkedin.png";
  const gmailLogo = "/gmail.png";
  const whatsappLogo = "/whatsapp.png";
  const instagramLogo = "/insta.png";

  const professions = [
    "Full Stack Developer",
    "Backend Engineer",
    "AI/LLM Integration",
    "Real-Time Systems",
    "Problem Solver",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/deepak-kumar20",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/deepakkumar-js/",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:deepakdagur0007@gmail.com",
    },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/+916397148409",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/deepak_dagur20/",
    },
  ];

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Deepak Kumar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I'm{" "}
            <motion.span
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="home-name"
            >
              Deepak Kumar
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Full Stack Developer | Backend Engineer | AI Enthusiast
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: "📍 Location", value: "Ghaziabad, India" },
              { label: "💼 Expertise", value: "Full Stack, AI/LLM, Real-Time" },
              { label: "📧 Contact", value: "deepakdagur0007@gmail.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Freelance Banner */}
          {/* Mailblimp Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(0,180,255,0.1), rgba(0,255,200,0.1))",
              borderRadius: "12px",
              border: "1px solid rgba(0,180,255,0.3)",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                color: "var(--accent)",
                fontSize: "1.3rem",
                marginBottom: "0.8rem",
                fontWeight: "600",
              }}
            >
              🚀 Co-Founder at Mailblimp.com
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginBottom: "0.5rem"
              }}
            >
              <strong>Mailblimp.com</strong> is a software building startup where we build, scale, and sell high-quality websites and applications for clients.
            </p>
            <ul style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", paddingLeft: "1.2rem", margin: 0 }}>
              <li>Offering end-to-end full stack development tailored to business needs.</li>
              <li>Providing ongoing <strong>maintenance support</strong> and technical scaling.</li>
              <li>Delivering fast, secure, and beautiful digital products at genuine costs.</li>
            </ul>
          </motion.div>

          {/* Current Roles Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(255,100,100,0.08), rgba(255,150,50,0.08))",
              borderRadius: "12px",
              border: "1px solid rgba(255,150,50,0.2)",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                color: "#ff9c3a",
                fontSize: "1.2rem",
                marginBottom: "1rem",
                fontWeight: "600",
              }}
            >
              💼 Experience Highlights
            </h3>
            <div style={{ marginBottom: "1.2rem" }}>
              <h4 style={{ color: "#ff9c3a", fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Full Stack Developer <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>| ACT Business Solutions</span>
              </h4>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                Currently working to architect and develop enterprise modules, including Risk Management and HRMS. Building scalable microservices, integrating payment gateways, and optimizing API response times via Redis caching.
              </p>
            </div>
            
            <div>
              <h4 style={{ color: "#ff9c3a", fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Technical Coordinator <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>| ABES E-Cell</span>
              </h4>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                Developed dynamic platform sections and provided real-time technical support for major college hackathons and events, maintaining 99%+ platform uptime under strict deadlines.
              </p>
            </div>
          </motion.div>

          {/* LinkedIn Glance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              marginTop: "2rem",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            <img 
              src="/certs/pic.png" 
              alt="LinkedIn Snapshot" 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
