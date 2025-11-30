import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BookOpen,
  Code,
  Zap,
} from "lucide-react";

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
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sritaj Patel
          </h1>
          <div className="nav-right flex gap-6">
            {[
              "about",
              "experience",
              "certifications",
              "tech",
              "github",
              "articles",
              "projects",
            ].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-all ${
                  activeSection === section
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {section === "experience" ? "IT Experience" : section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent h-16 flex items-center justify-center transition-all duration-500">
              {titles[titleIndex]}
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Bridging Quality Engineering with AI Innovation
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Passionate about leveraging AI and LLMs to revolutionize software
              testing and quality practices. Combining 10 years of QE expertise
              with cutting-edge AI technologies to build intelligent testing
              solutions and drive continuous innovation in Agile environments.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sritaj-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:sritajpatel@outlook.com"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all"
              >
                <Mail size={20} />
                Email
              </a>
              {/* Phone number removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {activeSection === "certifications" && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">
              Licenses & Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 mb-1">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
                      {cert.credential && (
                        <p className="text-gray-500 text-xs">
                          Credential ID: {cert.credential}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* IT Experience Section */}
      {activeSection === "experience" && (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">IT Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card experience-card bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-purple-300 mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-gray-400 mb-1">
                        {exp.duration} {exp.current && "• Current"}
                      </p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    {exp.current && (
                      <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mb-4 space-y-2">
                    {exp.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="flex justify-between items-center py-2 border-l-2 border-purple-500/30 pl-4"
                      >
                        <span className="text-lg font-semibold text-purple-200">
                          {role.title}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {role.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">
                      Key Highlights:
                    </h5>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-gray-300 text-sm">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.awards && exp.awards.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <h5 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                        🏆 Awards & Recognition
                      </h5>
                      <div className="space-y-2">
                        {exp.awards.map((award, aIndex) => (
                          <div
                            key={aIndex}
                            className="bg-yellow-600/10 rounded-lg p-3 border border-yellow-500/20"
                          >
                            <p className="text-yellow-300 font-semibold text-sm">
                              {award.name}
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                              {award.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      {activeSection === "tech" && (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-purple-400" size={32} />
              <h3 className="text-3xl font-bold">Tech Stack</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStacks).map(([category, skills]) => (
                <div
                  key={category}
                  className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <h4 className="text-lg font-semibold mb-4 text-purple-400">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GitHub Repos Section */}
      {activeSection === "github" && (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Github className="text-purple-400" size={32} />
              <h3 className="text-3xl font-bold">GitHub Repositories</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {githubRepos.map((repo, index) => (
                <div
                  key={index}
                  className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
                >
                  <h4 className="text-xl font-semibold mb-3 text-purple-300">
                    {repo.title}
                  </h4>
                  <p className="text-gray-400 mb-4">{repo.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Repository <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Medium Articles Section */}
      {activeSection === "articles" && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-purple-400" size={32} />
              <h3 className="text-3xl font-bold">Medium Articles</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumArticles.map((article, index) => (
                <div
                  key={index}
                  className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
                >
                  <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    Read More <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Claude Artifacts Section */}
      {activeSection === "projects" && (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-purple-400" size={32} />
              <h3 className="text-3xl font-bold">AI-Powered Projects</h3>
            </div>
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur rounded-2xl p-16 border-2 border-purple-500/30">
                  <Zap className="text-purple-400 mx-auto mb-6" size={64} />
                  <h4 className="text-4xl font-bold text-purple-300 mb-4">
                    Coming Soon
                  </h4>
                  <p className="text-gray-400 text-lg mb-6 max-w-md">
                    Exciting AI-powered projects are in development. Stay tuned
                    for innovative tools combining test automation, LLM
                    capabilities, and agile practices!
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                      AI Test Generators
                    </span>
                    <span className="bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                      LLM Testing Tools
                    </span>
                    <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                      Agile Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">About Me</h3>
            <div className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20 mb-6">
              <p className="text-gray-300 mb-6">
                With 10 years of experience in software quality engineering, I'm
                on a mission to transform traditional testing practices by
                integrating AI and LLM technologies. My journey spans from
                manual testing to building sophisticated automation frameworks,
                and now pioneering AI-driven quality solutions.
              </p>

              <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
                Core Competencies
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-purple-300 font-semibold mb-2">
                    Test Automation & QE
                  </h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Selenium, Playwright, TestCafe automation</li>
                    <li>• Custom framework design & architecture</li>
                    <li>• CI/CD integration (Jenkins, GitLab, Azure DevOps)</li>
                    <li>• API testing with REST Assured</li>
                    <li>• Performance & security testing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-300 font-semibold mb-2">
                    Development & Technologies
                  </h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Full-stack development (Spring Boot, React)</li>
                    <li>• Python for AI/ML testing frameworks</li>
                    <li>• Cloud platforms (Azure, AWS)</li>
                    <li>• Database testing (SQL, MongoDB)</li>
                    <li>• Version control & collaboration (Git)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-300 font-semibold mb-2">
                    Agile & Leadership
                  </h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Certified Scrum Master (PSM I, CSM)</li>
                    <li>• Sprint planning & retrospective facilitation</li>
                    <li>• Team mentoring & coaching</li>
                    <li>• Cross-functional collaboration</li>
                    <li>• Quality advocacy & process improvement</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-300 font-semibold mb-2">
                    AI & Innovation
                  </h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• LLM testing with Deepeval</li>
                    <li>• RAG implementations with LangChain</li>
                    <li>• Model Context Protocol (MCP)</li>
                    <li>• GitHub Copilot & AI-assisted development</li>
                    <li>• Azure AI services integration</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
                Quality Philosophy
              </h4>
              <p className="text-gray-300 mb-4">
                I'm a strong advocate for{" "}
                <strong className="text-purple-300">Shift Left testing</strong>{" "}
                – catching issues early in the development lifecycle when
                they're easier and cheaper to fix. Quality isn't just about
                finding bugs; it's about building a culture where everyone owns
                quality. I believe in fostering collaboration between QA,
                development, and product teams to embed quality into every stage
                of the software delivery process.
              </p>
              <p className="text-gray-300 mb-4">
                My approach combines rigorous testing practices with pragmatic
                automation strategies. I focus on creating maintainable test
                suites that provide fast feedback while ensuring comprehensive
                coverage. By promoting continuous improvement and transparency,
                I help teams deliver reliable software that exceeds user
                expectations.
              </p>

              <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
                AI & LLM Journey
              </h4>
              <p className="text-gray-300 mb-4">
                The intersection of AI and software testing fascinates me. I'm
                actively exploring how LLMs and AI can revolutionize quality
                engineering – from intelligent test generation to automated bug
                analysis and predictive quality metrics. My recent work focuses
                on:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>
                  • <strong className="text-purple-300">RAG Systems:</strong>{" "}
                  Building Retrieval-Augmented Generation applications with
                  local LLMs to create context-aware testing assistants
                </li>
                <li>
                  •{" "}
                  <strong className="text-purple-300">
                    LLM Testing Frameworks:
                  </strong>{" "}
                  Developing robust testing methodologies using Deepeval to
                  ensure AI systems perform reliably and ethically
                </li>
                <li>
                  •{" "}
                  <strong className="text-purple-300">
                    Model Context Protocol:
                  </strong>{" "}
                  Exploring MCP to create seamless integrations between LLMs and
                  testing tools
                </li>
                <li>
                  •{" "}
                  <strong className="text-purple-300">
                    AI-Assisted Automation:
                  </strong>{" "}
                  Leveraging GitHub Copilot and Azure AI to accelerate test
                  script development and maintenance
                </li>
              </ul>
              <p className="text-gray-300">
                I believe we're at the beginning of an AI-driven transformation
                in software testing. Through my Medium articles and GitHub
                projects, I'm documenting this journey and sharing practical
                insights on how teams can adopt AI to enhance their quality
                practices while maintaining human oversight and judgment.
              </p>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Quick Summary: Awards & Recognition
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Full award details are shown in the IT Experience section under
                respective companies.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-800/40 rounded-lg p-3 border border-purple-500/20">
                  <h5 className="text-base font-semibold text-purple-300">
                    Breakthrough Achiever of the Year - 2024
                  </h5>
                  <p className="text-gray-400 text-xs">
                    DevOn Software Services
                  </p>
                </div>
                <div className="bg-slate-800/40 rounded-lg p-3 border border-purple-500/20">
                  <h5 className="text-base font-semibold text-purple-300">
                    Aurigo Spot Award - Q1 2021
                  </h5>
                  <p className="text-gray-400 text-xs">
                    Aurigo Software Technologies
                  </p>
                </div>
                <div className="bg-slate-800/40 rounded-lg p-3 border border-purple-500/20">
                  <h5 className="text-base font-semibold text-purple-300">
                    Aurigo Bravo Award - Q3 2019
                  </h5>
                  <p className="text-gray-400 text-xs">
                    Aurigo Software Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-gray-300 text-base">
          <p>© 2024 Sritaj Patel. Built with React & Claude AI.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/sritajkumarpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sritaj-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
