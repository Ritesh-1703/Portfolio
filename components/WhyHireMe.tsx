export default function WhyHireMe() {
  const points = [
    {
      title: "System-Oriented Thinker",
      desc: "I design complete systems with proper architecture, data flow, and scalability in mind, not just UI screens.",
    },
    {
      title: "Research-Driven Mindset",
      desc: "As a published researcher in digital governance systems, I approach problems analytically and design solutions with long-term impact.",
    },
    {
      title: "Full Stack Capability",
      desc: "With strong expertise in MERN stack, Java Spring Boot, databases, and REST APIs, I can handle both frontend and backend responsibilities confidently.",
    },
    {
      title: "Real-World Impact",
      desc: "I have built platforms aligned with the Digital India mission, improving transparency, accessibility, and efficiency in public services.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Why Hire Me</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {points.map((p) => (
          <div
            key={p.title}
            className="border border-slate-700 rounded-xl p-5 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {p.title}
            </h3>
            <p className="text-slate-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
