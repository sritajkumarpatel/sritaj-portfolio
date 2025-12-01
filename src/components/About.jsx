import React from "react";
import { User } from "lucide-react";
import Section from "./Section";

export default function About({ experience, mediumArticles, aboutMe }) {
  if (!aboutMe) {
    return null;
  }

  return (
    <Section className="bg-slate-900/50">
      <div className="flex items-center gap-3 mb-6">
        <User className="text-purple-400" size={32} />
        <h3 className="text-3xl font-bold">About Me</h3>
      </div>
      <div className="glass-card bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20 mb-6">
        <p className="text-gray-300 mb-6">{aboutMe.fullBio}</p>

        {aboutMe.sections.map((section, sIndex) => (
          <div key={sIndex}>
            <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
              {section.title}
            </h4>

            {section.type === "twocolumn" && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h5 className="text-purple-300 font-semibold mb-2">
                      {subsection.heading}
                    </h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-1">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.type === "text" && (
              <p className="text-gray-300 mb-4">{section.content}</p>
            )}

            {section.type === "text-list" && (
              <>
                <p className="text-gray-300 mb-2">{section.content}</p>
                <ul className="text-gray-300 space-y-2 text-sm mb-6">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      •{" "}
                      <strong className="text-purple-300">{item.label}:</strong>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
