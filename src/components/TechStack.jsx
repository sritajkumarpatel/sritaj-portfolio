import React from "react";
import Section from "./Section";
import { Code } from "lucide-react";

export default function TechStack({ techStacks }) {
  return (
    <Section className="bg-slate-900/50">
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
    </Section>
  );
}
