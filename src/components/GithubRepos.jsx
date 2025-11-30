import React from "react";
import Section from "./Section";
import { Github, ExternalLink } from "lucide-react";

export default function GithubRepos({ repos }) {
  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Github className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">GitHub Repositories</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo, index) => (
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
    </Section>
  );
}
