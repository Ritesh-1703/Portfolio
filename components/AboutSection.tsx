"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
        About Me
      </h1>
      <p className="text-slate-300 leading-7 max-w-3xl">
        I am a Full Stack Developer and MCA student with hands-on experience in
        building end-to-end web applications using modern frontend and backend
        technologies. I focus on clean architecture, modular design, and
        scalability while solving real-world problems.
        <br />
        I believe good software is not just about working code, but about
        maintainability, performance, and long-term usability. I enjoy
        understanding the problem deeply before designing solutions.
        <br />
        <br />
        What sets me apart is my ability to think in terms of systems, not just
        screens. I focus on clean code, modular architecture, and scalability
        while solving real-world problems through technology.
      </p>
    </motion.section>
  );
}
