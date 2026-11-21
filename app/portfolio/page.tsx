"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    title: "Frontend",
    emoji: "🎨",
    items: ["React JS", "HTML", "CSS", "JavaScript", "Next.js", "Kotlin", "Tailwind"],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    items: ["C++", "Node.js", "PHP", "Java", "Erlang", "Python", "Java Spring Boot"],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    items: ["PostgreSQL", "MySQL", "NoSQL", "Room", "SQLite", "IDB", "LocalStorage"],
  },
  {
    title: "Cloud & DevOps",
    emoji: "☁️",
    items: ["AWS", "Supabase", "Vercel", "Git", "AI", "AGI", "AgenticAI", "GitHub", "Android Apps"],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science — Computer Science",
    school: "MIT University",
    detail: "94% · Top Ranker & Distinction · Best Project Awardee",
    emoji: "🎓",
  },
  {
    degree: "Higher Secondary School",
    school: "MIT Vishwashanti Gurukul School",
    detail: "",
    emoji: "🏫",
  },
  {
    degree: "Senior Secondary School",
    school: "S. P. Mandali Pune's Late V. M. Mehta High School",
    detail: "",
    emoji: "📚",
  },
];

const PROJECTS = [
  {
    name: "SocialMVP",
    desc: "Messaging & P2P calls platform",
    tech: "Next.js · Node.js · PostgreSQL",
    emoji: "✉️",
    link: "https://social-mvp-mfoo.vercel.app",
  },
  {
    name: "SoulMatch",
    desc: "Matrimony Website",
    tech: "Full Stack",
    emoji: "❤️",
    link: null,
  },
  {
    name: "Luxora",
    desc: "Jewellery Shop with GEM effects",
    tech: "React · CSS",
    emoji: "💎",
    link: null,
  },
  {
    name: "Education",
    desc: "Pandemic Educational Website",
    tech: "PHP · MySQL",
    emoji: "🎓",
    link: null,
  },
  {
    name: "Mango Aura",
    desc: "Farm-to-consumer mango sales",
    tech: "Next.js · PostgreSQL",
    emoji: "🥭",
    link: null,
  },
  {
    name: "SchoolSystem",
    desc: "CRUD management system",
    tech: "Java Spring Boot · MySQL",
    emoji: "🏫",
    link: null,
  },
  {
    name: "TimeTable",
    desc: "Scheduling system for MIT faculty",
    tech: "PHP · MySQL",
    emoji: "📅",
    link: null,
  },
  {
    name: "TaskFlow Pro",
    desc: "Task Manager",
    tech: "React · Node.js",
    emoji: "✅",
    link: null,
  },
  {
    name: "QuantumSync",
    desc: "Math calculation arcade game",
    tech: "Kotlin · Android",
    emoji: "⚛️",
    link: null,
  },
];

const EXPERIENCE_SKILLS = [
  "Cloud Feasibility Assessment",
  "Cloud Readiness Assessment",
  "Cloud Architecture Design",
  "Infrastructure Planning",
  "Risk Assessment",
  "Stakeholder Reporting",
  "DevOps Strategy",
  "Migration Roadmap",
  "Cost Optimisation",
  "Technical Documentation",
];

// ─── Navbar ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-4 left-1/2 z-50 flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-3 rounded-full transition-all duration-300"
      style={{
        transform: "translateX(-50%)",
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.90)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(124,58,237,0.18)"
          : "0 2px 16px rgba(0,0,0,0.08)",
      }}
    >
      <Link href="/" className="font-bold text-slate-800 text-sm sm:text-base mr-2 whitespace-nowrap">
        Prasad&rsquo;s <span style={{ color: "#7C3AED" }}>Portfolio</span>
      </Link>
      {["Skills", "Education", "Projects", "Experience", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-xs sm:text-sm font-medium text-slate-600 px-2 sm:px-3 py-1 rounded-full hover:bg-purple-50 transition-colors whitespace-nowrap"
          style={{ color: "inherit" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#7C3AED")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "")}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

// ─── Gradient helpers ────────────────────────────────────────────────────────────

const gradText: React.CSSProperties = {
  background: "linear-gradient(to right, #7C3AED, #EC4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const gradBtn: React.CSSProperties = {
  background: "linear-gradient(to right, #7C3AED, #EC4899)",
};

// ─── Section heading ─────────────────────────────────────────────────────────────

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-black mb-3" style={gradText}>{title}</h2>
      {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(180deg, #F5F3FF 0%, #ffffff 60%)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-slate-500 text-xl mb-2">Hello, I&rsquo;m</p>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black mb-5 leading-tight" style={gradText}>
              Prasad Jatkar
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-xl">
              A Computer Science graduate, Passionate about Full Stack Development,
              focused on crafting exceptional digital experiences, scalable web applications,
              and user-centered products that solve real-world problems.
            </p>
            <p className="text-sm font-medium mb-8 leading-loose"
              style={{ color: "#7C3AED" }}>
              Full Stack Developer | PHP | Next.js | Java | Kotlin | MySQL | PostGres |
              Java Spring Boot | React JS | WebSites | Android Apps
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                style={gradBtn}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full font-semibold border-2 hover:bg-purple-50 transition-all duration-200"
                style={{ borderColor: "#7C3AED", color: "#7C3AED" }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center gap-4 min-w-64 max-w-xs w-full">
            {/* Avatar */}
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-white text-3xl font-black"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                border: "4px solid #7C3AED",
                boxShadow: "0 0 0 6px rgba(124,58,237,0.15)",
              }}
            >
              PJ
            </div>
            <h3 className="text-xl font-bold text-slate-800">Prasad Jatkar</h3>
            <ul className="text-sm text-slate-600 space-y-2 text-center">
              <li className="flex items-center gap-2">
                <span style={{ color: "#7C3AED" }}>•</span> Computer Science Graduate
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "#EC4899" }}>•</span> Deloitte Internationals Intern
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "#7C3AED" }}>•</span> Built Social Media, Games &amp; Other Websites and Apps
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-xl font-bold" style={gradText}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ background: "rgba(124,58,237,0.08)", color: "#7C3AED" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────────────────── */}
      <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic background" />
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #7C3AED, #EC4899)" }}
          />
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* Timeline dot */}
                <div
                  className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center text-xl flex-shrink-0 shadow-md"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)", color: "#fff" }}
                >
                  {edu.emoji}
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 flex-1 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{edu.degree}</h3>
                  <p className="font-semibold mb-1" style={{ color: "#7C3AED" }}>{edu.school}</p>
                  {edu.detail && (
                    <p className="text-sm text-slate-500">{edu.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Things I've built" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.name}
              className="rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex flex-col gap-3"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(236,72,153,0.06) 100%)", border: "1px solid rgba(124,58,237,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{proj.emoji}</span>
                <h3 className="text-lg font-bold text-slate-800">{proj.name}</h3>
              </div>
              <p className="text-slate-600 text-sm flex-1">{proj.desc}</p>
              <p className="text-xs font-medium" style={{ color: "#EC4899" }}>{proj.tech}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: "#7C3AED" }}
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────────── */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Experience" subtitle="Professional journey" />
        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Technology Consulting Intern</h3>
              <p className="text-lg font-semibold mt-1" style={{ color: "#7C3AED" }}>
                Deloitte Internationals
              </p>
              <p className="text-slate-500 text-sm mt-1">Software Developer</p>
            </div>
            <span
              className="self-start sm:self-auto px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={gradBtn}
            >
              Intern
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {EXPERIENCE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{ background: "rgba(236,72,153,0.08)", color: "#EC4899" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Contact" subtitle="Let's work together" />
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col items-center gap-8">
          <p className="text-slate-600 text-center max-w-md">
            I&rsquo;m always open to new opportunities, collaborations, or just a friendly chat.
            Reach out through any of the channels below!
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Phone */}
            <a
              href="tel:8788406992"
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform"
                style={gradBtn}
              >
                📞
              </div>
              <span className="text-sm font-medium text-slate-600">+91 8788406992</span>
            </a>
            {/* GitHub */}
            <a
              href="https://www.github.com/prasadjat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-600">github.com/prasadjat</span>
            </a>
            {/* Email */}
            <a
              href="mailto:jpra321@gmail.com"
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, #EC4899, #7C3AED)" }}
              >
                ✉️
              </div>
              <span className="text-sm font-medium text-slate-600">jpra321@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100">
        © 2026 Prasad Jatkar &nbsp;·&nbsp; Built with Next.js &amp; Tailwind
      </footer>
    </main>
  );
}
