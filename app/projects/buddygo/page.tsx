export default function BuddyGoPage() {
  return (
    <main className="px-6 md:px-20 py-24 space-y-8 max-w-4xl">
      <div>
        <p className="text-slate-400 text-sm mb-2">Feb 2026 – May 2026</p>
        <h1 className="text-4xl font-bold text-cyan-400">
          BuddyGo — Travel Buddy Finder
        </h1>
        <p className="text-sm text-cyan-400 mt-1">
          Flutter · Dart · Firebase · Google Maps · REST APIs
        </p>
      </div>

      <p className="text-slate-300 max-w-3xl leading-7">
        BuddyGo is a cross-platform Flutter application built for solo travelers
        who want to find verified, compatible travel partners. The app
        prioritizes user safety with identity verification and privacy-first
        anonymous messaging so users can connect without exposing personal
        contact details.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Problem Statement
        </h2>
        <p className="text-slate-300 leading-7">
          Solo travelers often struggle to find trustworthy travel companions.
          Existing social platforms lack travel-specific matching, verified
          identities, and the privacy controls needed for strangers to safely
          connect and plan trips together.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Solution</h2>
        <p className="text-slate-300 leading-7">
          A dedicated travel-companion platform where users can create public or
          private trip listings, browse matching travelers, and communicate
          through anonymous group chats — all before deciding to share personal
          information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Tech Stack
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Framework: Flutter (Dart)</li>
          <li>Backend & Auth: Firebase (Firestore, Auth, Cloud Messaging)</li>
          <li>Maps & Location: Google Maps SDK</li>
          <li>APIs: REST APIs for trip data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Public and private trip creation with detailed itinerary info</li>
          <li>User identity verification for trusted connections</li>
          <li>Anonymous group chat — no phone numbers exposed</li>
          <li>Travel partner discovery with filter & match</li>
          <li>Real-time notifications via Firebase Cloud Messaging</li>
          <li>Google Maps integration for trip route visualization</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Impact</h2>
        <p className="text-slate-300 leading-7">
          BuddyGo makes solo travel safer and more social by enabling verified,
          privacy-respecting connections — reducing the friction and risk of
          finding a travel companion through generic social platforms.
        </p>
      </section>
    </main>
  );
}
