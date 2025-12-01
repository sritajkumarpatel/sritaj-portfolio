import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer({ config }) {
  return (
    <footer className="py-12 px-6 border-t border-purple-500/20 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center text-gray-300 text-base">
        <p>
          © 2025 {config.personal.name}. Built with React, Claude AI and Github
          Copilot VibeCoding.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={`https://github.com/${config.personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={`https://www.linkedin.com/in/${config.personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
