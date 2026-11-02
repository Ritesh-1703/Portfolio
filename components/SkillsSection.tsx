import { FaJava, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiC,
  SiKotlin,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type SkillName =
  | "Java"
  | "JavaScript"
  | "TypeScript"
  | "React.js"
  | "Next.js"
  | "Spring Boot"
  | "Node.js"
  | "Express.js"
  | "MongoDB"
  | "MySQL"
  | "PostgreSQL"
  | "Tailwind CSS"
  | "Python"
  | "C"
  | "Kotlin"
  | "React Native";

export default function SkillsSection() {
  const skills: SkillName[] = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "React Native",
    "React.js",
    "Next.js",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Python",
    "C",
  ];

  const skillIcons: Record<SkillName, React.ReactNode> = {
    Java: <FaJava size={40} className="mx-auto text-orange-600" />,
    JavaScript: <SiJavascript size={40} className="mx-auto text-yellow-400" />,
    TypeScript: <SiTypescript size={40} className="mx-auto text-blue-500" />,
    "React.js": (
      <FaReact size={40} className="mx-auto text-cyan-400 animate-spin-slow" />
    ),
    "Next.js": <SiNextdotjs size={40} className="mx-auto text-white" />,
    "Spring Boot": (
      <SiSpringboot size={40} className="mx-auto text-green-600" />
    ),
    "Node.js": <FaNodeJs size={40} className="mx-auto text-green-500" />,
    "Express.js": <SiExpress size={40} className="mx-auto text-gray-300" />,
    MongoDB: <SiMongodb size={40} className="mx-auto text-green-400" />,
    MySQL: <SiMysql size={40} className="mx-auto text-blue-600" />,
    PostgreSQL: <SiPostgresql size={40} className="mx-auto text-sky-500" />,
    "Tailwind CSS": (
      <SiTailwindcss size={40} className="mx-auto text-cyan-400" />
    ),
    Python: <FaPython size={40} className="mx-auto text-yellow-400" />,
    C: <SiC size={40} className="mx-auto text-gray-400" />,
    Kotlin: <SiKotlin size={40} className="mx-auto text-purple-500" />,
    "React Native": (
      <TbBrandReactNative size={40} className="mx-auto text-blue-400" />
    ),
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-slate-700 rounded-xl px-4 py-4 text-center 
                       hover:border-cyan-400 hover:scale-105 transition duration-300"
          >
            <div className="mb-3 flex justify-center">{skillIcons[skill]}</div>
            <p className="text-sm text-slate-300">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
