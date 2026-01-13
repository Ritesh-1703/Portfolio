export default function EGramPage() {
  return (
    <main className="px-6 md:px-20 py-24 space-y-8">
      <h1 className="text-4xl font-bold text-cyan-400">
        E-Gram Panchayat System
      </h1>

      <p className="text-slate-300 max-w-3xl leading-7">
        E-Gram Panchayat is a digital governance platform designed to streamline
        rural administrative processes. The system enables citizens to access
        government services online, submit requests, track application status,
        and improve transparency between the panchayat and villagers.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Problem Statement
        </h2>
        <p className="text-slate-300">
          Rural citizens often face difficulties accessing government services
          due to paperwork, lack of transparency, and physical travel to offices.
          This leads to delays, inefficiency, and frustration.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Solution
        </h2>
        <p className="text-slate-300">
          I designed and developed a web-based platform where citizens can apply
          for services online, upload documents, track application status, and
          receive updates. Admins can manage requests, verify documents, and
          generate reports.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Tech Stack
        </h2>
        <ul className="list-disc list-inside text-slate-300">
          <li>Frontend: React.js</li>
          <li>Backend: Java Spring Boot</li>
          <li>Database: MySQL</li>
          <li>Authentication: JWT</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Online service application & tracking</li>
          <li>Role-based access control (Admin, Officer, Citizen)</li>
          <li>Document upload and verification</li>
          <li>Dashboard with analytics</li>
          <li>Secure authentication & authorization</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Impact
        </h2>
        <p className="text-slate-300">
          The platform improves transparency, reduces manual workload, and
          provides faster access to government services for rural citizens.
        </p>
      </section>
    </main>
  );
}
