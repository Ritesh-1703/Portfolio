"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FcBusinessman } from "react-icons/fc";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

      <div className="backdrop-blur-2xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white hover:text-cyan-400 transition"
          >
            <FcBusinessman size={28} />
            <span className="text-shine">Ritesh Dhamale</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-10 text-sm font-medium">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group transition ${
                    active ? "text-cyan-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              );
            })}

            <ThemeToggle />
          </div>

          {/* Mobile Button */}
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
          <div className="sm:hidden px-6 pb-6 pt-4 flex flex-col gap-5 bg-black/70 backdrop-blur-2xl border-t border-white/10 text-sm">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
