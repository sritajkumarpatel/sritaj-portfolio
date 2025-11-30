import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Nav({ activeSection, setActiveSection }) {
  const navItems = [
    "about",
    "experience",
    "certifications",
    "tech",
    "github",
    "articles",
    "projects",
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sritaj Patel
        </h1>
        <div className="nav-right flex gap-6">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize transition-all ${
                activeSection === section
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-purple-300"
              }`}
            >
              {section === "experience"
                ? "IT Experience"
                : section === "tech"
                  ? "Techstack"
                  : section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
