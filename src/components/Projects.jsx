import React from "react";
import Section from "./Section";
import { Zap, Star, BookOpen } from "lucide-react";

export default function Projects({ projects }) {
  const hasProjects = projects && projects.length > 0;

  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Projects</h3>
      </div>

      {/* Featured Project - Plug and Play Portfolio */}
      <div className="mb-12">
        <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Star size={20} className="text-yellow-400" />
          Featured Project
        </h4>
        <div className="glass-card bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur rounded-xl p-8 border-2 border-purple-500/40 hover:border-purple-500/60 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-2xl font-bold text-purple-300 mb-2">
                Sritaj Portfolio - Plug-and-Play Template
              </h4>
              <p className="text-sm text-purple-400 flex items-center gap-2">
                <Star size={14} className="text-yellow-400" />
                Open Source Template
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-base mb-4 leading-relaxed">
            A fully plug-and-play portfolio template built with React, Vite, and
            Tailwind CSS. Customize your entire portfolio by editing JSON
            files—zero coding required. Deploy to GitHub Pages in minutes with
            AI/Copilot automation support.
          </p>

          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-3 font-semibold">
              Key Features:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                🎨 Fully Customizable
              </span>
              <span className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                📝 JSON-Based Content
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                🤖 Copilot Integration
              </span>
              <span className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                🚀 GitHub Pages Ready
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                ⚡ Zero Hardcoded Content
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-3 font-semibold">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React 18",
                "Vite",
                "Tailwind CSS",
                "Lucide React",
                "GitHub Pages",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-xs border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4 mb-6 border border-slate-700">
            <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-purple-400" />
              <strong>Quick Start with Copilot:</strong>
            </p>
            <ol className="text-sm text-gray-400 space-y-2 ml-4 list-decimal">
              <li>
                Open{" "}
                <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">
                  docs/QUICK_START.md
                </code>
              </li>
              <li>
                Copy prompt from{" "}
                <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">
                  docs/COPILOT_PROMPT.md
                </code>
              </li>
              <li>Paste in Copilot Chat and add your info</li>
              <li>
                Run{" "}
                <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">
                  npm run deploy
                </code>
              </li>
              <li>Portfolio live in 5 minutes! ✨</li>
            </ol>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/sritajkumarpatel/sritaj-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              View on GitHub →
            </a>
            <a
              href="https://sritajkumarpatel.github.io/sritaj-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 px-6 py-2 rounded-lg text-sm font-semibold transition-colors border border-pink-500/30"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>

      {/* User Projects */}
      {hasProjects && (
        <div className="mb-12">
          <h4 className="text-xl font-bold text-purple-300 mb-4">
            More Projects
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h4 className="text-xl font-bold text-purple-300 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm"
                    >
                      View Project →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Coming Soon Section */}
      <div>
        <h4 className="text-xl font-bold text-purple-300 mb-4">Coming Soon</h4>
        <div className="flex items-center justify-center">
          <div className="text-center w-full">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur rounded-2xl p-12 border-2 border-purple-500/30">
              <Zap className="text-purple-400 mx-auto mb-4" size={48} />
              <h4 className="text-2xl font-bold text-purple-300 mb-3">
                More Exciting Projects
              </h4>
              <p className="text-gray-400 text-base mb-6 max-w-md mx-auto">
                Working on innovative projects in test automation, AI tools,
                plugins, and related integrations. Exciting updates coming soon!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  🧪 Test Automation
                </span>
                <span className="bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                  🤖 AI Tools
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  🔌 Plugins & Integrations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
