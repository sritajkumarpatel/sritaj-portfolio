import React from "react";
import Section from "./Section";
import { Zap } from "lucide-react";

export default function Projects() {
  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">AI-Powered Projects</h3>
      </div>
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur rounded-2xl p-16 border-2 border-purple-500/30">
            <Zap className="text-purple-400 mx-auto mb-6" size={64} />
            <h4 className="text-4xl font-bold text-purple-300 mb-4">
              Coming Soon
            </h4>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Exciting AI-powered projects are in development. Stay tuned for
              innovative tools combining test automation, LLM capabilities, and
              agile practices!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                AI Test Generators
              </span>
              <span className="bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                LLM Testing Tools
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                Agile Analytics
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
