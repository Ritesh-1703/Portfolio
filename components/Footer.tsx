import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/Ritesh-1703",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "www.linkedin.com/in/ritesh-dhamale",
    label: "LinkedIn",
  },
  // {
  //   icon: <SiLeetcode size={18} />,
  //   href: "https://leetcode.com/riteshdhamale",
  //   label: "LeetCode",
  // },
  {
    icon: <FaEnvelope size={18} />,
    href: "mailto:ritesh.dhamal17@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-slate-800 bg-black/40 backdrop-blur-xl">
      {/* Gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left — Identity */}
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Ritesh Dhamale
            </h3>
            <p className="text-slate-400 text-sm mt-1 leading-relaxed">
              Mobile & Full Stack Developer — building production apps with
              Flutter, Android, Spring Boot, and React.js.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center — Nav links */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:ritesh.dhamale17@gmail.com"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition"
                >
                  ritesh.dhamale17@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/ritesh-dhamale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition"
                >
                  linkedin.com/in/riteshdhamale
                </a>
              </li>
              <li className="text-sm text-slate-500">
                Pune, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Ritesh Dhamale. All rights reserved.
          </p>
          <p>Built with Next.js · Tailwind CSS · Clean Architecture</p>
        </div>
      </div>
    </footer>
  );
}
