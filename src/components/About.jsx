import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Brain, Shield, Terminal, Users, ArrowRight, Compass, Globe, Sparkles } from "lucide-react";
import Section from "./Section";

const ICON_MAP = { Brain, Shield, Terminal, Users };

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About({ aboutMe }) {
  if (!aboutMe) return null;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bioParagraphs = (aboutMe.fullBio || "").split("\n\n").filter(Boolean);

  return (
    <Section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
          <User style={{ color: "var(--color-primary)" }} size={28} />
        </motion.div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
            About Me
          </h3>
          <p className="text-xs md:text-sm" style={{ color: "var(--color-text-muted)" }}>
            The journey, architectural philosophy, and what drives my work
          </p>
        </div>
      </motion.div>

      {/* Bio — flowing multi-paragraph narrative */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass-card rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: "linear-gradient(90deg, var(--color-primary), var(--color-accent), transparent)",
          }}
        />
        <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Global Languages / Collaboration Pill */}
        {aboutMe.languages && aboutMe.languages.length > 0 && (
          <div className="mt-6 pt-5 flex flex-wrap items-center gap-3" style={{ borderTop: "1px solid var(--color-border)" }}>
            <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--color-text-muted)" }}>
              <Globe size={14} style={{ color: "var(--color-primary)" }} />
              Languages:
            </span>
            <div className="flex flex-wrap gap-2">
              {aboutMe.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(var(--color-primary-rgb), 0.08)",
                    color: "var(--color-primary)",
                    border: "1px solid rgba(var(--color-primary-rgb), 0.15)",
                  }}
                >
                  {lang.name} <span style={{ opacity: 0.7 }}>({lang.proficiency})</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* What I Do — 4 pillars */}
      <div className="mb-4">
        <h4 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--color-text-primary)" }}>
          <Sparkles size={18} style={{ color: "var(--color-accent)" }} />
          Core Pillars of Practice
        </h4>
      </div>

      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-4 mb-8"
      >
        {aboutMe.whatIdo.map((item) => {
          const IconComponent = ICON_MAP[item.icon] || Brain;
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px ${item.color}15`,
                transition: { duration: 0.3 },
              }}
              className="glass-card rounded-2xl p-5 relative overflow-hidden cursor-default group"
              style={{ borderTop: `2px solid ${item.color}` }}
            >
              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ background: item.color }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="p-2.5 rounded-xl"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <IconComponent size={20} style={{ color: item.color }} />
                  </motion.div>
                  <h4 className="text-base font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {item.title}
                  </h4>
                </div>

                <ul className="space-y-2.5">
                  {item.capabilities.map((cap, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-xs md:text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <ArrowRight
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: item.color }}
                      />
                      <span>{cap}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* How I Think & Build — Engineering Principles */}
      {aboutMe.principles && aboutMe.principles.length > 0 && (
        <div className="mb-8">
          <div className="mb-4">
            <h4 className="text-lg font-bold flex items-center gap-2" style={{ color: "var(--color-text-primary)" }}>
              <Compass size={18} style={{ color: "var(--color-primary)" }} />
              How I Think & Build
            </h4>
            <p className="text-xs md:text-sm" style={{ color: "var(--color-text-muted)" }}>
              Guiding architectural beliefs refined over 11 years in engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {aboutMe.principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-5 relative overflow-hidden"
                style={{
                  borderLeft: "3px solid var(--color-primary)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(var(--color-primary-rgb), 0.1)", color: "var(--color-primary)" }}>
                    0{index + 1}
                  </span>
                  <h5 className="text-sm md:text-base font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {principle.title}
                  </h5>
                </div>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Philosophy — single line quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card rounded-2xl p-6 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
          }}
        />
        <p
          className="relative text-sm md:text-base italic leading-relaxed max-w-3xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          "{aboutMe.philosophy}"
        </p>
      </motion.div>
    </Section>
  );
}
