"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I’m <span className="text-cyan-400">Ritesh Dhamale</span>
        <br />
        Full Stack Developer | Research-Driven System Builder
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg text-slate-300 max-w-2xl"
      >
        I design and build scalable, secure, and user-centric web applications
        with a strong focus on clean architecture, performance, and real-world
        impact. I enjoy solving complex problems by turning ideas into reliable,
        production-ready digital solutions.
      </motion.p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          View My Work
        </Link>
        <a
          href="/resume.pdf"
          className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
