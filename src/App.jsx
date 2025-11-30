import React, { useState, useEffect } from "react";
// removed duplicate import
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
import Footer from "./components/Footer";
const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const titles = [
    "Technical Architect at DevOn",
    "Quality Engineering",
    "Scrum Master",
    "AI Engineer in making",
    "Bug Fixer & Developer",
    "CI/CD & Automation Enthusiast",
    "Occasional Cloud Guy",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setTitleIndex((i) => (i + 1) % titles.length),
      6000
    );
    return () => clearInterval(t);
  }, []);
  // Note: certifications list is now loaded from `src/data/certifications.json`
  // techStacks is now loaded from `src/data/techStacks.json` (imported at top)

  {
    /* Hero Section */
  }
  {
    /* Hero component is used instead of inline markup above */
  }
  // mediumArticles are loaded from a JSON file so they can be updated programmatically.
  // Run `npm run update:medium` to refresh from your Medium feed (https://medium.com/feed/@sritajp).
  // The JSON file is located at `src/data/mediumArticles.json` and can also be edited manually.

  // githubRepos loaded from JSON so an update script can refresh it automatically
  // Run `npm run update:github` to refresh the repository list from GitHub

  // Certifications are loaded from `src/data/certifications.json` (imported at top)
  // If you need to override locally, edit `src/data/certifications.json` instead

  // Detect available local logo files (PNG/SVG) under src/assets/certifications and add URLs to the cert objects.
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
    // prefer logoUrl if provided in JSON for external or absolute URLs
    logo: c.logoUrl
      ? c.logoUrl
      : c.logoFile
        ? getLogoUrl(c.logoFile)
        : undefined,
  }));

  // Experience loaded from src/data/experience.json

  const claudeArtifacts = [];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <Hero
        titles={titles}
        titleIndex={titleIndex}
        setTitleIndex={setTitleIndex}
      />

      <main className="flex-1">
        {/* Certifications Section */}
        {activeSection === "certifications" && (
          <Certifications certifications={certificationsWithLogos} />
        )}

        {activeSection === "experience" && (
          <Experience experience={experience} />
        )}

        {activeSection === "tech" && <TechStack techStacks={techStacks} />}

        {activeSection === "github" && <GithubRepos repos={githubRepos} />}

        {activeSection === "articles" && (
          <MediumArticles articles={mediumArticles} />
        )}

        {activeSection === "projects" && <Projects />}

        {activeSection === "about" && (
          <About experience={experience} mediumArticles={mediumArticles} />
        )}

        {/* Footer */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
