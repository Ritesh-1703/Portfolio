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
        I'm a Software Developer and MCA student with hands-on industry
        experience building production-grade mobile and web applications. During
        my internship at HFP Technology, I shipped two live apps —{" "}
        <span className="text-white font-medium">Ekspans</span>, a
        cross-platform B2B social networking app, and{" "}
        <span className="text-white font-medium">Wellness Center Club</span>, a
        role-based Android wellness platform — both deployed to the Google Play
        Store and Apple App Store.
      </p>
      <p className="text-slate-300 leading-7 max-w-3xl mt-4">
        My core stack spans Flutter, Android (Kotlin), React.js, Next.js, Spring
        Boot, and Node.js — with solid experience in Firebase, REST APIs, and
        relational and NoSQL databases. I care about clean architecture, MVVM
        patterns, and writing code that scales and stays maintainable.
      </p>
      <p className="text-slate-300 leading-7 max-w-3xl mt-4">
        Beyond development, I think in systems — from GPS-based activity
        tracking and real-time chat to role-based access control and app release
        management. I enjoy solving problems that have real-world impact, and I
        bring the same rigour to personal projects like{" "}
        <span className="text-white font-medium">BuddyGo</span> and{" "}
        <span className="text-white font-medium">E-Grampanchayat</span> as I do
        to professional work.
      </p>
    </motion.section>
  );
}
