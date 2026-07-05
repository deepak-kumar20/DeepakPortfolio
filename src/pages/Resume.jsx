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
              Full Stack Developer currently working at ACT Business Solutions.
              Focused on building scalable web applications,
              backend infrastructure, and real-time systems. Skilled in REST APIs,
              authentication, WebSockets, caching, and AI integration with strong
              foundation in Data Structures & Algorithms. Effective communicator
              and problem-solver with hands-on experience across production
              deployments and hackathons.
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
                ABES Engineering College, Ghaziabad
              </span>{" "}
              <br />
              <span style={{ color: "#aaa", fontSize: 14 }}>
                Sep 2023 – Sep 2027
              </span>{" "}
              <br />
              <span style={{ color: "#bbb", fontSize: 14 }}>
                CGPA: 8.27/10
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
              Full Stack Developer | ACT Business Solutions | Remote
            </strong>
            <span style={{ color: "#aaa", fontSize: 13, marginLeft: 8 }}>
              Apr 2026 – Present
            </span>
            <ul style={{ marginTop: 8, paddingLeft: 20, color: "#bbb" }}>
              <li>
                Architected and developed enterprise modules including Risk
                Management, Procurement, Invoicing, and HRMS from database
                schema design to React/TypeScript integration — reducing
                cross-team integration effort by ~40% via reusable REST APIs and
                UI components.
              </li>
              <li>
                Designed modular backend services to decouple Payroll, HRMS, and
                Performance systems, enabling independent feature deployments
                and cutting inter-module dependency resolution time by ~35%.
              </li>
              <li>
                Integrated third-party payment gateways and notification
                systems, supporting 1,000+ transaction events through secure and
                reliable inter-service communication workflows.
              </li>
              <li>
                Implemented Redis caching on high-traffic reporting endpoints —
                reduced average API response time by ~60% and redundant DB reads
                by ~70% under concurrent load.
              </li>
              <li>
                Built advanced filtering, sorting, and pagination across
                dashboards, maintaining sub-200ms query times on datasets
                exceeding 100K+ records.
              </li>
            </ul>

            <strong style={{ color: "#ccc", marginTop: 16, display: "block" }}>
              Technical Coordinator | ABES E-Cell
            </strong>
            <span style={{ color: "#aaa", fontSize: 13, marginLeft: 8 }}>
              Jun 2025 – Dec 2025
            </span>
            <ul style={{ marginTop: 8, paddingLeft: 20, color: "#bbb" }}>
              <li>
                Developed dynamic event and announcement sections, reducing
                content deployment turnaround from 2–3 days to under 1 hour for
                non-technical members.
              </li>
              <li>
                Provided real-time technical support across 5+ events and
                hackathons, maintaining 99%+ platform uptime and resolving
                issues within {"<"}15 minutes under strict deadlines.
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
              <strong>1️⃣ RepoMind – AI Repository Intelligence Platform</strong>{" "}
              | Next.js, FastAPI, LangGraph, Neo4j, Qdrant, PostgreSQL
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  Built an AI-powered repository intelligence platform indexing
                  100,000+ lines of code into a hybrid GraphRAG + Vector RAG
                  pipeline using AST parsing, enabling sub-2s
                  architecture-aware retrieval.
                </li>
                <li>
                  Implemented LangGraph multi-agent workflows for repository
                  Q&A, impact analysis, documentation generation, dependency
                  tracing, and code explanation with Neo4j knowledge graphs.
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>2️⃣ CollabAI</strong> | React.js, Node.js, Socket.io, Yjs,
              Gemini API
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  Built a real-time collaborative workspace supporting 50+
                  concurrent users with CRDT-based synchronisation using Yjs and
                  Socket.io, ensuring conflict-free document editing.
                </li>
                <li>
                  Integrated Gemini API for AI-powered summarisation and content
                  generation, with JWT authentication and rate limiting to
                  secure 100+ active workspaces.
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>3️⃣ Distributed Job Queue System</strong> | Node.js,
              PostgreSQL, Redis, Docker
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  Built a distributed producer-consumer architecture capable of
                  processing 50,000+ background jobs with concurrent workers,
                  scheduled execution, retries, and automatic failure recovery.
                </li>
                <li>
                  Developed monitoring APIs for tracking 1,000+ queued tasks and
                  worker health in real time, achieving 99%+ job execution
                  reliability.
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>4️⃣ Interview Prep Platform</strong> | React.js, Node.js,
              MongoDB, Gemini API
              <ul style={{ paddingLeft: 20, color: "#bbb", fontSize: 14 }}>
                <li>
                  Built a role-based platform for students and teachers with
                  AI-generated personalised learning roadmaps using Gemini API
                  for dynamic preparation strategies.
                </li>
                <li>
                  Designed secure APIs with optimised frontend workflows to
                  efficiently support multiple user roles and personalised
                  learning experiences.
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
              "JavaScript",
              "Python",
              "TypeScript",
              "Java",
              "C++",
              "React.js",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "REST APIs",
              "JWT Authentication",
              "WebSockets",
              "BullMQ",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Redis",
              "Docker",
              "Git",
              "GitHub Actions",
              "Postman",
              "Socket.io",
              "Yjs (CRDT)",
              "LLMs",
              "RAG",
              "LangChain",
              "LangGraph",
              "AI Agents",
              "Vector Databases",
              "MCP",
              "OOP",
              "DBMS",
              "Operating Systems",
              "DSA",
              "Problem Solving",
              "Communication",
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
            🏆 Achievements
          </h4>
          <ul style={{ paddingLeft: 20, color: "#ccc", lineHeight: 1.8 }}>
            <li>
              2nd Place — Maharaja Agrasen College Hackathon, University of
              Delhi
            </li>
            <li>4th Place — IIT Guwahati Hackathon 2026</li>
            <li>Finalist — TechSprint Hackathon, DevSangam'26</li>
            <li>Finalist — AI Summit Hackathon, IIT Ropar</li>
            <li>
              Solved 450+ LeetCode DSA problems with 1800+ rating across arrays,
              trees, graphs, and DP
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
            src="/certs/Resume-Deepak.pdf"
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
          href="/certs/Resume-Deepak.pdf"
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
