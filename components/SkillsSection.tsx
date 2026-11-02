import { FaJava, FaReact, FaNodeJs, FaAndroid } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiTailwindcss,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "Kotlin",
    icon: <SiKotlin size={40} className="mx-auto text-purple-500" />,
  },
  {
    name: "Java",
    icon: <FaJava size={40} className="mx-auto text-orange-500" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={40} className="mx-auto text-cyan-400" />,
  },
  {
    name: "Android",
    icon: <FaAndroid size={40} className="mx-auto text-green-400" />,
  },
  {
    name: "React.js",
    icon: (
      <FaReact size={40} className="mx-auto text-cyan-400 animate-spin-slow" />
    ),
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="mx-auto text-white" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={40} className="mx-auto text-green-500" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} className="mx-auto text-green-400" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="mx-auto text-yellow-400" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} className="mx-auto text-blue-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="mx-auto text-green-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} className="mx-auto text-sky-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="mx-auto text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="mx-auto text-yellow-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="mx-auto text-teal-400" />,
  },
];

export default function SkillsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">Core Skills</h2>
      <p className="text-slate-400 text-sm mb-6">
        Technologies I work with professionally and in production.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="border border-slate-700 rounded-xl px-3 py-4 text-center
                       hover:border-cyan-400 hover:scale-105 transition duration-300"
          >
            <div className="mb-3 flex justify-center">{skill.icon}</div>
            <p className="text-xs text-slate-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
