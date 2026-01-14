"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FcBusinessman } from "react-icons/fc";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-cyan-400 gap-2"
        >
          <FcBusinessman size={24} />
          Ritesh Dhamale
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/about" className="hover:text-cyan-400 transition">
            About Me
          </Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-cyan-400 transition">
            Skills&Certification
          </Link>
          <Link href="/research" className="hover:text-cyan-400 transition">
            Research
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-6 pb-4 flex flex-col gap-3 bg-slate-950/90 backdrop-blur border-b border-slate-800">
          <Link href="/about" className="hover:text-cyan-400 transition">
            About Me
          </Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-cyan-400 transition">
            Skills & Certifications
          </Link>
          <Link href="/research" className="hover:text-cyan-400 transition">
            Research
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
