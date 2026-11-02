export default function WhyHireMe() {
  const points = [
    {
      title: "Production App Experience",
      desc: "I've shipped two live apps at HFP Technology — Ekspans (B2B social networking) and Wellness Center Club (RBAC wellness platform) — managing full release cycles on both the Play Store and App Store.",
    },
    {
      title: "Cross-Platform & Native Mobile",
      desc: "I build for mobile with both Flutter and Android Native (Kotlin/Java), giving me the flexibility to choose the right tool — and the depth to go beyond the surface on either platform.",
    },
    {
      title: "Full Stack from Mobile to Backend",
      desc: "From Flutter UIs and Kotlin Android apps to Spring Boot APIs and MySQL schemas, I own the entire stack — reducing handoff friction and delivering complete, integrated features.",
    },
    {
      title: "Real-World System Design",
      desc: "I've implemented GPS activity tracking, real-time Firebase chat, role-based dashboards, and anonymous messaging — not just CRUD apps, but systems that solve genuine user problems.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">Why Hire Me</h2>
      <p className="text-slate-400 text-sm mb-6">
        What I bring beyond the tech stack.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {points.map((p) => (
          <div
            key={p.title}
            className="border border-slate-700 rounded-xl p-5 hover:border-cyan-400 transition"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              {p.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
