"use client";

import { motion, Variants } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export default function SkillsPage() {
  // Motion variant for badges
  const badgeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, type: "spring", stiffness: 80 },
    }),
  };

  {
    /* Floating Icons */
  }

  // Skill data
  const skills = {
    "Programming Languages": [
      { name: "Java", icon: <FaJava />, color: "text-orange-600" },
      { name: "Python", icon: <span>🐍</span>, color: "text-green-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "PHP", icon: <FaPhp />, color: "text-blue-700" },
      {
        name: "C",
        icon: <span className="font-bold">C</span>,
        color: "text-blue-400",
      },
    ],
    Frontend: [
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "HTML5", icon: <span>📄</span>, color: "text-orange-500" },
      { name: "CSS3", icon: <span>🎨</span>, color: "text-blue-500" },
      { name: "Bootstrap", icon: <span>💠</span>, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    ],
    Backend: [
      { name: "Spring Boot", icon: <FaJava />, color: "text-orange-600" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <span>🚂</span>, color: "text-gray-400" },
      { name: "Django", icon: <span>🐍</span>, color: "text-green-700" },
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
      { name: "RDBMS", icon: <FaDatabase />, color: "text-orange-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
      { name: "PostgreSQL", icon: <span>🐘</span>, color: "text-blue-700" },
    ],
    Tools: [
      { name: "GitHub", icon: <span>🐙</span>, color: "text-white" },
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "Postman", icon: <span>📬</span>, color: "text-orange-500" },
      { name: "VS Code", icon: <span>🖥️</span>, color: "text-blue-500" },
    ],
    Concepts: [
      { name: "OOPs", icon: <span>🧩</span>, color: "text-pink-500" },
      {
        name: "Data Structures & Algorithms",
        icon: <span>📊</span>,
        color: "text-yellow-500",
      },
      { name: "REST APIs", icon: <span>🌐</span>, color: "text-cyan-400" },
      { name: "SDLC", icon: <span>🛠️</span>, color: "text-green-400" },
      {
        name: "Agile Methodology",
        icon: <span>⚡</span>,
        color: "text-purple-400",
      },
    ],
    "Soft Skills": [
      {
        name: "Problem Solving",
        icon: <span>🧠</span>,
        color: "text-yellow-400",
      },
      { name: "Communication", icon: <span>💬</span>, color: "text-cyan-400" },
      { name: "Leadership", icon: <span>👑</span>, color: "text-orange-500" },
      {
        name: "Team Collaboration",
        icon: <span>🤝</span>,
        color: "text-green-400",
      },
    ],
  };

  return (
    <main className="px-6 md:px-20 py-24 max-w-6xl">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Skills</h1>
      {/* Elite Intro */}
      <p className="text-slate-300 mb-12 max-w-3xl">
        Showcasing the cutting-edge technologies and tools I leverage to
        architect, develop, and optimize robust, scalable, and high-performance
        software solutions.
      </p>

      {/* Floating Icons
      <div className="relative h-64 flex flex-wrap justify-center gap-8 mb-10">
        {Object.entries(skills).map(([_, items]) =>
          items.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-drift"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {skill.icon}
            </div>
          ))
        )}
      </div> */}

      {/* Skill Sections */}
      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold mb-4 text-white">
              {category}
            </h2>
            <div className="flex flex-wrap gap-4">
              {items.map((skill, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={badgeVariant}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full text-slate-200 
                             hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition transform cursor-pointer shadow-md hover:shadow-cyan-400/50"
                >
                  <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
