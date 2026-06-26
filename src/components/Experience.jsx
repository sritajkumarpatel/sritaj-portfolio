import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "./Section";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience({ experience }) {
  return (
    <Section>
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase style={{ color: "var(--color-primary)" }} size={32} />
        </motion.div>
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          IT Experience
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-xl p-6 mb-8"
      >
        <p className="font-semibold text-lg" style={{ color: "var(--color-primary)" }}>
          Career Evolution: 2015 → 2026 (11 Years and Counting)
        </p>
        <div className="my-4" style={{ borderTop: "1px solid var(--color-border)" }}></div>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          4 Companies • Quality Engineer → Senior Architect • AI Innovation Pioneer
        </p>
      </motion.div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card experience-card rounded-xl p-8"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                  {exp.company}
                </h4>
                <p style={{ color: "var(--color-text-muted)" }}>
                  {exp.duration} {exp.current && "• Current"}
                </p>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {exp.location}
                </p>
              </div>
              {exp.current && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#6ee7b7",
                  }}
                >
                  Current
                </motion.span>
              )}
            </div>

            <div className="mb-4 space-y-2">
              {exp.roles.map((role, roleIndex) => (
                <motion.div
                  key={roleIndex}
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center py-2 pl-4"
                  style={{ borderLeft: "2px solid var(--color-border)" }}
                >
                  <span className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {role.title}
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {role.period}
                  </span>
                </motion.div>
              ))}
            </div>

            {exp.currentRolesAndResponsibilities &&
              exp.currentRolesAndResponsibilities.length > 0 && (
                <div className="mt-4">
                  <h5 className="text-sm font-semibold mb-3" style={{ color: "#93c5fd" }}>
                    💼 Current Roles & Responsibilities:
                  </h5>
                  <ul className="space-y-1">
                    {exp.currentRolesAndResponsibilities.map((item, iIndex) => (
                      <div key={iIndex}>
                        {typeof item === "string" ? (
                          <motion.li
                            whileHover={{ x: 3 }}
                            className="text-sm p-1 rounded transition-colors"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {item.startsWith("  •") ? item : `• ${item}`}
                          </motion.li>
                        ) : (
                          <div>
                            <motion.li
                              whileHover={{ x: 3 }}
                              className="text-sm p-1 rounded transition-colors"
                              style={{ color: "var(--color-text-secondary)" }}
                            >
                              • {item.text}
                            </motion.li>
                            {item.subItems && item.subItems.length > 0 && (
                              <ul className="ml-4 space-y-1 mt-1">
                                {item.subItems.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="text-sm p-1"
                                    style={{ color: "var(--color-text-secondary)" }}
                                  >
                                    • {subItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              )}

            {exp.servedAs && exp.servedAs.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-semibold mb-3" style={{ color: "#6ee7b7" }}>
                  🎯 Served As:
                </h5>
                <ul className="space-y-1">
                  {exp.servedAs.map((role, sIndex) => (
                    <motion.li
                      key={sIndex}
                      whileHover={{ x: 3 }}
                      className="text-sm p-1 rounded transition-colors"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      • {role}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {(!exp.currentRolesAndResponsibilities ||
              exp.currentRolesAndResponsibilities.length === 0) &&
              (!exp.servedAs || exp.servedAs.length === 0) &&
              exp.highlights &&
              exp.highlights.length > 0 && (
                <div className="mt-4">
                  <h5 className="text-sm font-semibold mb-2" style={{ color: "var(--color-text-muted)" }}>
                    Key Highlights:
                  </h5>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        whileHover={{ x: 3 }}
                        className="text-sm p-1 rounded transition-colors"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        • {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

            {exp.awards && exp.awards.length > 0 && (
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
                <h5 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "#fcd34d" }}>
                  🏆 Awards & Recognition
                </h5>
                <div className="space-y-2">
                  {exp.awards.map((award, aIndex) => (
                    <motion.div
                      key={aIndex}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-lg p-3"
                      style={{
                        backgroundColor: "rgba(234, 179, 8, 0.1)",
                        border: "1px solid rgba(234, 179, 8, 0.2)",
                      }}
                    >
                      <p className="font-semibold text-sm" style={{ color: "#fcd34d" }}>
                        {award.name}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                        {award.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}