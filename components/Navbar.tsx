"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FcBusinessman } from "react-icons/fc";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-cyan-400 ">
          <FcBusinessman size={20} color="white" />
          Ritesh Dhamale
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:text-cyan-400 transition">
            About Me
          </Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>
          <Link href="/research" className="hover:text-cyan-400 transition">
            Research
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
