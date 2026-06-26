import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import Section from "./Section";

export default function About({ experience, mediumArticles, aboutMe }) {
  if (!aboutMe) {
    return null;
  }

  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <User style={{ color: "var(--color-primary)" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          About Me
        </h3>
      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card rounded-xl p-8 mb-6"
      >
        <p className="mb-6 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {aboutMe.fullBio}
        </p>

        {aboutMe.sections.map((section, sIndex) => (
          <div key={sIndex}>
            <h4 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--color-primary)" }}>
              {section.title}
            </h4>

            {section.type === "twocolumn" && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {section.subsections.map((subsection, subIndex) => (
                  <motion.div
                    key={subIndex}
                    whileHover={{ x: 5 }}
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: "rgba(var(--color-primary-rgb), 0.05)",
                      border: "1px solid rgba(var(--color-primary-rgb), 0.1)",
                    }}
                  >
                    <h5 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                      {subsection.heading}
                    </h5>
                    <ul className="space-y-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-1 flex items-start gap-2">
                          <span style={{ color: "var(--color-primary)" }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {section.type === "text" && (
              <p className="mb-4 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {section.content}
              </p>
            )}

            {section.type === "text-list" && (
              <>
                <p className="mb-2 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {section.content}
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      className="p-2 rounded-lg transition-colors"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span style={{ color: "var(--color-primary)" }}>•</span>{" "}
                      <strong style={{ color: "var(--color-primary)" }}>{item.label}:</strong>{" "}
                      {item.description}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </Section>
  );
}