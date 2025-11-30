import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
