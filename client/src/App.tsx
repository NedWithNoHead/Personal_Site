import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Function to check which section is currently in view
  const checkScroll = () => {
    const sections = ["home", "about", "skills", "timeline", "projects", "contact"];
    for (const section of [...sections].reverse()) {
      const el = document.getElementById(section);
      if (el && window.scrollY >= el.offsetTop - 100) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check initially
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="font-sans antialiased bg-background text-foreground transition-colors min-h-screen">
        <Navbar activeSection={activeSection} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
