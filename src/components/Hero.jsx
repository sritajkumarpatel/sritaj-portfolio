import React from "react";
import { Linkedin, Mail, Github, BookOpen } from "lucide-react";

export default function Hero({ titles, titleIndex, setTitleIndex }) {
  return (
    <section className="pt-32 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent h-16 flex items-center justify-center transition-all duration-500">
            {titles[titleIndex]}
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Bridging Quality Engineering with AI Innovation
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Passionate about leveraging AI and LLMs to revolutionize software
            testing and quality practices. Combining 10 years of QE expertise
            with cutting-edge AI technologies to build intelligent testing
            solutions and drive continuous innovation in Agile environments.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/sritaj-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:sritajpatel@outlook.com"
              aria-label="Send email to Sritaj"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://github.com/sritajkumarpatel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in new tab"
              className="flex items-center gap-2 bg-black hover:bg-slate-800 px-6 py-3 rounded-lg transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://medium.com/@sritajp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Medium profile in new tab"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all"
            >
              <BookOpen size={20} />
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
