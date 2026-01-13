import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import WhyHireMe from "../../components/WhyHireMe";
import Architecture from "../../components/Architecture";

export default function AboutPage() {
  return (
    <main className="px-6 md:px-20 py-24 space-y-20">
      <AboutSection />
      <SkillsSection />
      <Architecture />
      <WhyHireMe />
    </main>
  );
}
