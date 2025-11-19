import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 DEEPAK KUMAR
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              B.Tech in Computer Science | ABES Engineering College, Ghaziabad
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Ghaziabad, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ deepakdagur0007@gmail.com | 📞 +91 6397148409
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Computer Science student with hands-on experience in MERN Stack
              development. Skilled in building scalable web applications using
              React, Node.js, Express, and MongoDB. Passionate about creating
              efficient backend systems and solving real-world problems through
              code. Currently interning as a MERN Stack Developer at Ghaziabad
              E-Cell Organization.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li style={{ marginBottom: 20 }}>
              <strong>Bachelor of Technology - BTech, Computer Science</strong>{" "}
              <br />
              <span style={{ color: "#00b4ff" }}>
                ABES Engineering College
              </span>{" "}
              <br />
              <span style={{ color: "#aaa", fontSize: 14 }}>
                Sep 2023 – Sep 2027
              </span>{" "}
              <br />
              <span style={{ color: "#bbb", fontSize: 14 }}>
                CGPA: 8.23/10 (till 4th sem)
              </span>{" "}
              <br />
              <span
                style={{ color: "#999", fontSize: 13, fontStyle: "italic" }}
              >
                Skills: Data Structures and Algorithms, Java, Problem Solving,
                Web Development
              </span>
            </li>

            <li style={{ marginBottom: 20 }}>
              <strong>Intermediate (Class 12)</strong> <br />
              <span style={{ color: "#00b4ff" }}>
                Hem Vidya Niketan, Khair (Aligarh)
              </span>{" "}
              <br />
              <span style={{ color: "#aaa", fontSize: 14 }}>
                May 2009 – Jun 2023
              </span>{" "}
              <br />
              <span style={{ color: "#bbb", fontSize: 14 }}>
                Percentage: 89.40% | Grade: A
              </span>{" "}
              <br />
              <span
                style={{ color: "#999", fontSize: 13, fontStyle: "italic" }}
              >
                Activities: Valley Ball Team, Chess Player
              </span>
            </li>

            <li>
              <strong>High School (Class 10)</strong> <br />
              <span style={{ color: "#00b4ff" }}>
                Hem Vidya Niketan, Khair (Aligarh)
              </span>{" "}
              <br />
              <span style={{ color: "#bbb", fontSize: 14 }}>
                Percentage: 93%
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Experience
          </h4>
          <div style={{ lineHeight: 1.8 }}>
            <strong style={{ color: "#ccc" }}>
              MERN Stack Developer Intern
            </strong>
            <br />
            <span style={{ color: "#aaa", fontSize: 14 }}>
              Ghaziabad E-Cell Organization | Jul 2025 – Present
            </span>
            <ul style={{ marginTop: 8, paddingLeft: 20, color: "#bbb" }}>
              <li>
                Reduced website load time by 30% and increased session duration
                by 18% through API optimization and asset caching.
              </li>
              <li>
                Enhanced user engagement by 20% with UI/UX refinements and
                feature improvements.
              </li>
              <li>
                Partnered with design and content teams to align the platform
                with organizational branding and goals.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Projects
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li style={{ marginBottom: 12 }}>
              <strong>1️⃣ Interview Prep AI</strong> | MERN Stack, OpenAI API,
              JWT
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  AI interview prep tool with 50+ active users, generating
                  role-specific Q&A
                </li>
                <li>
                  Created 10+ reusable prompt templates, improving response
                  accuracy by 25%
                </li>
                <li>Implemented JWT Authentication for secure user sessions</li>
              </ul>
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>2️⃣ ChicChat</strong> | MERN Stack, WebSocket, Socket.IO,
              JWT
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  Real-time chat application handling 100+ concurrent users and
                  10k+ messages/day
                </li>
                <li>
                  Delivered 90% faster message transmission using WebSocket
                  (Socket.IO)
                </li>
                <li>
                  Designed REST APIs + MongoDB backend for scalable message
                  storage
                </li>
              </ul>
            </li>
            <li>
              <strong>3️⃣ Kisan Setu – SIH Project</strong> | MERN Stack, Backend
              Development, APIs, AI
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  Led backend development for farmer-assistance platform with
                  real-time weather APIs
                </li>
                <li>
                  Implemented disease detection and crop recommendations using
                  AI modules
                </li>
                <li>
                  Built secure authentication with JWT and scalable backend with
                  Node.js & MongoDB Atlas
                </li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            ⚙️ Skills
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Redux",
              "Bootstrap",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongo Atlas",
              "Java",
              "OOP",
              "Multithreading",
              "C (Basic)",
              "Operating Systems",
              "DSA",
              "REST APIs",
              "JWT Authentication",
              "WebSocket",
              "Git",
              "GitHub",
              "Problem Solving",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(0,180,255,0.3)",
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🏆 Achievements & Leadership
          </h4>
          <ul style={{ paddingLeft: 20, color: "#ccc", lineHeight: 1.8 }}>
            <li>
              Ranked among Top 25 Teams, Hackathon 2024 – released working MVP
              within 36 hrs
            </li>
            <li>
              Led a team of 150+ volunteers for campus events, improving event
              participation by 40%
            </li>
            <li>
              Completed a 4-month Web Development Bootcamp covering HTML, CSS,
              JS, React, Node.js, MongoDB
            </li>
            <li>
              Solved 200+ LeetCode DSA problems in Java across arrays, trees,
              graphs, and DP
            </li>
            <li>
              <strong>Certifications:</strong>
              <ul style={{ marginTop: 4 }}>
                <li>HackerRank JavaScript (Basic)</li>
                <li>HackerRank Java (Problem Solving)</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/deepak-kumar20" },
            {
              name: "💼 LinkedIn",
              link: "https://www.linkedin.com/in/deepakkumar-js/",
            },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/certs/Deepak_Resume (1).pdf"
            title="Deepak Kumar Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/certs/Deepak_Resume (1).pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
