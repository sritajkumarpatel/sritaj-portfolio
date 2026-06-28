import React, { useState, useCallback, useEffect, useRef } from "react";
import config from "./config.json";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import certifications from "./data/certifications.json";
import Experience from "./components/Experience";
import experience from "./data/experience.json";
import TechStack from "./components/TechStack";
import techStacks from "./data/techStacks.json";
import GithubRepos from "./components/GithubRepos";
import githubRepos from "./data/githubRepos.json";
import MediumArticles from "./components/MediumArticles";
import mediumArticles from "./data/mediumArticles.json";
import Projects from "./components/Projects";
import About from "./components/About";
import Awards from "./components/Awards";
import VisualConcepts from "./components/VisualConcepts";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ProjectModal from "./components/ProjectModal";
import aboutMe from "./data/aboutMe.json";
import awards from "./data/awards.json";
import projects from "./data/projects.json";

const SECTION_IDS = [
  "hero",
  "about",
  "tech",
  "experience",
  "projects",
  "awards",
  "certifications",
  "github",
  "articles",
  "visual",
];

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef({});

  const handleOpenModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      const offsets = SECTION_IDS.map((id) => {
        const el = sectionRefs.current[id];
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 80) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      if (closest.id !== activeSection) {
        setActiveSection(closest.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const logoModules = import.meta.glob("./assets/certifications/*.{png,svg}", {
    query: "?url",
    import: "default",
    eager: true,
  });

  const getLogoUrl = (file) => {
    if (!file) return undefined;
    const matchKey = Object.keys(logoModules).find((k) => k.includes(file));
    return matchKey ? logoModules[matchKey] : undefined;
  };

  const certificationsWithLogos = certifications.map((c) => ({
    ...c,
    logo: c.logoUrl
      ? c.logoUrl
      : c.logoFile
        ? getLogoUrl(c.logoFile)
        : undefined,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary relative">
      <AnimatedBackground />

      <Nav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        config={config}
        scrollProgress={scrollProgress}
      />

      <main className="flex-1 relative z-10">
        <div ref={(el) => (sectionRefs.current["hero"] = el)}>
          <Hero config={config} />
        </div>

        <div ref={(el) => (sectionRefs.current["about"] = el)}>
          <About
            experience={experience}
            mediumArticles={mediumArticles}
            aboutMe={aboutMe}
          />
        </div>

        <div ref={(el) => (sectionRefs.current["tech"] = el)}>
          <TechStack techStacks={techStacks} />
        </div>

        <div ref={(el) => (sectionRefs.current["experience"] = el)}>
          <Experience experience={experience} />
        </div>

        <div ref={(el) => (sectionRefs.current["projects"] = el)}>
          <Projects projects={projects} onOpenModal={handleOpenModal} />
        </div>

        <div ref={(el) => (sectionRefs.current["awards"] = el)}>
          <Awards awards={awards} />
        </div>

        <div ref={(el) => (sectionRefs.current["certifications"] = el)}>
          <Certifications certifications={certificationsWithLogos} />
        </div>

        <div ref={(el) => (sectionRefs.current["github"] = el)}>
          <GithubRepos repos={githubRepos} />
        </div>

        <div ref={(el) => (sectionRefs.current["articles"] = el)}>
          <MediumArticles articles={mediumArticles} />
        </div>

        <div ref={(el) => (sectionRefs.current["visual"] = el)}>
          <VisualConcepts />
        </div>
      </main>

      <Footer config={config} />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
