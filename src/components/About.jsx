import React from "react";
import Section from "./Section";

export default function About({ experience, mediumArticles }) {
  return (
    <Section className="bg-slate-900/50">
      <h3 className="text-3xl font-bold mb-8">About Me</h3>
      <div className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20 mb-6">
        <p className="text-gray-300 mb-6">
          I’ve spent the last decade breaking software to help build it better,
          evolving from manual testing to architecting complex automation
          frameworks. My approach blends the discipline of 'Shift Left'
          engineering with the potential of AI, using tools like Playwright and
          LangChain to make testing smarter, not just faster. I believe quality
          is a team sport, and I’m passionate about bridging the gap between
          developers and QA to bake reliability into every stage of development.
          I’m on a mission to prove that AI doesn’t replace human judgment; it
          supercharges it to deliver software that users love. While I thrive as
          a hands-on contributor, I naturally step up to lead when the team
          needs direction, using my Scrum Master hat to unblock barriers and
          foster a culture of ownership.
        </p>
        <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
          Core Competencies
        </h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h5 className="text-purple-300 font-semibold mb-2">
              AI Engineering & Orchestration
            </h5>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li className="mb-1">
                • Orchestration: LangChain, RAG systems, Model Context Protocol
                (MCP)
              </li>
              <li className="mb-1">
                • LLM Evaluation: DeepEval, Prompt Engineering, Local LLMs
                (Ollama)
              </li>
              <li className="mb-1">
                • Tools: GitHub Copilot, Azure AI, GenSpark
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-purple-300 font-semibold mb-2">
              Test Automation & Architecture
            </h5>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li className="mb-1">
                • UI & Mobile: Playwright, Selenium, TestCafe
              </li>
              <li className="mb-1">• API: REST Assured, Postman</li>
              <li className="mb-1">
                • Strategy: Custom framework design, hybrid & data-driven
                architectures
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-purple-300 font-semibold mb-2">
              Full-Stack & Cloud Infrastructure
            </h5>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li className="mb-1">
                • Development: Java, Python, JavaScript/TypeScript, Spring Boot,
                React
              </li>
              <li className="mb-1">
                • Infrastructure: AWS, Azure, Docker, Kubernetes
              </li>
              <li className="mb-1">
                • CI/CD: Jenkins, GitHub Actions, Azure DevOps
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-purple-300 font-semibold mb-2">
              Agile Leadership & Process
            </h5>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li className="mb-1">
                • Roles: Certified Scrum Master (PSM I, CSM), Technical Lead
              </li>
              <li className="mb-1">
                • Action: Sprint planning, unblocking teams, retrospective
                facilitation
              </li>
              <li className="mb-1">
                • Culture: Cross-functional collaboration, mentoring, quality
                advocacy
              </li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
          Leadership & Quality Philosophy
        </h4>
        <p className="text-gray-300 mb-4">
          I believe quality is a culture, not just a phase. I am a strong
          advocate for{" "}
          <strong className="text-purple-300">Shift Left testing</strong>;
          catching issues when they are cheapest to fix. My approach to
          leadership is to lead from the trenches: I enjoy deep technical work
          while stepping up to guide teams as a Scrum Master when required. I
          focus on unblocking barriers, fostering psychological safety, and
          empowering engineers and QAs to own quality together.
        </p>

        <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
          AI-Native Engineering
        </h4>
        <p className="text-gray-300 mb-2">
          I am actively transitioning from traditional automation toward
          AI-driven engineering. I build systems for testing AI and LLMs; not
          just using AI tools, but creating systems that evaluate and ensure
          their reliability and safety.
        </p>
        <ul className="text-gray-300 space-y-1 text-sm mb-6">
          <li>
            • <strong className="text-purple-300">RAG Systems:</strong> Building
            retrieval-augmented assistants with local LLMs for domain-specific
            testing and validations
          </li>
          <li>
            •{" "}
            <strong className="text-purple-300">
              LLM Reliability & Safety:
            </strong>{" "}
            Implementing Deepeval and evaluation pipelines to measure model
            quality, robustness, and fairness
          </li>
          <li>
            •{" "}
            <strong className="text-purple-300">
              MCP & Tooling Integrations:
            </strong>{" "}
            Prototyping Model Context Protocol (MCP) integrations that embed
            LLMs into IDEs and testing workflows
          </li>
          <li>
            • <strong className="text-purple-300">Developer Velocity:</strong>{" "}
            Leveraging Copilot and AI assistant patterns to accelerate delivery
            while maintaining architectural rigor
          </li>
        </ul>
        {/* Duplicate Quality Philosophy removed - content is in 'Leadership & Quality Philosophy' above */}
        {/* AI & LLM Journey content removed (merged with AI-Native Engineering above) */}
      </div>
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur rounded-xl p-8 border border-purple-500/30">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-3xl">🏆</span>Quick Summary: Awards &
          Recognition
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
            <p className="text-gray-400 text-xs">DevOn Software Services</p>
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
    </Section>
  );
}
