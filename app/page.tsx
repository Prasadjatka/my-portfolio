import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #F5F3FF 0%, #fdf4ff 50%, #fff 100%)" }}>

      {/* Top nav */}
      <nav className="fixed top-4 left-1/2 z-50 flex items-center gap-6 px-8 py-3 rounded-full shadow-lg"
        style={{ transform: "translateX(-50%)", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)" }}>
        <span className="font-bold text-slate-800 text-lg tracking-tight">
          Prasad&rsquo;s <span style={{ color: "#7C3AED" }}>Portfolio</span>
        </span>
        <Link href="/portfolio" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
          Portfolio →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-32">
        {/* Avatar */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
            style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)", border: "4px solid #7C3AED" }}>
            PJ
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        {/* Heading */}
        <p className="text-slate-500 text-lg mb-2 font-medium">Hello, I&rsquo;m</p>
        <h1 className="text-6xl sm:text-7xl font-black mb-4 leading-tight"
          style={{ background: "linear-gradient(to right, #7C3AED, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Prasad Jatkar
        </h1>
        <p className="text-xl text-slate-600 font-medium mb-2">
          Full Stack Developer &amp; Computer Science Graduate
        </p>
        <p className="text-slate-500 max-w-xl mb-10 leading-relaxed">
          Passionate about crafting exceptional digital experiences, scalable web applications,
          and user-centered products that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            style={{ background: "linear-gradient(to right, #7C3AED, #EC4899)" }}>
            View Portfolio →
          </Link>
          <a
            href="mailto:jpra321@gmail.com"
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 hover:bg-purple-50 transition-all duration-200"
            style={{ borderColor: "#7C3AED", color: "#7C3AED" }}>
            Get In Touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl w-full">
          {[
            { label: "Projects", value: "9+" },
            { label: "Tech Skills", value: "20+" },
            { label: "GPA", value: "94%" },
            { label: "Role", value: "Intern @ Deloitte" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-2xl font-black"
                style={{ background: "linear-gradient(to right, #7C3AED, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {s.value}
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech tags strip */}
      <section className="py-10 overflow-hidden" style={{ background: "rgba(124,58,237,0.04)" }}>
        <div className="flex flex-wrap justify-center gap-3 px-6">
          {["React JS", "Next.js", "PHP", "Java", "Kotlin", "Node.js", "PostgreSQL", "MySQL", "Java Spring Boot", "AWS", "Supabase", "Android"].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7C3AED", color: "#7C3AED", background: "rgba(124,58,237,0.06)" }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        © 2026 Prasad Jatkar &nbsp;·&nbsp;
        <Link href="/portfolio" className="hover:text-purple-600 transition-colors">
          Full Portfolio
        </Link>
      </footer>
    </main>
  );
}
