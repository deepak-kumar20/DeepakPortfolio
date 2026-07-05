import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "🧠 RepoMind – AI Repository Intelligence",
    desc: "AI-powered repository intelligence platform indexing 100,000+ lines of code into a hybrid GraphRAG + Vector RAG pipeline using AST parsing, enabling sub-2s architecture-aware retrieval across files, APIs, and dependencies. LangGraph multi-agent workflows for Q&A, impact analysis, and documentation generation.",
    ss: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    tech: ["Next.js", "FastAPI", "LangGraph", "Neo4j", "Qdrant", "PostgreSQL"],
    live: "#",
    code: "https://github.com/deepak-kumar20",
  },
  {
    title: "🤝 CollabAI – Real-Time Collaborative Workspace",
    desc: "Real-time collaborative workspace supporting 50+ concurrent users with CRDT-based synchronisation using Yjs and Socket.io. Integrated Gemini API for AI-powered summarisation and content generation, securing 100+ active workspaces with JWT authentication and rate limiting.",
    ss: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    tech: ["React.js", "Node.js", "Socket.io", "Yjs", "Gemini API", "JWT"],
    live: "#",
    code: "https://github.com/deepak-kumar20",
  },
  {
    title: "⚡ Distributed Job Queue System",
    desc: "Distributed producer-consumer architecture processing 50,000+ background jobs with concurrent workers, scheduled execution, retries, and automatic failure recovery. Monitoring APIs track 1,000+ queued tasks with 99%+ job execution reliability.",
    ss: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    live: "#",
    code: "https://github.com/deepak-kumar20/distributed-job-queue-system",
  },
  {
    title: "🎓 Interview Prep Platform",
    desc: "Role-based platform for students and teachers with AI-generated personalised learning roadmaps using Gemini API for dynamic preparation strategies. Secure APIs with optimised frontend workflows supporting multiple user roles.",
    ss: "/certs/interviewPrep.png",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini API"],
    live: "https://interview-prep-ai-2-ntjl.onrender.com/",
    code: "https://github.com/deepak-kumar20/interview-prep-AI",
  },
  {
    title: "💪 AlphaGym",
    desc: "Freelance project delivered to client - Modern gym website with smooth animations and responsive design. Built with React and Framer Motion for engaging user experience.",
    ss: "/AlphaGym.png",
    tech: ["React", "Framer Motion", "CSS3", "Responsive Design"],
    live: "https://alpha-gym-sage.vercel.app/",
    code: "https://github.com/deepak-kumar20/AlphaGym",
  },
  {
    title: "🌾 Kisan Setu – SIH Project",
    desc: "Farmer-assistance platform with real-time weather APIs, AI-powered disease detection, crop recommendations, and market price analysis.",
    ss: "/kisanSetu.jpeg",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI/ML APIs", "JWT"],
    live: "#",
    code: "https://github.com/deepak-kumar20/Kisan_Setu",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending full stack, AI, and
          distributed systems.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: "#0ea5e9", marginBottom: 6 }}>
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
