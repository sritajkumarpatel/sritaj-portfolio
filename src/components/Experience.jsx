import React from "react";
import { Briefcase } from "lucide-react";
import Section from "./Section";

export default function Experience({ experience }) {
  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">IT Experience</h3>
      </div>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="glass-card experience-card bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold text-purple-300 mb-2">
                  {exp.company}
                </h4>
                <p className="text-gray-400 mb-1">
                  {exp.duration} {exp.current && "• Current"}
                </p>
                <p className="text-gray-500 text-sm">{exp.location}</p>
              </div>
              {exp.current && (
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                  Current
                </span>
              )}
            </div>

            <div className="mb-4 space-y-2">
              {exp.roles.map((role, roleIndex) => (
                <div
                  key={roleIndex}
                  className="flex justify-between items-center py-2 border-l-2 border-purple-500/30 pl-4"
                >
                  <span className="text-lg font-semibold text-purple-200">
                    {role.title}
                  </span>
                  <span className="text-gray-400 text-sm">{role.period}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">
                Key Highlights:
              </h5>
              <ul className="space-y-1">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-gray-300 text-sm">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {exp.awards && exp.awards.length > 0 && (
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <h5 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                  🏆 Awards & Recognition
                </h5>
                <div className="space-y-2">
                  {exp.awards.map((award, aIndex) => (
                    <div
                      key={aIndex}
                      className="bg-yellow-600/10 rounded-lg p-3 border border-yellow-500/20"
                    >
                      <p className="text-yellow-300 font-semibold text-sm">
                        {award.name}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {award.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
