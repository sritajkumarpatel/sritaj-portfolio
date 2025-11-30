import React from "react";
import Section from "./Section";
import { Award } from "lucide-react";

export default function Certifications({ certifications }) {
  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">Licenses & Certifications</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all h-full"
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
              {cert.logo && (
                <div className="mt-0 md:mt-0 md:ml-6 flex-shrink-0 flex items-center justify-center w-20 h-20">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    title={cert.name}
                    loading="lazy"
                    className={`object-contain w-20 h-20`}
                  />
                </div>
              )}
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
