import React, { useState, useEffect } from "react";
// removed duplicate import
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import certifications from "./data/certifications.json";
import Experience from "./components/Experience";
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
    "Technical Architect & AI/LLM Engineer",
    "Quality Engineering & Automation",
    "AI for Test Automation",
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

  const experience = [
    {
      company: "DevOn",
      roles: [
        { title: "Technical Architect III", period: "March 2025 - Present" },
        {
          title: "Technical Architect II",
          period: "March 2024 - February 2025",
        },
        {
          title: "Associate Architect II",
          period: "March 2023 - February 2024",
        },
        {
          title: "Senior Principal Development Specialist",
          period: "February 2022 - February 2023",
        },
      ],
      duration: "3 years 10 months",
      current: true,
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Served as Scrum Master, facilitating Agile ceremonies and sprint execution",
        "Created and maintained Test Automation frameworks with latest tools",
        "Set up and monitored Jenkins pipelines for CI/CD",
        "Drove continuous improvement and innovation within teams",
      ],
      awards: [
        {
          name: "Breakthrough Achiever of the Year - 2024",
          description:
            "Recognition for exceptional innovation and contribution",
        },
      ],
    },
    {
      company: "Aurigo Software Technologies",
      roles: [
        {
          title: "Senior Software Developer - Test - 1",
          period: "July 2021 - February 2022",
        },
        {
          title: "Senior Software Engineer 1 - Quality",
          period: "January 2021 - July 2021",
        },
        {
          title: "Software Engineer 2 - Quality",
          period: "July 2020 - January 2021",
        },
        { title: "Quality Engineer", period: "July 2019 - June 2020" },
      ],
      duration: "2 years 8 months",
      current: false,
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Implemented POM pages and developed automation scripts",
        "Managed and led QE team for sprint release activities",
        "Designed test strategies and developed automation frameworks",
        "Conducted root cause analysis for legacy issues",
      ],
      awards: [
        {
          name: "Aurigo Spot Award - Q1 2021",
          description: "Recognition for exceptional contribution",
        },
        {
          name: "Aurigo Bravo Award - Q3 2019",
          description: "Outstanding performance and dedication",
        },
      ],
    },
    {
      company: "Unizen Technologies Pvt Ltd",
      roles: [
        { title: "Software Engineer", period: "August 2016 - July 2019" },
      ],
      duration: "3 years",
      current: false,
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Worked on IoT and Embedded Platforms domain",
        "Developed Automation frameworks using Selenium/Sikuli",
        "Performed functional and non-functional testing",
        "Collaborated with developers for iOS application debugging",
      ],
    },
    {
      company: "Inowits Technologies",
      roles: [
        { title: "Quality Analyst", period: "August 2015 - January 2016" },
      ],
      duration: "6 months",
      current: false,
      location: "India",
      highlights: [
        "Tested SAP ERP Application (Black Box Testing)",
        "Designed and executed Test Cases",
        "Contributed to PMO activities and project planning",
      ],
    },
  ];

  const claudeArtifacts = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <Hero
        titles={titles}
        titleIndex={titleIndex}
        setTitleIndex={setTitleIndex}
      />

      {/* Certifications Section */}
      {activeSection === "certifications" && (
        <Certifications certifications={certificationsWithLogos} />
      )}

      {activeSection === "experience" && <Experience experience={experience} />}

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
      <Footer />
    </div>
  );
};

export default App;
