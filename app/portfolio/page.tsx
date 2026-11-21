'use client';

import React, { useEffect } from 'react';

export default function Portfolio() {
  // Load FontAwesome version 6.5.0 natively inside useEffect to prevent SSR mismatches
  useEffect(() => {
    if (!document.getElementById('font-awesome-css')) {
      const faLink = document.createElement('link');
      faLink.id = 'font-awesome-css';
      faLink.rel = 'stylesheet';
      faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
      document.head.appendChild(faLink);
    }
  }, []);

  return (
    <>
      {/* CSS Layout mapping with the high-performance Next.js font variables */}
      <style>{`
        :root{
          --text:#1e1b4b;
          --muted:#6b7280;

          --primary:#6d28d9;
          --secondary:#8b5cf6;
          --accent:#ec4899;

          --bg1:#ffffff;
          --bg2:#faf5ff;
          --bg3:#f3e8ff;
        }

        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html {
          scroll-behavior:smooth;
        }

        body {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          background: linear-gradient(135deg, #ffffff 0%, #faf5ff 40%, #f3e8ff 100%);
          color: var(--text) !important;
          overflow-x:hidden;
          min-height:100vh;
        }

        /* ===== DECORATIVE BACKGROUNDS ===== */
        body::before {
          content:"";
          position:fixed;
          width:600px;
          height:600px;
          top:-250px;
          right:-150px;
          background: radial-gradient(circle, rgba(139,92,246,.45), transparent 70%);
          opacity:.14;
          z-index:-1;
        }

        body::after {
          content:"";
          position:fixed;
          width:500px;
          height:500px;
          bottom:-220px;
          left:-120px;
          background: radial-gradient(circle, rgba(236,72,153,.25), transparent 70%);
          opacity:.12;
          z-index:-1;
        }

        /* ===== LAYOUT ===== */
        .container {
          width:min(1200px,90%);
          margin:auto;
        }

        section {
          padding:100px 0;
        }

        /* ===== GLASS ===== */
        .glass {
          background:rgba(255,255,255,.40);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,.85);
          border-radius:24px;
          box-shadow: 0 8px 32px rgba(124,58,237,.06), 0 2px 8px rgba(15,23,42,.04);
        }

        /* ===== NAVBAR ===== */
        nav {
          position:fixed;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          width:min(1150px,92%);
          z-index:999;
          padding:16px 30px;
        }

        .nav-content {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .logo {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size:1.4rem;
          font-weight:700;
          color: #1e1b4b !important; 
        }

        .logo span {
          color:var(--primary) !important;
        }

        .nav-links {
          display:flex;
          gap:28px;
        }

        .nav-links a {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          text-decoration:none;
          color:#334155 !important;
          font-weight:500;
          transition:.3s;
        }

        .nav-links a:hover {
          color:#c84f91 !important;
        }

        /* ===== HERO ===== */
        .hero {
          min-height:100vh;
          display:flex;
          align-items:center;
        }

        .hero-content {
          display:grid;
          grid-template-columns:1.2fr .8fr;
          gap:60px;
          align-items:center;
        }

        .hero-text h4 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          color:var(--secondary) !important;
          font-weight:600;
          margin-bottom:12px;
        }

        .hero-text h1 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size:4.5rem;
          line-height:1.05;
          margin-bottom:20px;
          color: #1e1b4b !important;
        }

        /* EXACT GRADIENT AND WEIGHT PRESERVATION FOR YOUR NAME */
        .gradient {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 800 !important;
          background: linear-gradient(90deg, #6d28d9 0%, #8b5cf6 45%, #ec4899 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-text p {
          color:var(--muted) !important;
          line-height:1.9;
          font-size:1.05rem;
          max-width:650px;
        }

        .hero-text p b {
          color: #1e1b4b !important;
        }

        /* ===== BUTTONS ===== */
        .buttons {
          display:flex;
          gap:15px;
          margin-top:35px;
        }

        .btn {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          text-decoration:none;
          padding:14px 28px;
          border-radius:14px;
          font-weight:600;
          transition:.3s;
          display:inline-block;
        }

        .btn-primary {
          color: white !important;
          background: linear-gradient(135deg, #5b21b6, #7c3aed, #8b5cf6, #ec4899);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          background: rgba(255,255,255,0.15);
          transition: transform 0.6s ease;
        }

        .btn-primary:hover::after {
          transform: translate(-50%, -50%) scale(12);
        }

        .btn-primary:active {
          transform: scale(0.97);
          filter: brightness(0.95);
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
        }

        .btn-secondary {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: transparent;
          color: #5b21b6 !important;
          border: none;
          border-radius: 12px;
          transition: transform 0.15s ease, box-shadow 0.25s ease, color 0.25s ease;
        }

        .btn-secondary::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #5b21b6, #8b5cf6, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .btn-secondary::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.15);
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.6s ease;
          pointer-events: none;
        }

        .btn-secondary:hover {
          color: #7c3aed !important;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15), 0 0 16px rgba(236, 72, 153, 0.08);
        }

        .btn-secondary:hover::after {
          transform: translate(-50%, -50%) scale(12);
        }

        .btn-secondary:active {
          transform: scale(0.97);
        }

        .btn-links {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 14px;
          background: transparent;
          border: none;
          color: #5b21b6 !important; 
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s ease, box-shadow 0.25s ease, color 0.25s ease;
        }

        .btn-links::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #5b21b6, #8b5cf6, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .btn-links:hover {
          color: #7c3aed !important;
          box-shadow: 0 6px 18px rgba(124, 58, 237, 0.15);
        }

        .btn-links:active {
          transform: scale(0.96);
        }

        /* ===== PROFILE ===== */
        .profile-card {
          padding:35px;
          text-align:center;
        }

        .avatar {
          width:240px;
          height:240px;
          margin:auto;
          border-radius:50%;
          background: linear-gradient(135deg, #5b21b6, #7c3aed, #8b5cf6, #ec4899);
          padding:6px;
        }

        .avatar img {
          width:100%;
          height:100%;
          border-radius:50%;
          object-fit:cover;
          display: block;
        }

        .profile-card h2 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          margin-top:22px;
          font-weight: 600;
          color: #1e1b4b !important; 
        }

        .profile-card p {
          color:var(--muted) !important;
        }

        /* ===== SECTIONS ===== */
        .section-title {
          text-align:center;
          margin-bottom:60px;
        }

        .section-title h2 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size:2.7rem;
          margin-bottom:10px;
          font-weight: 700;
          color: #1e1b4b !important; 
        }

        .section-title p {
          color:var(--muted) !important;
        }

        /* ===== SKILLS ===== */
        .skills-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:25px;
        }

        .skill-card {
          padding:28px;
          transition:.35s;
        }

        .skill-card h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          margin-bottom:10px;
          font-weight: 600;
          color: #1e1b4b !important; 
        }

        .skill-card p {
          color:var(--muted) !important;
        }

        /* ===== TIMELINE ===== */
        .timeline {
          max-width:900px;
          margin:auto;
          position:relative;
        }

        .timeline::before {
          content:"";
          position:absolute;
          left:20px;
          top:0;
          width:3px;
          height:100%;
          background: linear-gradient(to bottom, #5b21b6, #8b5cf6, #ec4899);
        }

        .timeline-item {
          position:relative;
          margin-left:60px;
          margin-bottom:25px;
          padding:25px;
          transition:.35s;
        }

        /* emoji dot replaces the old ::before circle */
        .timeline-dot {
          position:absolute;
          left:-54px;
          top:22px;
          width:44px;
          height:44px;
          border-radius:50%;
          background: linear-gradient(135deg, #5b21b6, #ec4899);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:1.3rem;
          box-shadow: 0 4px 12px rgba(124,58,237,.25);
        }

        .timeline-item h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          color: #1e1b4b !important; 
          font-weight: 600;
        }

        .timeline-item p {
          color:var(--muted) !important;
          margin-top:8px;
        }

        .timeline-item p b {
          color: #1e1b4b !important;
        }

        /* ===== PROJECTS ===== */
        .projects-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:25px;
        }

        .project-card {
          overflow:hidden;
          transition:.35s;
        }

        .project-image {
          height:220px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:14px;
          position:relative;
          background: linear-gradient(135deg, rgba(139,92,246,.75), rgba(124,58,237,.65), rgba(236,72,153,.55));
        }

        /* emoji icon in project card */
        .project-image .proj-emoji {
          font-size: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 12px 25px rgba(0,0,0,.25));
          z-index: 1;
        }

        .project-image .label {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size:1.3rem !important;
          font-weight:600 !important;
          color:white !important;
          letter-spacing:.5px !important;
          text-shadow:0 6px 18px rgba(0,0,0,.25) !important;
          z-index: 1;
        }

        .project-image::after {
          content:"";
          position:absolute;
          width:140px;
          height:140px;
          background:rgba(255,255,255,.18);
          border-radius:50%;
          filter:blur(25px);
          z-index:0;
        }

        .project-content {
          padding:25px;
        }

        .project-content h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 600;
          color: #1e1b4b !important; 
        }

        .project-content p {
          color:var(--muted) !important;
          margin-top:10px;
        }

        .project-content p b {
          color: #1e1b4b !important;
        }

        /* ===== EDUCATION / EXPERIENCE ===== */
        .edu-card {
          padding:28px;
          margin-bottom:20px;
          transition:.35s;
        }

        .edu-card h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 600;
          color: #1e1b4b !important; 
        }

        .edu-card p {
          color:var(--muted) !important;
          margin-top:8px;
        }

        .edu-card p b {
          color: #1e1b4b !important;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .skill-chip {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(109,40,217,0.08);
          color: #5b21b6 !important;
          border: 1px solid rgba(109,40,217,0.18);
          white-space: nowrap;
          transition: .25s;
        }

        .skill-chip:hover {
          background: linear-gradient(135deg, #5b21b6, #ec4899);
          color: white !important;
          border-color: transparent;
        }

        /* ===== CONTACT ===== */
        .contact-card {
          text-align:center;
          padding:60px 30px;
          width: 100%;
        }

        .contact-card h2 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 600;
          color: #1e1b4b !important; 
        }

        .contact-card p {
          color:var(--muted) !important;
          margin-top:15px;
        }

        .socials {
          display:flex;
          justify-content:center;
          gap:18px;
          margin-top:30px;
        }

        .socials a {
          width:100px;
          height:100px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          color:#334155 !important;
          font-weight:600;
          background:white;
          border:1px solid rgba(139,92,246,.15);
          box-shadow: 0 4px 12px rgba(124,58,237,.06);
          transition:.3s;
        }

        .socials a i {
          color: #334155 !important;
          font-size:28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .socials a:hover {
          background: linear-gradient(135deg, #5b21b6, #7c3aed, #8b5cf6, #ec4899);
          transform:translateY(-5px);
        }

        .socials a:hover i {
          color: white !important;
        }

        /* ===== HOVER EFFECTS ===== */
        .skill-card:hover,
        .project-card:hover,
        .edu-card:hover,
        .timeline-item:hover {
          transform:translateY(-10px);
          box-shadow: 0 20px 40px rgba(124,58,237,.18), 0 12px 24px rgba(236,72,153,.10);
        }

        /* ===== FOOTER ===== */
        footer {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          padding:30px;
          text-align:center;
          color:var(--muted) !important;
        }

        @media(max-width:900px){
          .hero-content {
            grid-template-columns:1fr;
            text-align:center;
          }
          .hero-text h1 {
            font-size:3rem;
          }
          .buttons {
            justify-content:center;
          }
          .nav-links {
            display:none;
          }
          .avatar {
            width:200px;
            height:200px;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="glass">
        <div className="nav-content">
          <div className="logo">
            Prasad's <span>Portfolio</span>
          </div>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#experience">Education</a>
            <a href="#projects">Projects</a>
            <a href="#education">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h4>Hello, I'm</h4>
            <h1>
              <span className="gradient">Prasad Jatkar</span>
            </h1>
            <p>
              A Computer Science graduate, Passionate about Full Stack Development, focused on crafting
              exceptional digital experiences, scalable web applications, and user-centered products that
              solve real-world problems.
            </p>
            <br />
            <p>
              <strong>Full Stack Developer | PHP | Next.js | Java | Kotlin | MySQL | PostGres<br /> | Java Spring Boot | React JS<br /> | WebSites | Android Apps</strong>
            </p>
            <div className="buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="profile-card glass">
            <div className="avatar">
              <img src="https://photocdn.jeevansathi.com/62333/13/1246673821-1768843372077.jpeg" alt="Profile" />
            </div>
            <h2>Prasad Jatkar</h2>
            <p>
              • Computer Science Graduate<br />
              • Deloitte Internationals Intern<br />
              • Built Social Media, Games<br />
              &amp; Other Websites and Apps.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Technologies I use to build modern products.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card glass">
              <h3>Frontend</h3>
              <p>React JS, HTML, CSS, JavaScript, Next.js, Kotlin, Tailwind</p>
            </div>
            <div className="skill-card glass">
              <h3>Backend</h3>
              <p>C++, Node.js, PHP, Java, Erlang, Python, Java Spring Boot</p>
            </div>
            <div className="skill-card glass">
              <h3>Databases</h3>
              <p>PostgreSQL, MySQL, NoSQL, Room, SQLite, IDB, LocalStorage</p>
            </div>
            <div className="skill-card glass">
              <h3>Cloud &amp; DevOps</h3>
              <p>AWS, Supabase, Vercel, Git, AI, AGI, AgenticAI, GitHub, Android Apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="experience">
        <div className="container">
          <div className="section-title">
            <h2>Education</h2>
            <p>Academic qualifications and certifications.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item glass">
              <div className="timeline-dot">🎓</div>
              <h3>Bachelor of Science - Computer Science</h3>
              <p><strong>MIT University • Full Time • 94%</strong></p>
              <p>
                Top Ranker and Distinction Holder • Awarded First Price for Best Project in the Entire University.<br />
                Scholar who achieved Merit Marks &amp; Outstanding Grades with Maintaining Strong Academic Records.<br />
                Professors used to ask me code for solving practical problems (like timetable management).
              </p>
            </div>
            <div className="timeline-item glass">
              <div className="timeline-dot">🏫</div>
              <h3>Higher Secondary School</h3>
              <p>MIT Vishwashanti Gurukul School • Full Time</p>
              <p>First Class Grades • Scholar and Sensior Student Awardee.</p>
            </div>
            <div className="timeline-item glass">
              <div className="timeline-dot">📚</div>
              <h3>Senior Secondary School</h3>
              <p>S. P. Mandali Pune's late V. M. Mehta High School • Full Time</p>
              <p>First Class Grades • Ideal and Sensior Student Awardee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p>Selected work and featured case studies.</p>
          </div>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">✉️</span>
                <span className="label">SocialMVP</span>
              </div>
              <div className="project-content">
                <h3>Social Media</h3>
                <p><strong>Next.js, Node.js, PostgreSQL</strong></p>
                <p>Full-stack application with authentication with Secure Chats<br />and Free Voice &amp; Video Calls.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/" className="btn-links">Check Live Website</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">❤️</span>
                <span className="label">SoulMatch</span>
              </div>
              <div className="project-content">
                <h3>Matrimony Website</h3>
                <p><strong>CSS, HTML, JavaScript</strong></p>
                <p>Complete online Full-stack Matchmaking site featuring user centric UI/UX and efficient backend.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/matrimony" className="btn-links">Go To Live Website</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">💎</span>
                <span className="label">Luxora</span>
              </div>
              <div className="project-content">
                <h3>Jewellery Shop</h3>
                <p><strong>HTML, JavaScript, CSS</strong></p>
                <p>Smart &amp; Rich In UI/UX and Elite Designed Website For A Jewellery Shop animations powered by GEM Effects.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/jewelary" className="btn-links">Go To Live Website</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">🎓</span>
                <span className="label">Education</span>
              </div>
              <div className="project-content">
                <h3>Educational Website</h3>
                <p><strong>PHP, HTML, JavaScript, CSS, MySQL</strong></p>
                <p>In pandemic, this website served students, teachers and parents. Helped children to understand the concepts.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/jatkarschool/homepage.html" className="btn-links">Go To Live Website</a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">🥭</span>
                <span className="label">Mango Aura</span>
              </div>
              <div className="project-content">
                <h3>Mango Farm</h3>
                <p><strong>HTML, JavaScript, CSS</strong></p>
                <p>Summer Special Mango Sellers' Website For Aamrai Farmer.<br />Simple and Easy UI UX Design</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/mangoAura" className="btn-links">Go To Live Website</a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">🏫</span>
                <span className="label">SchoolSystem</span>
              </div>
              <div className="project-content">
                <h3>School Management System</h3>
                <p><strong>HTML, PHP, CSS, Javascript, MySQL</strong></p>
                <p>CRUD-based system for managing student data. Won Best Project for this at MIT.</p>
              </div>
            </div>

            {/* Project 7 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">📅</span>
                <span className="label">TimeTable</span>
              </div>
              <div className="project-content">
                <h3>Timetable Management System</h3>
                <p><strong>HTML, PHP, CSS, Javascript, MySQL</strong></p>
                <p>MIT Professors requested me for managing timetable and schedule. Developed this site with strong logic and practically implemented this site for MIT Staff.</p>
              </div>
            </div>

            {/* Project 8 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">✅</span>
                <span className="label">TaskFlow Pro</span>
              </div>
              <div className="project-content">
                <h3>Task Manager</h3>
                <p><strong>Java, HTML, CSS, JavaScript, Storage</strong></p>
                <p>Task tracking app with progress completion status.<br />Designed Tasks creation with completion and deletion options.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/tasks" className="btn-links">Go To Live Website</a>
                </div>
              </div>
            </div>

            {/* Project 9 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">⚛️</span>
                <span className="label">QuantumSync</span>
              </div>
              <div className="project-content">
                <h3>Arcade Game</h3>
                <p><strong>Html, CSS, JavaScript, Boot, Sessions</strong></p>
                <p>Arcade Game<br />Designed to Improve Maths Calculations<br />Simulteneously It Improves Academic Efficiency.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/game/quantumSync" className="btn-links">Play the Game</a>
                </div>
              </div>
            </div>

            {/* Project 10 */}
            <div className="project-card glass">
              <div className="project-image">
                <span className="proj-emoji">🎮</span>
                <span className="label">Sqube</span>
              </div>
              <div className="project-content">
                <h3>Arcade Game</h3>
                <p><strong>Html, CSS, JavaScript, Boot, Sessions</strong></p>
                <p>Arcade Game<br />Designed to Improve Maths Calculations<br />Simulteneously It Improves Academic Efficiency.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <a href="https://social-mvp-mfoo.vercel.app/portfolio/projects/game/sqube" className="btn-links">Play the Game</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="education">
        <div className="container">
          <div className="section-title">
            <h2>Experience</h2>
            <p>My professional journey so far</p>
          </div>
          <div className="edu-card glass">
            <h3>Technology Consulting Intern (Software Developer) • Deloitte Internationals</h3>
            <img 
              src="https://clipground.com/images/deloitte-logo-png-13.png" 
              alt="Deloitte Logo"
              style={{ display: 'block', margin: '20px auto 20px auto', height: '20px', width: '120px' }} 
            />
            <p><strong>Skills Developed</strong></p>
            <div className="skill-chips">
              {[
                'Client Discovery',
                'Design a Business Case',
                'Further Analysis & Solution Presentation',
                'Presentation',
                'Considerations For Mobilisation',
                'Understanding Cloud Computing',
                'Define the Project Approach',
                'Conduct a Market Scan',
                'Cloud Feasibility Assessment',
                'Cloud Readiness Assessment',
              ].map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-card glass">
            <h2>Get In Touch</h2>
            <p>Open to freelance projects, collaborations, and exciting opportunities.</p>
            <div className="socials">
              <a href="tel:8788406992"><i className="fa-solid fa-phone"></i></a>
              <a href="https://www.github.com/prasadjat" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="mailto:jpra321@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Prasad Jatkar.
      </footer>
    </>
  );
}
