export default function Architecture() {
  const layers = [
    {
      label: "Mobile",
      detail: "Flutter (Dart) · Android Native (Kotlin/Java) · React Native",
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      label: "Frontend",
      detail: "React.js · Next.js · Tailwind CSS · Bootstrap",
      color: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      label: "Backend",
      detail: "Spring Boot (Java) · Node.js · Express.js · REST APIs",
      color: "text-green-400",
      border: "border-green-500/30",
    },
    {
      label: "Database",
      detail: "MySQL · PostgreSQL · MongoDB · Firebase Firestore",
      color: "text-yellow-400",
      border: "border-yellow-500/30",
    },
    {
      label: "Auth & Security",
      detail: "Firebase Auth · Google Sign-In · JWT · RBAC",
      color: "text-red-400",
      border: "border-red-500/30",
    },
    {
      label: "DevOps & Tools",
      detail:
        "Git · GitHub · Android Studio · Play Store · App Store · Postman",
      color: "text-slate-300",
      border: "border-slate-600/50",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">
        System Architecture
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        How I structure applications — from device to database.
      </p>

      <div className="border border-slate-700 rounded-2xl p-6 space-y-4">
        {layers.map((layer, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
          >
            <span
              className={`text-sm font-semibold w-36 shrink-0 ${layer.color} border ${layer.border} rounded-full px-3 py-1 text-center`}
            >
              {layer.label}
            </span>
            <span className="text-slate-300 text-sm leading-relaxed">
              {layer.detail}
            </span>
          </div>
        ))}

        <div className="pt-4 border-t border-slate-700 text-slate-400 text-sm leading-relaxed">
          I follow <span className="text-white">Clean Architecture</span> and{" "}
          <span className="text-white">MVVM</span> patterns on mobile, and a
          clear separation of concerns on the web — ensuring every layer is
          independently testable, replaceable, and scalable.
        </div>
      </div>
    </section>
  );
}
