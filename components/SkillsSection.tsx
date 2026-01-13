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
} from "react-icons/si";

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
  | "C";

export default function SkillsSection() {
  const skills: SkillName[] = [
    "Java",
    "JavaScript",
    "TypeScript",
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

// import { FaJava, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiNextdotjs,
//   SiSpringboot,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiPostgresql,
//   SiTailwindcss,
//   SiC,
// } from "react-icons/si";

// type Skill =
//   | "Java"
//   | "JavaScript"
//   | "TypeScript"
//   | "React.js"
//   | "Next.js"
//   | "Spring Boot"
//   | "Node.js"
//   | "Express.js"
//   | "MongoDB"
//   | "MySQL"
//   | "PostgreSQL"
//   | "Tailwind CSS"
//   | "Python"
//   | "C";

// const skills: Skill[] = [
//   "Java",
//   "JavaScript",
//   "TypeScript",
//   "React.js",
//   "Next.js",
//   "Spring Boot",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "MySQL",
//   "PostgreSQL",
//   "Tailwind CSS",
//   "Python",
//   "C",
// ];

// const skillIcons: Record<Skill, JSX.Element> = {
//   Java: <FaJava size={50} className="text-orange-600 animate-float" />,
//   JavaScript: (
//     <SiJavascript size={50} className="text-yellow-400 animate-float" />
//   ),
//   TypeScript: (
//     <SiTypescript size={50} className="text-blue-500 animate-float" />
//   ),
//   "React.js": <FaReact size={50} className="text-cyan-400 animate-spin-slow" />,
//   "Next.js": <SiNextdotjs size={50} className="text-white animate-float" />,
//   "Spring Boot": (
//     <SiSpringboot size={50} className="text-green-600 animate-float" />
//   ),
//   "Node.js": <FaNodeJs size={50} className="text-green-500 animate-float" />,
//   "Express.js": <SiExpress size={50} className="text-gray-300 animate-float" />,
//   MongoDB: <SiMongodb size={50} className="text-green-400 animate-float" />,
//   MySQL: <SiMysql size={50} className="text-blue-600 animate-float" />,
//   PostgreSQL: <SiPostgresql size={50} className="text-sky-500 animate-float" />,
//   "Tailwind CSS": (
//     <SiTailwindcss size={50} className="text-cyan-400 animate-float" />
//   ),
//   Python: <FaPython size={50} className="text-yellow-400 animate-float" />,
//   C: <SiC size={50} className="text-gray-400 animate-float" />,
// };

// export default function SkillsSection() {
//   return (
//     <section className="py-10">
//       <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
//         Skills
//       </h2>

//       {/* Floating Icons */}
//       <div className="relative h-64 flex flex-wrap justify-center gap-8 mb-10">
//         {skills.map((skill, index) => (
//           <div
//             key={skill}
//             className="animate-drift"
//             style={{ animationDelay: `${index * 0.5}s` }}
//           >
//             {skillIcons[skill]}
//           </div>
//         ))}
//       </div>

//       {/* Skill Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {skills.map((skill) => (
//           <div
//             key={skill}
//             className="border border-slate-700 rounded-lg p-4 text-center
//                  hover:border-cyan-400 hover:scale-105 transition
//                  shadow-md bg-slate-900"
//           >
//             <p className="text-white font-medium">{skill}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
