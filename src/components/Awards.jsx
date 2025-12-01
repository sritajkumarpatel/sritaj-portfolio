import React from "react";
import Section from "./Section";

export default function Awards({ awards }) {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <Section className="bg-slate-900/50 pt-1">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🏆</span>
        <h3 className="text-3xl font-bold">
          Quick Summary: Awards & Recognition
        </h3>
      </div>
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur rounded-xl p-6 border border-purple-500/30">
        <div className="flex flex-col items-center gap-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-lg p-3 border border-purple-500/20 max-w-lg w-full text-center"
            >
              <h5 className="text-lg font-semibold text-purple-300">
                {award.title}
                {award.year && ` - ${award.year}`}
                {award.quarter && ` ${award.quarter}`}
              </h5>
              <p className="text-gray-400 text-sm">{award.company}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
