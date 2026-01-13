"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="px-6 md:px-20 py-24 max-w-5xl">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contact Me</h1>

      <p className="text-slate-300 mb-10 max-w-2xl">
        I’m open to internships, full-time roles, freelance projects, and
        collaborations. If you think my profile matches your requirements, feel
        free to connect with me.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Email */}
        <a
          href="mailto:riteshdhamale@gmail.com"
          className="border border-slate-700 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-400 glow transition"
        >
          <FaEnvelope className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-sm text-slate-400">Email</p>
            <p className="text-slate-200">riteshdhamale@gmail.com</p>
          </div>
        </a>

        {/* Phone */}

        <a
          href="tel:+919552193740"
          className="group border border-slate-700 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-400 glow transition"
        >
          <FaPhone className="text-cyan-400 text-2xl transition-transform duration-300 rotate-100" />

          <div>
            <p className="text-sm text-slate-400">Phone</p>
            <p className="text-slate-200">+91 9552193740</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ritesh-dhamale"
          target="_blank"
          className="border border-slate-700 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-400 glow transition"
        >
          <FaLinkedin className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="text-slate-200">linkedin.com/in/ritesh-dhamale</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Ritesh-1703"
          target="_blank"
          className="border border-slate-700 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-400 glow transition"
        >
          <FaGithub className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="text-slate-200">github.com/Ritesh-1703</p>
          </div>
        </a>
      </div>

      <p className="text-slate-400 mt-12">
        I usually respond within 24 hours. Looking forward to connecting with
        you.
      </p>
    </main>
  );
}
