import React from "react";
import Section from "./Section";

export default function Certifications({ certifications }) {
  return (
    <Section className="bg-slate-900/50">
      <h3 className="text-3xl font-bold mb-8">Licenses & Certifications</h3>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
                {cert.credential && (
                  <p className="text-gray-500 text-xs">
                    Credential ID: {cert.credential}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cert.skills.map((skill) => (
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
