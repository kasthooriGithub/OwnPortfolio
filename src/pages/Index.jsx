import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navigation />
    <HeroSection />
    <SectionDivider />
    <SectionTransition direction="up">
      <AboutSection />
    </SectionTransition>
    <SectionDivider />
    <SectionTransition direction="left" delay={0.1}>
      <SkillsSection />
    </SectionTransition>
    <SectionDivider />
    <SectionTransition direction="scale" delay={0.1}>
      <ProjectsSection />
    </SectionTransition>
    <SectionDivider />
    <SectionTransition direction="right" delay={0.1}>
      <EducationSection />
    </SectionTransition>
    <SectionDivider />
    <SectionTransition direction="up" delay={0.1}>
      <ContactSection />
    </SectionTransition>
    <SectionTransition direction="up" delay={0.2}>
      <Footer />
    </SectionTransition>
  </div>
);

export default Index;
