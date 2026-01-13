export default function Architecture() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        System Architecture
      </h2>
      <div className="border border-slate-700 rounded-xl p-6">
        <p className="text-slate-300 leading-7">
          My projects follow a modular, scalable architecture:
          <br /><br />
          Frontend (React / Next.js) → REST APIs (Spring Boot / Node.js) → Database
          (MySQL / MongoDB) → Authentication & Authorization → Admin Dashboard
          <br /><br />
          I design systems with role-based access, clean separation of concerns,
          and future scalability in mind.
        </p>
      </div>
    </section>
  );
}

