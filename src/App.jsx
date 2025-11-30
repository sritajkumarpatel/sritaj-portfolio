import React, { useState } from "react";
// removed duplicate import
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import GithubRepos from "./components/GithubRepos";
import MediumArticles from "./components/MediumArticles";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Quality Engineer",
    "AI Enthusiast",
    "AI Engineer",
    "Test Automation Specialist",
    "Scrum Master",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const techStacks = {
    "AI & LLM": [
      "LangChain",
      "Deepeval",
      "RAG",
      "Model Context Protocol (MCP)",
      "OpenAI",
      "Local LLMs",
      "Azure AI",
    ],
    "Test Automation": [
      "Selenium",
      "Playwright",
      "TestCafe",
      "Cypress",
      "REST Assured",
      "TestNG",
      "Cucumber",
    ],
    "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript"],
    "Frameworks & Libraries": [
      "Spring Boot",
      "ReactJS",
      "Node.js",
      "Hibernate",
      "JPA",
    ],
    "CI/CD & DevOps": [
      "Jenkins",
      "GitLab CI",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
    ],
    "Cloud & Platforms": [
      "Microsoft Azure",
      "AWS",
      "GitHub Copilot",
      "Microsoft Copilot",
    ],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "H2", "Redis"],
    "Testing Tools": [
      "Postman",
      "JMeter",
      "SoapUI",
      "Selenium Grid",
      "BrowserStack",
    ],
    "Monitoring & Reporting": [
      "Elasticsearch",
      "Kibana",
      "Extent Reports",
      "Allure",
      "Maven Cucumber Reports",
    ],
    "Agile & Collaboration": [
      "Scrum",
      "Kanban",
      "JIRA",
      "Confluence",
      "Azure Boards",
      "Git",
      "Bitbucket",
    ],
  };

  {
    /* Hero Section */
  }
  {
    /* Hero component is used instead of inline markup above */
  }
  const mediumArticles = [
    {
      title: "RAG Facts: How LangChain Retrievers Streamline LLM Workflows",
      description:
        "Deep dive into how LangChain retrievers optimize RAG implementations and improve LLM response quality",
      link: "https://blog.gopenai.com/rag-facts-how-langchain-retrievers-streamline-llm-workflows-df7c94c5dc63",
      date: "2025",
    },
    {
      title: "RAG Facts: Understanding Why LLMs Need the Question Too",
      description:
        "Exploring the importance of query context in retrieval-augmented generation systems",
      link: "https://blog.gopenai.com/rag-facts-retrieval-understanding-why-llms-need-the-question-too-b519de103aea",
      date: "2025",
    },
    {
      title:
        "The Evolution of Java Interfaces: New Features for Modern Developers",
      description:
        "Comprehensive guide to Java interface evolution, covering default methods, functional programming, and sealed types",
      link: "https://medium.com/@sritajp/the-evolution-of-java-interfaces-new-features-for-the-modern-developer-test-engineers-7de183af274b",
      date: "Oct 2024",
    },
    {
      title: "Optimizing Web Applications for Test Automation",
      description:
        "Best practices for developers to build applications that are easier to test and automate",
      link: "https://medium.com/@sritajp/optimizing-web-applications-for-test-automation-best-practices-for-developers-e6d5163bc097",
      date: "2024",
    },
    {
      title:
        "Breaking Away from Retro Boards: My Experiment with Open Discussions",
      description:
        "An innovative approach to sprint retrospectives that encourages authentic team conversations",
      link: "https://medium.com/@sritajp/breaking-away-from-retro-boards-my-experiment-with-open-discussions-09951e517063",
      date: "2024",
    },
    {
      title:
        "Finding Your True Purpose: Applying Ikigai to Life and Work in Tech",
      description:
        "Exploring the Japanese concept of Ikigai and its application to finding fulfillment in tech careers",
      link: "https://medium.com/@sritajp/finding-your-true-purpose-applying-ikigai-to-life-and-work-in-tech-82a253d1ea26",
      date: "2024",
    },
    {
      title:
        "Balancing Connection and Objectivity: The Scrum Master's Challenge",
      description:
        "Navigating the delicate balance between team relationships and maintaining professional objectivity",
      link: "https://medium.com/@sritajp/balancing-connection-and-objectivity-the-scrum-masters-challenge-bc6b1202578f",
      date: "2024",
    },
    {
      title: "Why Emotional Intelligence Matters for Scrum Masters",
      description:
        "Understanding the critical role of EQ in effective Scrum Master leadership and team dynamics",
      link: "https://medium.com/@sritajp/why-does-emotional-intelligence-matter-for-scrum-masters-4e8b1bf17907",
      date: "2024",
    },
    {
      title: "Persisting Values with React's useRef Hook",
      description:
        "Managing DOM interactions and persisting values across renders using React's useRef hook",
      link: "https://medium.com/@sritajp/persisting-values-and-managing-dom-interactions-with-reacts-useref-hook-b053df9ac2ca",
      date: "2024",
    },
    {
      title: "Mastering Side Effects with React's useEffect Hook",
      description:
        "Comprehensive guide to managing side effects in functional components using useEffect",
      link: "https://medium.com/@sritajp/mastering-side-effects-in-functional-components-with-reacts-useeffect-hook-1f5bcdc74577",
      date: "2024",
    },
    {
      title: "State Management Made Easy with React's useState Hook",
      description:
        "A practical guide to managing component state effectively with React's useState hook",
      link: "https://medium.com/@sritajp/state-management-made-easy-with-reacts-usestate-hook-9f95a137527c",
      date: "2024",
    },
  ];

  const githubRepos = [
    {
      title: "LangChain Retrievers 2025",
      description:
        "Project demonstrating LangChain Retriever capabilities for advanced RAG implementations",
      tech: ["Python", "LangChain", "AI", "RAG"],
      link: "https://github.com/sritajkumarpatel/learn_langchain_retrievers_2025",
      stars: 0,
    },
    {
      title: "LLM Testing 2025",
      description:
        "Project demonstrating LLM testing using Deepeval with OpenAI and local LLMs as judge",
      tech: ["Python", "Deepeval", "OpenAI", "LLM Testing"],
      link: "https://github.com/sritajkumarpatel/learn_llmtesting_2025",
      stars: 0,
    },
    {
      title: "Local RAG Demo 2025",
      description:
        "Project demonstrating RAG capabilities with local LLM models",
      tech: ["Python", "RAG", "Local LLM", "AI"],
      link: "https://github.com/sritajkumarpatel/learn_local_rag_demo_2025",
      stars: 0,
    },
    {
      title: "Model Context Protocol (MCP) 2025",
      description:
        "Repository for learning Model Context Protocol - the new standard for LLM integrations",
      tech: ["Python", "MCP", "AI", "LLM"],
      link: "https://github.com/sritajkumarpatel/learn_mcp_2025",
      stars: 0,
    },
  ];

  const certifications = [
    {
      name: "Microsoft Certified: GitHub Copilot",
      issuer: "Microsoft",
      date: "Issued Sep 2025, Expires Sep 2027",
      credential: "8E66B2A94F431888",
      skills: ["Microsoft Copilot", "GitHub Copilot"],
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Issued Mar 2025",
      credential: "64DCC57895AAAEDA",
      skills: ["AI", "Azure AI"],
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Issued Mar 2025",
      credential: "2DADC406D25FA2D2",
      skills: ["Microsoft Azure"],
    },
    {
      name: "DevOps Foundation",
      issuer: "DEVOPS INSTITUTE",
      date: "Issued Oct 2024, Expires Oct 2027",
      credential: "GR53300157S5P",
      skills: ["DevOps"],
    },
    {
      name: "Professional Scrum Master™ I (PSM I)",
      issuer: "Scrum.org",
      date: "Issued Jan 2024",
      skills: ["Scrum", "Agile", "Scrum Master"],
    },
    {
      name: "SDC18 - PG Diploma in Software Development (Full Stack) May'20",
      issuer: "International Institute of Information Technology Bangalore",
      date: "Issued Sep 2021",
      credential: "38226393",
      skills: [
        "Software Development",
        "ReactJs",
        "Spring Boot",
        "Java",
        "JavaScript",
      ],
    },
    {
      name: "Certified ScrumMaster® (CSM®)",
      issuer: "Scrum Alliance",
      date: "Issued Mar 2023, Expired Mar 2025",
      credential: "1759400",
      skills: ["Scrum Master", "Agile", "Scrum"],
    },
  ];

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
        <Certifications certifications={certifications} />
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

export default Portfolio;
