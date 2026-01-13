import Link from "next/link";

const projects = [
  {
    title: "E-Gram Panchayat System",
    desc: "Digital governance platform for rural administration, improving transparency and service delivery.",
    link: "/projects/egram",
    tech: "React, Spring Boot, MySQL",
  },
  {
    title: "Tenant Booster",
    desc: "Property management system to handle tenants, rent, maintenance, and analytics efficiently.",
    link: "/projects/tenant",
    tech: "HTML, CSS, JavaScript, PHP",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 md:px-20 py-24">
      <h1 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            className="border border-slate-700 rounded-xl p-6 hover:border-cyan-400 glow transition block"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-slate-300 mb-3">{project.desc}</p>
            <p className="text-sm text-cyan-400">{project.tech}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
