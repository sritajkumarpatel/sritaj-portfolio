import React, { useState } from "react";
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
import aboutMe from "./data/aboutMe.json";
import awards from "./data/awards.json";
import projects from "./data/projects.json";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

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
        setActiveSection={setActiveSection}
        config={config}
      />

      <main className="flex-1 relative z-10">
        {/* Home - Hero + About + Awards */}
        {activeSection === "home" && (
          <>
            <Hero config={config} />
            <About
              experience={experience}
              mediumArticles={mediumArticles}
              aboutMe={aboutMe}
            />
            <Awards awards={awards} />
          </>
        )}

        {/* Other sections */}
        {activeSection === "about" && (
          <div className="pt-24">
            <About
              experience={experience}
              mediumArticles={mediumArticles}
              aboutMe={aboutMe}
            />
          </div>
        )}

        {activeSection === "experience" && (
          <div className="pt-24">
            <Experience experience={experience} />
          </div>
        )}

        {activeSection === "certifications" && (
          <div className="pt-24">
            <Certifications certifications={certificationsWithLogos} />
          </div>
        )}

        {activeSection === "tech" && (
          <div className="pt-24">
            <TechStack techStacks={techStacks} />
          </div>
        )}

        {activeSection === "github" && (
          <div className="pt-24">
            <GithubRepos repos={githubRepos} />
          </div>
        )}

        {activeSection === "articles" && (
          <div className="pt-24">
            <MediumArticles articles={mediumArticles} />
          </div>
        )}

        {activeSection === "visual" && (
          <div className="pt-24">
            <VisualConcepts />
          </div>
        )}

        {activeSection === "projects" && (
          <div className="pt-24">
            <Projects projects={projects} />
          </div>
        )}

        {activeSection === "awards" && (
          <div className="pt-24">
            <Awards awards={awards} />
          </div>
        )}
      </main>

      <Footer config={config} />
    </div>
  );
};

export default App;