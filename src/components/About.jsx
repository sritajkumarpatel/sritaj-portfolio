import React from "react";
import { motion } from "framer-motion";
import { User, Target, Lightbulb, Rocket, Award } from "lucide-react";
import Section from "./Section";

const SECTION_ICONS = {
  "Core Competencies": Target,
  "Leadership & Quality Philosophy": Lightbulb,
  "Automation & Agent Engineering": Rocket,
  "AI-Native Engineering": Award,
};

export default function About({ aboutMe }) {
  if (!aboutMe) {
    return null;
  }

  return (
    <Section>
      <div className="flex items-center gap-3 mb-8">
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

      {/* Bio Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="glass-card rounded-xl p-6 mb-8"
      >
        <div className="flex items-start gap-4">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="hidden md:block w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p
              className="leading-relaxed text-sm md:text-base whitespace-pre-line"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {aboutMe.fullBio}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-6">
        {aboutMe.sections.map((section, sIndex) => {
          const IconComponent = SECTION_ICONS[section.title] || User;
          return (
            <motion.div
              key={sIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIndex * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
                  }}
                >
                  <IconComponent size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                <h4 className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>
                  {section.title}
                </h4>
              </div>

              {section.type === "twocolumn" && (
                <div className="grid md:grid-cols-2 gap-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <motion.div
                      key={subIndex}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: "rgba(var(--color-primary-rgb), 0.05)",
                        border: "1px solid rgba(var(--color-primary-rgb), 0.1)",
                      }}
                    >
                      <h5 className="font-semibold mb-2 text-sm" style={{ color: "var(--color-primary)" }}>
                        {subsection.heading}
                      </h5>
                      <ul className="space-y-1.5 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="mt-0.5" style={{ color: "var(--color-accent)" }}>→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {section.type === "text" && (
                <p className="leading-relaxed text-sm whitespace-pre-line" style={{ color: "var(--color-text-secondary)" }}>
                  {section.content}
                </p>
              )}

              {section.type === "text-list" && (
                <>
                  <p className="mb-4 leading-relaxed text-sm whitespace-pre-line" style={{ color: "var(--color-text-secondary)" }}>
                    {section.content}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        whileHover={{ y: -3 }}
                        className="p-3 rounded-lg"
                        style={{
                          backgroundColor: "rgba(var(--color-accent-rgb), 0.05)",
                          border: "1px solid rgba(var(--color-accent-rgb), 0.1)",
                        }}
                      >
                        <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-accent)" }}>
                          {item.label}
                        </p>
                        <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
