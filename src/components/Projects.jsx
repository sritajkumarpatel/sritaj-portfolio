import React from "react";
import Section from "./Section";
import { Zap } from "lucide-react";

export default function Projects({ projects }) {
  const hasProjects = projects && projects.length > 0;

  if (!hasProjects) {
    return (
      <Section className="bg-slate-900/50">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="text-purple-400" size={32} />
          <h3 className="text-3xl font-bold">Projects — Coming Soon</h3>
        </div>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur rounded-2xl p-16 border-2 border-purple-500/30">
              <Zap className="text-purple-400 mx-auto mb-6" size={64} />
              <h4 className="text-4xl font-bold text-purple-300 mb-4">
                Coming Soon
              </h4>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Exploring projects based on test automation, AI tools, plugins,
                and related integrations. Keep an eye on this space for updates
                and new releases.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Test Automation
                </span>
                <span className="bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                  AI Tools
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Plugins & Integrations
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Projects</h3>
      </div>
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
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
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
    </Section>
  );
}
