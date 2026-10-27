import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import Section from "./Section";

function ResponsibilityItem({ item }) {
  if (typeof item === "string") {
    return (
      <li className="text-sm flex items-start gap-2" style={{ color: "var(--color-text-secondary)" }}>
        <span style={{ color: "var(--color-accent)" }}>•</span>
        <span>{item}</span>
      </li>
    );
  }

  return (
    <li className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
      <div className="flex items-start gap-2">
        <span style={{ color: "var(--color-accent)" }}>•</span>
        <span>{item.text}</span>
      </div>
      {item.subItems?.length > 0 && (
        <ul className="mt-1 ml-5 space-y-0.5">
          {item.subItems.map((sub) => (
            <li key={sub} className="flex items-start gap-2" style={{ color: "var(--color-text-muted)" }}>
              <span>–</span>
              <span>{sub}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Experience({ experience }) {
  const companies = experience?.length || 0;
  const years = "2015 → Present";

  return (
    <Section>
      <div className="flex items-center gap-3 mb-8">
        <Briefcase style={{ color: "var(--color-primary)" }} size={28} />
        <h3 className="text-3xl font-bold" style={{ color: "var(--color-text-primary)" }}>
          Experience
        </h3>
      </div>

      <div className="glass-card rounded-xl p-6 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
              {years}
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Career Span
            </p>
          </div>
          <div className="w-px h-10 hidden md:block" style={{ backgroundColor: "var(--color-border)" }} />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-accent)" }}>
              {companies} {companies === 1 ? "Company" : "Companies"}
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Organizations
            </p>
          </div>
          <div className="w-px h-10 hidden md:block" style={{ backgroundColor: "var(--color-border)" }} />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
              QE → Architect
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Career Growth
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
          style={{
            background: "linear-gradient(to bottom, var(--color-primary), var(--color-accent), var(--color-primary))",
          }}
        />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative pl-12 md:pl-20"
            >
              <div
                className="absolute left-2 md:left-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: "var(--color-primary)",
                  backgroundColor: exp.current ? "var(--color-primary)" : "var(--color-bg-primary)",
                  top: "1.5rem",
                }}
              >
                {exp.current && (
                  <span
                    className="absolute -inset-1 rounded-full animate-ping opacity-35 pointer-events-none"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                )}
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {exp.current && (
                    <span
                      className="px-3 py-1 rounded-full text-sm font-semibold self-start"
                      style={{
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        color: "#6ee7b7",
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  {exp.roles.map((role) => (
                    <div key={`${role.title}-${role.period}`} className="flex items-center gap-2 py-2">
                      <ChevronRight size={16} style={{ color: "var(--color-accent)" }} />
                      <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                        {role.title}
                      </span>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        ({role.period})
                      </span>
                    </div>
                  ))}
                </div>

                {exp.currentRolesAndResponsibilities?.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                      Roles & Responsibilities
                    </h5>
                    <ul className="space-y-1.5">
                      {exp.currentRolesAndResponsibilities.map((item, iIndex) => (
                        <ResponsibilityItem key={iIndex} item={item} />
                      ))}
                    </ul>
                  </div>
                )}

                {(!exp.currentRolesAndResponsibilities ||
                  exp.currentRolesAndResponsibilities.length === 0) &&
                  exp.highlights?.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                        Highlights
                      </h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm flex items-start gap-2"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            <span style={{ color: "var(--color-accent)" }}>•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {exp.awards?.length > 0 && (
                  <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                    <h5 className="text-sm font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
                      Awards
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.awards.map((award) => (
                        <span
                          key={award.name || award}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "rgba(var(--color-accent-rgb), 0.12)",
                            color: "var(--color-accent)",
                            border: "1px solid rgba(var(--color-accent-rgb), 0.2)",
                          }}
                        >
                          {award.name || award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
