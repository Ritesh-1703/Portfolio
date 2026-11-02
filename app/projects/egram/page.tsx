export default function EGramPage() {
  return (
    <main className="px-6 md:px-20 py-24 space-y-8 max-w-4xl">
      <div>
        <p className="text-slate-400 text-sm mb-2">Jan 2025 – Mar 2025</p>
        <h1 className="text-4xl font-bold text-cyan-400">
          E-Grampanchayat — Digital Rural Governance
        </h1>
        <p className="text-sm text-cyan-400 mt-1">
          React.js (Vite) · Spring Boot (Java) · MySQL · Bootstrap
        </p>
      </div>

      <p className="text-slate-300 max-w-3xl leading-7">
        E-Grampanchayat is a full-stack digital governance platform that
        modernizes rural administrative operations — enabling citizens to access
        government services, submit applications, and track requests entirely
        online, in alignment with the Digital India initiative.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Problem Statement
        </h2>
        <p className="text-slate-300 leading-7">
          Rural citizens face significant barriers accessing government services
          — excessive paperwork, physical travel to offices, lack of
          transparency, and slow processing times create inefficiency and
          frustration for both citizens and administrators.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Solution</h2>
        <p className="text-slate-300 leading-7">
          A web platform with dedicated citizen and admin portals where citizens
          can apply for certificates, pay taxes, apply for government schemes,
          and monitor local project status — while admins manage, verify, and
          process requests from a centralized dashboard.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Tech Stack
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Frontend: React.js with Vite, Bootstrap</li>
          <li>Backend: Spring Boot (Java)</li>
          <li>Database: MySQL</li>
          <li>Authentication: JWT-based role-based access</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Online certificate issuance and application tracking</li>
          <li>Tax payment portal with payment history</li>
          <li>Government scheme application and status monitoring</li>
          <li>Local project monitoring dashboard</li>
          <li>Role-based portals for Citizens and Admins</li>
          <li>Document upload and verification workflow</li>
          <li>Reduces manual paperwork and improves governance transparency</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Impact</h2>
        <p className="text-slate-300 leading-7">
          The platform directly supports the Digital India vision — reducing
          manual workload for administrators, cutting processing times, and
          giving rural citizens transparent, anytime access to essential
          government services.
        </p>
      </section>
    </main>
  );
}
