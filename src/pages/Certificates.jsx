import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ All Certificates in one array
const CERTS = [
  {
    title: "Hackathon Winner - 2nd Place 🏆",
    org: "Hackathon Competition",
    date: "2025",
    img: "/gallery/hackathonwin(2nd).jpeg",
    link: "/gallery/hackathonwin(2nd).jpeg",
  },
  {
    title: " Top 50 teams - Selected for SIH Among 450 Teams 🚀",
    org: "Hackathon - Smart India Hackathon",
    date: "2025",
    img: "/certs/SihtopTeams.jpeg",
    link: "/certs/SihtopTeams.jpeg",
  },
  {
    title: "HackerRank JavaScript (Basic)",
    org: "HackerRank",
    date: "2025",
    img: "/gallery/javascript.jpeg",
    link: "/gallery/javascript.jpeg",
  },
  {
    title: "HackerRank Java (Problem Solving)",
    org: "HackerRank",
    date: "2025",
    img: "/gallery/problemsolving.jpeg",
    link: "/gallery/problemsolving.jpeg",
  },
  {
    title: "Piezoelectric Nanogenerator Participation",
    org: "NSUT (Netaji Subhas University of Technology)",
    date: "2025",
    img: "/gallery/NSUt.png",
    link: "/gallery/NSUt.png",
  },
  {
    title: "Code Challenge Hackathon",
    org: "Hackathon Event",
    date: "2025",
    img: "/gallery/Codeforchalengehackthon.jpeg",
    link: "/gallery/Codeforchalengehackthon.jpeg",
  },
  // {
  //   title: "Hackathon Achievement",
  //   org: "Hackathon Event",
  //   date: "2025",
  //   img: "/gallery/hackon.jpeg",
  //   link: "/gallery/hackon.jpeg",
  // },
  {
    title: "Hackathon Recognition",
    org: "Tech Competition",
    date: "2025",
    img: "/gallery/Hackathon3.jpeg",
    link: "/gallery/Hackathon3.jpeg",
  },
  {
    title: "Hackathon Recognition ",
    org: "Tech Competition",
    date: "2025",
    img: "/gallery/Hackathon4.jpeg",
    link: "/gallery/Hackathon4.jpeg",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        className="card"
        style={{ background: "#111", borderRadius: 12, padding: 24 }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>
          Certificates 🏅
        </h2>
        <p className="lead" style={{ color: "#aaa" }}>
          My certifications and achievements
        </p>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {CERTS.map((c, idx) => (
            <motion.div
              key={c.title}
              className="cert card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
              }}
              style={{
                background: "#1a1a1a",
                borderRadius: 12,
                padding: 16,
                color: "#fff",
              }}
            >
              <img
                src={c.img}
                alt={c.title}
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 10,
                  objectFit: "cover",
                  marginBottom: 12,
                }}
              />
              <strong style={{ fontSize: 16 }}>{c.title}</strong>
              <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                {c.org} • {c.date}
              </div>

              <div style={{ marginTop: 12 }}>
                <button
                  className="btn"
                  onClick={() => setSelectedCert(c)}
                  style={{
                    background: "#007bff",
                    border: "none",
                    color: "white",
                    borderRadius: 6,
                    padding: "6px 14px",
                    cursor: "pointer",
                  }}
                >
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
