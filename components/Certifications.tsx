"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Structures & Algorithms using Java",
    provider: "NPTEL",
    skills: "DSA, Java",
    image: "/certificates/DS.png",
  },
  {
    title: "Ethical Hacking",
    provider: "NPTEL",
    skills: "Cyber Security, Networking",
    image: "/certificates/EH.png",
  },
  {
    title: "Introduction to Spring Framework 101",
    provider: "Simple Learn",
    skills: "Spring Boot",
    image: "/certificates/SF.png",
  },
  {
    title: "Python Programming",
    provider: "HCL GUVI",
    skills: "Python",
    image: "/certificates/python.png",
  },
  {
    title: "React and Redux",
    provider: "Knowledge Gate",
    skills: "React.js, Redux",
    image: "/certificates/RR.png",
  },
];

export default function CertificationsSection() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 border border-slate-700 rounded-3xl overflow-hidden 
                       hover:border-cyan-400 transition group shadow-xl hover:shadow-cyan-400/30"
          >
            {/* Certificate Image */}
            <div className="h-64 md:h-72 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 border-t border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-400 mb-2">{cert.provider}</p>
              <p className="text-sm text-cyan-400">Key Skills: {cert.skills}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
