"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "HFP Technology Private Limited",
    location: "Thane, Maharashtra, India",
    duration: "Jan 2026 – Oct 2026",
    projects: [
      {
        name: "Ekspans — B2B Social Networking App",
        tech: "Flutter, Dart, Firebase, Facebook SDK, REST APIs",
        points: [
          "Built a cross-platform B2B networking application using Flutter with a professional business feed, real-time live chat, digital business card exchange, and company profile management.",
          "Integrated Facebook SDK for social authentication and Firebase for real-time database, push notifications, and crash reporting via Firebase Crashlytics.",
          "Managed versioned app releases on Google Play Store and Apple App Store; maintained and optimized Android and iOS builds across release cycles.",
        ],
      },
      {
        name: "Wellness Center Club — Role-Based Wellness App",
        tech: "Android Native, Kotlin, Firebase, REST APIs",
        points: [
          "Developed a native Android app in Kotlin for wellness center management with RBAC supporting Admin, Manager, Member, and Customer roles with dedicated dashboards.",
          "Built modules for community posts, event management, member tracking, and nutrition planning; integrated Google Sign-In, Firebase push notifications, and Crashlytics.",
          "Implemented GPS-based activity tracking for steps, running, and swimming with Google Maps route drawing; used tracked data to auto-generate community activity posts.",
        ],
      },
    ],
  },
];

const projects = [
  {
    title: "BuddyGo — Travel Buddy Finder",
    desc: "A hybrid Flutter app for solo travelers to find verified travel partners with group chat, anonymous messaging, and identity verification.",
    link: "/projects/buddygo",
    tech: "Flutter, Dart, Firebase, Google Maps, REST APIs",
    duration: "Feb 2026 – May 2026",
    badge: "Personal Project",
  },
  {
    title: "E-Grampanchayat",
    desc: "Digital governance platform for rural administration enabling online certificate issuance, tax payments, scheme applications, and project monitoring.",
    link: "/projects/egram",
    tech: "React.js (Vite), Spring Boot (Java), MySQL, Bootstrap",
    duration: "Jan 2025 – Mar 2025",
    badge: "Personal Project",
  },
  {
    title: "Tenant Booster",
    desc: "Property management system to handle tenants, rent, maintenance, and analytics efficiently.",
    link: "/projects/tenant",
    tech: "HTML, CSS, JavaScript, PHP",
    duration: "",
    badge: "Personal Project",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 md:px-20 py-24 max-w-6xl">
      {/* ── Work Experience ── */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Work Experience</h1>
      <p className="text-slate-300 mb-10 max-w-3xl">
        Professional experience building production-grade mobile and web
        applications across cross-platform and native stacks.
      </p>

      <div className="space-y-10 mb-20">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-cyan-400/60 transition"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                <p className="text-cyan-400 font-medium">{exp.company}</p>
                <p className="text-slate-400 text-sm">{exp.location}</p>
              </div>
              <span className="text-sm text-slate-400 border border-slate-700 rounded-full px-3 py-1 self-start md:self-auto whitespace-nowrap">
                {exp.duration}
              </span>
            </div>

            {/* Sub-projects */}
            <div className="space-y-6">
              {exp.projects.map((proj, pIdx) => (
                <div key={pIdx}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-white font-semibold">{proj.name}</h3>
                    <span className="text-xs text-cyan-400 border border-cyan-400/40 rounded-full px-2 py-0.5">
                      {proj.tech}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {proj.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-slate-300 text-sm leading-relaxed"
                      >
                        <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Projects ── */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Projects</h1>
      <p className="text-slate-300 mb-10 max-w-3xl">
        A collection of personal and academic projects spanning mobile,
        full-stack web, and platform engineering.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link
              href={project.link}
              className="border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:shadow-cyan-400/20 hover:shadow-lg transition block h-full"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h2 className="text-xl font-semibold text-white leading-snug">
                  {project.title}
                </h2>
                {project.badge && (
                  <span className="text-xs shrink-0 text-slate-400 border border-slate-700 rounded-full px-2 py-0.5">
                    {project.badge}
                  </span>
                )}
              </div>
              {project.duration && (
                <p className="text-xs text-slate-500 mb-2">
                  {project.duration}
                </p>
              )}
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                {project.desc}
              </p>
              <p className="text-sm text-cyan-400">{project.tech}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
