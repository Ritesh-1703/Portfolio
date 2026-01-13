export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-slate-800 bg-black/40 backdrop-blur-xl">
      {/* Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white tracking-wide">
            Ritesh Dhamale
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Software Developer • Full Stack Engineer • Research Enthusiast
          </p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            Architecting scalable systems with precision, performance & passion.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Built with Next.js, Tailwind CSS & clean architecture principles.
          </p>
        </div>
      </div>
    </footer>
  );
}
