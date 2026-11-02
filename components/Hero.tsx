"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaAndroid, FaReact, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiSpringboot, SiFirebase } from "react-icons/si";

const stack = [
  { icon: <SiFlutter size={18} />, label: "Flutter" },
  { icon: <FaAndroid size={18} />, label: "Android" },
  { icon: <FaReact size={18} />, label: "React.js" },
  { icon: <SiSpringboot size={18} />, label: "Spring Boot" },
  { icon: <FaNodeJs size={18} />, label: "Node.js" },
  { icon: <SiFirebase size={18} />, label: "Firebase" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-6 w-fit"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
        </span>
        <span className="text-sm text-slate-400">
          Software Developer Intern @{" "}
          <span className="text-cyan-400 font-medium">
            HFP Technology Pvt. Ltd.
          </span>
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-cyan-400">Ritesh Dhamale</span>
        <br />
        <span className="text-2xl md:text-4xl text-slate-300 font-semibold">
          Mobile & Full Stack Developer
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed"
      >
        I build production-ready mobile and web applications — from{" "}
        <span className="text-white font-medium">Flutter</span> &{" "}
        <span className="text-white font-medium">Android (Kotlin)</span> apps to{" "}
        <span className="text-white font-medium">Spring Boot</span> &{" "}
        <span className="text-white font-medium">React.js</span> platforms. I've
        shipped apps live on the{" "}
        <span className="text-white font-medium">Play Store & App Store</span>{" "}
        and care deeply about clean architecture, real-world impact, and
        scalable system design.
      </motion.p>

      {/* Stack pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {stack.map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-1.5 text-xs text-slate-300 border border-slate-700 
                       rounded-full px-3 py-1 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <span className="text-cyan-400">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <Link
          href="/projects"
          className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold 
                     hover:bg-cyan-400 transition"
        >
          View My Work
        </Link>
        <a
          href="/resume.pdf"
          className="border border-cyan-400 text-slate-200 px-6 py-3 rounded-lg 
                     hover:bg-cyan-400 hover:text-black transition"
        >
          Download Resume
        </a>
        <Link
          href="/contact"
          className="border border-slate-600 text-slate-400 px-6 py-3 rounded-lg 
                     hover:border-slate-400 hover:text-white transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
