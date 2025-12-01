import React from "react";
import { Linkedin, Mail, Github, BookOpen } from "lucide-react";

export default function Hero({ titles, titleIndex, setTitleIndex, config }) {
  return (
    <section className="pt-32 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent h-16 flex items-center justify-center transition-all duration-500">
            {titles[titleIndex]}
          </h2>
          <p className="text-xl text-gray-300 mb-6">{config.bio.headline}</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {config.bio.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={`https://www.linkedin.com/in/${config.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-transform duration-200 text-white bg-[#0A66C2] hover:bg-[#084B8A] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
            >
              <Linkedin size={20} className="text-white" />
              LinkedIn
            </a>
            <a
              href={`mailto:${config.personal.email}`}
              aria-label={`Send email to ${config.personal.name}`}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href={`https://github.com/${config.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in new tab"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-transform duration-200 text-white bg-[#24292F] hover:bg-[#111214] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24292F]/40"
            >
              <Github size={20} className="text-white" />
              GitHub
            </a>
            <a
              href={`https://medium.com/@${config.personal.medium}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Medium profile in new tab"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-transform duration-200 text-white bg-[#00ab6c] hover:bg-[#008c54] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ab6c]/40"
            >
              <BookOpen size={20} className="text-white" />
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
