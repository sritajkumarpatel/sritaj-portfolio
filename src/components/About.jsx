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
              Test Automation & QE
            </h5>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Selenium, Playwright, TestCafe automation</li>
              <li>• Custom framework design & architecture</li>
              <li>
                • CI/CD integration (Jenkins, Github Actions, Azure DevOps)
              </li>
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
          <strong className="text-purple-300">Shift Left testing</strong> –
          catching issues early in the development lifecycle when they're easier
          and cheaper to fix. Quality isn't just about finding bugs; it's about
          building a culture where everyone owns quality. I believe in fostering
          collaboration between QA, development, and product teams to embed
          quality into every stage of the software delivery process.
        </p>
        <p className="text-gray-300 mb-4">
          My approach combines rigorous testing practices with pragmatic
          automation strategies. I focus on creating maintainable test suites
          that provide fast feedback while ensuring comprehensive coverage. By
          promoting continuous improvement and transparency, I help teams
          deliver reliable software that exceeds user expectations.
        </p>
        <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
          AI & LLM Journey
        </h4>
        <p className="text-gray-300 mb-4">
          The intersection of AI and software testing fascinates me. I'm
          actively exploring how LLMs and AI can revolutionize quality
          engineering – from intelligent test generation to automated bug
          analysis and predictive quality metrics. My recent work focuses on:
        </p>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>
            • <strong className="text-purple-300">RAG Systems:</strong> Building
            Retrieval-Augmented Generation applications with local LLMs to
            create context-aware testing assistants
          </li>
          <li>
            •{" "}
            <strong className="text-purple-300">LLM Testing Frameworks:</strong>{" "}
            Developing robust testing methodologies using Deepeval to ensure AI
            systems perform reliably and ethically
          </li>
          <li>
            •{" "}
            <strong className="text-purple-300">Model Context Protocol:</strong>{" "}
            Exploring MCP to create seamless integrations between LLMs and
            testing tools
          </li>
          <li>
            •{" "}
            <strong className="text-purple-300">AI-Assisted Automation:</strong>{" "}
            Leveraging GitHub Copilot and Azure AI to accelerate test script
            development and maintenance
          </li>
        </ul>
        <p className="text-gray-300">
          I believe we're at the beginning of an AI-driven transformation in
          software testing. Through my Medium articles and GitHub projects, I'm
          documenting this journey and sharing practical insights on how teams
          can adopt AI to enhance their quality practices while maintaining
          human oversight and judgment.
        </p>
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
