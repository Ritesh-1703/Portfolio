"use client";

import { motion } from "framer-motion";

export default function ResearchPage() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <motion.main
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="px-6 md:px-20 py-24 space-y-16 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={cardVariant}>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
          Research & Publications
        </h1>
        <p className="text-slate-400 mt-3 max-w-3xl leading-relaxed">
          Academic contributions focused on digital governance, public safety,
          and technology-driven social impact, published in international
          journals.
        </p>
      </motion.div>

      {/* ================== Paper 1 ================== */}
      <motion.div
        variants={cardVariant}
        whileHover={{ y: -6, scale: 1.01 }}
        className="relative border border-slate-800 rounded-2xl p-8 bg-black/50 backdrop-blur-xl hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none" />

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          E-Gram Panchayat: Digital Transformation of Rural Governance
        </h2>

        <p className="text-slate-400 text-sm mb-4">
          International Journal of Sciences and Innovation Engineering (IJSCI) |
          ISSN: 3049-0251
          <br />
          Volume 2, Issue 6, June 2025
        </p>

        <p className="text-slate-300 mb-5 leading-relaxed">
          This research focuses on the design and implementation of a digital
          governance system to enhance transparency, accessibility, and
          efficiency in rural administration. It proposes a scalable, web-based
          solution aligned with the Digital India initiative.
        </p>

        <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
          <li>e-Governance and rural digitization focus</li>
          <li>System architecture design & impact analysis</li>
          <li>Scalable and secure governance model</li>
          <li>Aligned with Digital India vision</li>
        </ul>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate-400">
            <span className="text-white">Paper ID:</span> 244139142829
          </p>

          <a
            href="https://ijsci.com/index.php/home/article/view/341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium text-sm"
          >
            View Published Paper →
          </a>
        </div>
      </motion.div>

      {/* ================== Paper 2 ================== */}
      <motion.div
        variants={cardVariant}
        whileHover={{ y: -6, scale: 1.01 }}
        className="relative border border-slate-800 rounded-2xl p-8 bg-black/50 backdrop-blur-xl hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none" />

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Combating Drunk Driving: Evaluating Prevention Methods and Public
          Awareness in India
        </h2>

        <p className="text-slate-400 text-sm mb-4">
          International Journal of Sciences and Innovation Engineering (IJSCI) |
          ISSN: 3049-0251
          <br />
          Volume 2, Issue 10, 2025
        </p>

        <p className="text-slate-300 mb-5 leading-relaxed">
          This paper critically evaluates drunk driving prevention strategies in
          India, analyzing legal frameworks, enforcement challenges,
          technological interventions, and public awareness campaigns. It
          highlights the importance of multi-layered strategies integrating law
          enforcement, technology, and education.
        </p>

        <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
          <li>Motor Vehicles Act & enforcement policy analysis</li>
          <li>Public awareness and behavioral change campaigns</li>
          <li>Ignition interlock devices & technological interventions</li>
          <li>National traffic data & case study evaluation</li>
          <li>Focus on road safety & public health impact</li>
        </ul>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate-400">
            <span className="text-white">Paper ID:</span> 245587476128
          </p>

          <span className="text-cyan-400 text-sm font-medium">
            Published in IJSCI – 2025
          </span>
        </div>
      </motion.div>
    </motion.main>
  );
}
